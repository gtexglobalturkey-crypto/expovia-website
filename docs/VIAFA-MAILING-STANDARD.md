# VIAFA Mailing Standardı (KANONİK)

**Durum:** Tek kanonik standart · **Son güncelleme:** 14.10.2026 (2. revizyon) · **Kapsam:** WAMPEX 2027 ve SECUREX 2027 kampanyalarında kullanılan yöntemler

Bu belge VIAFA mailing çalışmalarının **tek kanonik standardıdır**. `docs/VIAFA_MAILING_STANDARD.md` (12.10.2026, İngilizce) içeriğinin tamamı bu belgeye taşındı (Bölüm 3, Ek A, Ek B, Ek C). O dosya yalnızca yönlendirme notuyla korunuyor.

Belge mevcut sistemi **değiştirmeden** belgeler. Her bilginin dayanağı işaretlidir:

- **[Doğrulandı]:** Dosyada veya canlı kontrolde görüldü.
- **[Kullanıcı doğruladı]:** VIAFA ekibi canlı kayıtlara (SEND_LOG, Gmail) dayanarak teyit etti.
- **[Çıkarım]:** Dosya adlarından ve yapısından çıkarıldı; ilk kullanımda teyit edin.
- **[Doğrulanmadı]:** Kullanıldığına dair kayıt yok; kullanılmış gibi gösterilmez.

---

## 1. Sistem nasıl çalışır?

```
Firma araştırması / veri kaynakları
        │
        ▼
VIAFA_MAILING_MASTER (Google Sheets, canlı)
  MASTER · SUPPRESSION · CAMPAIGNS · RULES · CAMPAIGN_BUILDER · SEND_LOG
        │  segment seçimi + SUPPRESSION / SEND_LOG / mükerrer / izin kontrolü
        ▼
Kampanyaya özel alıcı dosyası (Google Sheets; her kampanya için ayrı)
        │
        ▼
Kampanya HTML'i (repo: email-campaigns/<kampanya>/)  +  görseller (repo: public/email-assets/ → https://www.expoviafair.com/email-assets/…)
        │  git push → Cloudflare Pages (~30–60 sn)
        ▼
Google Apps Script: GmailApp.createDraft(htmlBody)  →  TEST TASLAĞI  →  görsel kontrol  →  açık onay
        │
        ▼
ONAYLI GÖNDERİM YÖNTEMİ (kampanya bazında seçilir ve kaydedilir; bkz. Bölüm 2.4)
  • BCC (Gmail hesabından)        • Bireysel e-posta        • Gmail Merge
        │
        ▼
Gönderim sonrası: SEND_LOG + CAMPAIGNS + MASTER güncellemesi (Bölüm 8); kalıcı bounce ve opt-out → SUPPRESSION
```

**Temel kural:** MASTER'da kayıtlı olmak tek başına gönderim izni değildir.

---

## 2. Scriptler ve gönderim yöntemleri

### 2.1 Test taslağı scripti: `createWampexTestDraft` [Doğrulandı]

| | |
|---|---|
| **Görevi** | **Yalnızca HTML test taslağı oluşturur. Toplu gönderim scripti değildir; e-posta göndermez.** |
| **Kaynak kod** | `email-campaigns/wampex-2027-mining/HANDOFF-WAMPEX-2027-GMAIL.md` › Bölüm 3. Dosya 14.10.2026'da içeriği değiştirilmeden Git'e eklendi (commit `364c383`). |
| **Çalıştığı yer** | Google Apps Script (https://script.google.com), WAMPEX testi için `ahmet@expoviafair.com` hesabında. Proje bilgisayardaki dosyalardan görünmez. |
| **Ne yapar** | 1) Kampanya HTML'ini GitHub raw adresinden `UrlFetchApp.fetch` ile alır. 2) HTML'deki `<img>` sayısını günlüğe yazar. 3) `GmailApp.createDraft(TO, SUBJECT, plain, { htmlBody: html, name: 'VIAFA' })` ile test taslağı oluşturur. 4) Kaydedilen taslaktaki `<img>` sayısını yazar. |
| **Bağlı dosyalar** | `email-campaigns/wampex-2027-mining/wampex-2027-mining-campaign.html` (raw GitHub) · `public/email-assets/wampex-2027-mining/*`, `public/email-assets/viafa-logo.png` · Unsplash CDN görselleri |
| **Doğrulama** | 12.10.2026 çalıştırma günlüğünde kaynakta 17, taslakta 17 `<img>` çıktı; görseller Gmail taslağında doğru göründü (Ek C). 14.10.2026'da raw HTML'de 17 `<img>` ve tüm görsel adreslerinin HTTP 200 döndüğü yeniden doğrulandı. |
| **Neden bu yöntem** | Claude'un Gmail bağlayıcısı (`create_draft`) HTML'i temizleyip tüm `<img>` etiketlerini siliyordu. `GmailApp.createDraft` HTML'i olduğu gibi korur. |

### 2.2 Genel şablon: `createCampaignTestDraft` [Doğrulandı – şablon]

- **Konum:** Ek A (kod, değiştirilmeden taşındı).
- **Kullanım:** Aynı yöntem; her kampanyada `HTML_URL`, `TO`, `SUBJECT` ve `EXPECTED_IMAGES` değiştirilir. Kaynak ve taslakta farklı görsel sayısı çıkarsa script hata verip durur. Bu da yalnızca test taslağı oluşturur.

### 2.3 SECUREX uyarlaması: `securex-2027-gmail-draft.gs` [Doğrulandı – dosya]

- **Konum:** `email-campaigns/securex-2027/securex-2027-gmail-draft.gs` (Git'te).
- **`createSecurexTestDraft()`:** Yalnızca test taslağı oluşturur. Ek olarak:
  - `EXPECTED_IMG_COUNT: 7` kontrolü
  - `replyTo: gulsah@expoviafair.com`
  - Kaynak ve taslaktaki görsel sayısı farklıysa durma
  - GitHub'a erişilemezse projeye eklenen `securex` adlı HTML dosyasını kullanma
- **`auditMailingList()`:** Alıcı sayfasını (`Gonderim Adaylari`) salt okunur inceler; sayfaya yazmaz.
- **Kullanım:** Apps Script editöründe kullanıldığı biliniyor (editördeki kopyada görsel sayısı 5'ten 7'ye güncellendi). Çalıştırma günlüğü dosyalarda yok.

### 2.4 Gönderim yöntemleri

Repoda ve Drive'da **toplu gönderim yapan bir script yoktur**. Gönderim Gmail üzerinden, aşağıdaki yöntemlerden biriyle yapılır. Her kampanyada hangi yöntemin kullanıldığı ayrıca kaydedilir (Bölüm 8.1).

| Yöntem | Tanım | Kullanıldığı doğrulanan gönderimler |
|---|---|---|
| **BCC** | Tek bir Gmail iletisinde alıcılar BCC alanına eklenir | **WAMPEX 2027, 05.10.2026:** Gülşah'ın Gmail hesabından, **823 alıcı**, SEND_LOG'a kayıtlı [Kullanıcı doğruladı] |
| **Bireysel e-posta** | Her alıcıya ayrı ileti | **WAMPEX 2027 B grubu, 14.10.2026:** `gulsah@expoviafair.com` hesabından **8 e-posta**, SEND_LOG'a kayıtlı [Kullanıcı doğruladı] |
| **Gmail Merge** | Google Sheets alıcı listesinden kişiselleştirilmiş toplu gönderim | **Belgelenmiş bir kampanyada kullanıldığı doğrulanmadı** [Doğrulanmadı]. Hazırlık izleri var: RULES'taki "Merge parça limiti 1500" kuralı ve kablo listesinin ~1.133 alıcılık A–D parçalarına bölünmüş olması [Doğrulandı – dosya]. |

- **SECUREX 2027:** SECUREX alıcı listesinde (13.10.2026 dışa aktarımı) "Teknik hata" ve "Geçici hata" durumları var. Bu, bir gönderim yapıldığını gösteriyor [Çıkarım]. Yöntem, tarih, gönderen hesap ve alıcı sayısı bu belgede doğrulanmadı; SEND_LOG'dan Bölüm 8.2'ye işlenmeli.
- **Limitler:** Her yöntemde Google Workspace gönderim limitleri geçerlidir. Gmail Merge için RULES'taki 1.500 alıcılık parça limiti uygulanır. BCC ve bireysel gönderimlerde ileti başına ve günlük alıcı limitlerini güncel Google Workspace belgelerinden kontrol edin; parça büyüklüğünü CAMPAIGNS ve SEND_LOG'a yazın.

---

## 3. Zorunlu kurallar

*Eski belgedeki 8 kural birebir korundu.*

1. Onaylı kampanya metnini ve tasarımını koruyun. Duyarlı, tablo tabanlı, mümkün olduğunca inline CSS'li e-posta HTML'i kullanın.
2. Tüm görselleri herkese açık HTTPS adreslerinde barındırın; HTTP 200 ve uygun `image/*` Content-Type kontrol edin.
3. Nihai HTML kampanya taslaklarını, WAMPEX testinde `<img>` etiketlerini silen Gmail bağlayıcısı yöntemiyle **asla** oluşturmayın. Hiçbir bağlayıcının ham HTML'i koruduğunu, gerçek çıktısını doğrulamadan varsaymayın.
4. Test taslağını **Google Apps Script `GmailApp.createDraft()`** ile, orijinal HTML'in tamamı `htmlBody` içinde olacak şekilde oluşturun. HTML'i onaylı yayın kaynağından (ör. reponun raw GitHub adresi) okuyun.
5. Kaynakta ve kaydedilen Gmail taslağında (`draft.getMessage().getBody()`) `<img>` sayın. **Beklenen sayı kampanyaya özgüdür** (WAMPEX 2027: 17, SECUREX 2027: 7). Sayılar farklıysa durun ve inceleyin. Sayının tutması tek başına görsellerin doğru göründüğünü kanıtlamaz.
6. Taslağı Gmail'de açın. Logoları, hero görselini, sektör görsellerini, broşürü, CTA'yı ve bağlantıları masaüstünde ve mobilde görsel olarak kontrol edin; hem gerçek görselleri hem düzeni.
7. Açık onay olmadan test e-postası göndermeyin. Teslim edilen test kontrol edilip açıkça onaylanmadan merge, BCC veya başka bir toplu gönderim başlatmayın.
8. Görselleri silen bir taslak aracını atlatmak için kaynak HTML'i değiştirmeyin; önce taslak oluşturma yolunu düzeltin.

---

## 4. Çalıştırma adımları (test taslağı)

Terminal komutu yoktur; script Apps Script editöründe çalışır.

1. **Gönderen hesapla** https://script.google.com adresinde kampanyanın Apps Script projesini açın. Yoksa: **Yeni proje** oluşturun, 2.1 veya Ek A'daki kodu `Code.gs`'ye yapıştırın.
2. Sabitleri ayarlayın:
   - `HTML_URL = https://raw.githubusercontent.com/gtexglobalturkey-crypto/expovia-website/main/email-campaigns/<kampanya>/<dosya>.html`
   - `TO`
   - `SUBJECT`
   - `EXPECTED_IMAGES`
3. Fonksiyonu seçip **Çalıştır**'a basın. İlk çalıştırmada Gmail ve harici URL izinlerini onaylayın.
4. Günlükte kaynak ve taslaktaki `<img>` sayılarının eşit olduğunu görün.
5. Gmail › **Taslaklar**'da taslağı açıp görsel kontrolü yapın (Bölüm 7).

**Not:** Editördeki kod repodaki `.gs` dosyasıyla otomatik eşitlenmez; repoda değişiklik yaptıysanız editörü de güncelleyin. HTML ise raw GitHub'dan her çalıştırmada yeniden alınır.

---

## 5. Gerekli dosyalar ve bağımlılıklar

| Öğe | Konum | Not |
|---|---|---|
| Kampanya HTML | `email-campaigns/<kampanya>/<kampanya>-campaign.html` | Git'te, `main` dalında olmalı (raw URL için) |
| Görseller | `public/email-assets/<kampanya>/…` | Push'tan sonra `https://www.expoviafair.com/email-assets/…` adresinde yayınlanır |
| Ortak görseller | `public/email-assets/viafa-logo.png`, `gulsah-signature.png` | |
| Apps Script | script.google.com (gönderen hesap) + kodun repodaki kopyası | Bölüm 2 |
| Mailing master | Drive › `VIAFA/Mailing/VIAFA_MAILING_MASTER` (Google Sheets, canlı) | Bilgisayardan okunamaz (`.gsheet` kısayolu); Sheets'te açılır |
| Kampanya alıcı dosyaları | Drive › `VIAFA/Mailing/<KAMPANYA>/…` (Google Sheets) | Her kampanya için ayrı dosya. Örnekler: `MADEN_MAILING_MASTER_2026-09-28`, `SECUREX_2027_MAILING_MASTER_2026-09-28`, `ELEKTRIK_KABLO_MASTER_A–D`, `TEL_KABLO_MAILING_MASTER` |
| Kampanya devir notu | `email-campaigns/<kampanya>/HANDOFF-…-GMAIL.md` | Kampanya sabitleri, görsel listesi, test adımları |
| Hosting | GitHub `gtexglobalturkey-crypto/expovia-website` (public) → Cloudflare Pages | `public/` altındaki her dosya herkese açık yayınlanır |

---

## 6. VIAFA_MAILING_MASTER yapısı

Canlı Google Sheets dosyası `VIAFA_MAILING_MASTER` altı sekme içerir [Kullanıcı doğruladı]: **MASTER, SUPPRESSION, CAMPAIGNS, RULES, CAMPAIGN_BUILDER, SEND_LOG**.

| Sekme | Sütunlar | Dayanak |
|---|---|---|
| **MASTER** | E-posta · Firma Adı · Sektör · Kaynak · Durum · Opt-out · Bounce · Son Kampanya · Son Gönderim · Not | [Doğrulandı – arşiv kopyası `VIAFA_MAILING_SYSTEM.xlsx`, 05.10.2026] |
| **SUPPRESSION** | E-posta · Firma Adı · Neden · Tarih · Kaynak · Not | [Doğrulandı – arşiv kopyası] |
| **CAMPAIGNS** | Kampanya · Fuar · Sektör · Gönderim Tarihi · Toplam Alıcı · Part Sayısı · Durum · Not | [Doğrulandı – arşiv kopyası] |
| **RULES** | Kural · Değer | [Doğrulandı] Merge parça limiti 1500 · Kalıcı bounce → SUPPRESSION · Geçici gecikme / dolu kutu → aktif tutulur · Opt-out → SUPPRESSION · Tekrar gönderim → kampanya geçmişi kontrol edilir · E-posta standardı: ASCII + boşluksuz + hücre başına tek adres |
| **CAMPAIGN_BUILDER** | Canlı dosyada var. **Sütunları doğrulanmadı; tahmin edilmedi.** Canlı dosyadan teyit edilince eklenecek. | [Kullanıcı doğruladı – yalnızca sekme] |
| **SEND_LOG** | E-posta · Kampanya · Part · Gönderim Tarihi · Sonuç · Not. WAMPEX 05.10.2026 (823 alıcı) ve 14.10.2026 (8 e-posta) gönderimleri kayıtlı. | [Kullanıcı doğruladı – sütunlar ve kayıtlar] |

Canlı dosyadaki sütun yapısı bu belgedekinden farklıysa **canlı dosya esastır**. Arşiv kopyası 05.10.2026 tarihlidir.

**Kampanya alıcı dosyası biçimi:**

- **SECUREX** (13.10.2026 dışa aktarımı): `No · Firma Adı · E-posta · Kaynak · Mailing Durumu`. Durum değerleri: `Hazır` · `Teknik hata – tekrar kontrol` · `Geçici hata – tekrar kontrol` [Doğrulandı].
- **WAMPEX** (yerel kopyalar): `Firma / Kişi · E-posta · İlişki Türü · Kaynak Alan · Web Sitesi · Kaynak Satır · Gönderim Durumu · Teslimat Durumu · Not`; ayrıca `Kontrol` ve `Özet` sekmeleri [Doğrulandı]. Yerel kopyalarda gönderim sütunları boştur; gönderim kaydının esası **SEND_LOG**'dur.

---

## 7. HTML ve görsel standardı · Test prosedürü

**HTML ve görseller**

- **Yapı:** Tablo tabanlı, 600 px, **inline CSS**. `<style>` yalnızca mobil iyileştirme içindir.
- **Dil:** `<meta charset="UTF-8">`, `lang="tr"`.
- **Büyük harf:** CSS `text-transform: uppercase` + `lang="tr"` "AFRİCA" gibi hatalı İ üretir; büyük harfli metni doğrudan büyük yazın.
- **Görseller:** Yalnızca herkese açık HTTPS adresleri kullanılır. Base64, CID ve ek dosya yoktur. Her `<img>`'de `width`, `alt` ve `display:block` bulunur.
- **Barındırma:** Görseller `public/email-assets/<kampanya>/` altında tutulur. Lisans kontrolü yapılır; dış CDN yerine kendi sunucumuz tercih edilir.
- **Boyut:** HTML 102 KB'ın altında olmalı (Gmail kırpar). WAMPEX 28 KB, SECUREX 19 KB.
- **Zorunlu öğeler:** Preheader · gönderen şirket bilgisi · listeden çıkma satırı · tek ana çağrı (CTA).
- **İçerik:** Doğrulanmamış istatistik, fiyat, teşvik ya da temsilcilik iddiası yazılmaz.

**Test prosedürü**

1. HTML ve görselleri push edin; Cloudflare yayınını bekleyin.
2. Her görsel adresinin HTTP 200 + `image/*` döndüğünü kontrol edin.
3. Raw HTML adresi HTTP 200 dönmeli; `<img>` sayısı repodaki dosyayla aynı olmalı.
4. Apps Script ile test taslağı oluşturun. Kaynak ve taslak görsel sayısı eşit olmalı; farklıysa durun.
5. Taslağı masaüstü ve mobilde açıp görsel kontrol yapın.
6. Test e-postasının gönderilmesi ve toplu/BCC/merge gönderimin başlaması **ayrı ayrı açık onay** gerektirir.

---

## 8. Kampanya kaydı ve gönderim sonrası prosedür

### 8.1 Zorunlu kayıt alanları (her gönderim için)

Her gönderim, yöntemi ne olursa olsun (BCC, bireysel, Gmail Merge, test), gönderimden hemen sonra kaydedilir.

| Alan | Açıklama | Örnek |
|---|---|---|
| **Kampanya kimliği** | `<FUAR><YIL>-<SEGMENT>-<YYYYMMDD>-<YÖNTEM>[-<PARÇA>]` | `WAMPEX2027-TR-MADEN-20261005-BCC` |
| Fuar / kampanya adı | | WAMPEX 2027 |
| Segment / grup | Liste veya öncelik grubu | Maden listesi / B grubu |
| **Gönderen hesap** | Tam e-posta adresi | `gulsah@expoviafair.com` |
| **Gönderim yöntemi** | BCC · Bireysel · Gmail Merge · Test taslağı | BCC |
| **Tarih (ve saat)** | Gönderim tarihi | 05.10.2026 |
| **Alıcı sayısı** | Bu gönderimdeki alıcı sayısı; parçalıysa parça başına | 823 |
| Parça | Parçalı gönderimde parça no / toplam | 1/1 |
| Konu satırı | | |
| İçerik kaynağı | HTML dosyası + commit SHA veya görsel/flyer adı | `wampex-2027-mining-campaign.html` @ `250fc15` |
| Test onayı | Test taslağını/e-postasını kim, ne zaman onayladı | |
| Sonuç | Kalıcı/geçici bounce sayısı, opt-out talepleri | |
| Not | | |

- **CAMPAIGNS:** Kampanya özeti tutulur (kimlik, fuar, segment, tarih, toplam alıcı, parça sayısı, durum). Mevcut sütunlarda olmayan **gönderen hesap, yöntem ve kampanya kimliği** CAMPAIGNS'in Not alanına veya kullanıcı kararıyla eklenecek sütunlara yazılır.
- **SEND_LOG:** Alıcı düzeyinde kayıt tutulur. Mevcut sütunlar korunur ve şöyle doldurulur:

  | SEND_LOG sütunu | Yazılacak bilgi |
  |---|---|
  | **E-posta** | Alıcı adresi (hücre başına tek adres, ASCII) |
  | **Kampanya** | Kampanya kimliği (8.1 biçimi) |
  | **Part** | Parça no (parçasız gönderimde `1`) |
  | **Gönderim Tarihi** | Gönderim tarihi |
  | **Sonuç** | Gönderildi · Kalıcı bounce · Geçici bounce · Opt-out vb. |
  | **Not** | **Gönderen hesap ve yöntem** (ör. `gulsah@expoviafair.com · BCC`) ve gerekirse ek açıklama |

  SEND_LOG'da gönderen hesap ve yöntem için ayrı sütun olmadığından bu iki bilgi **Not** sütununa yazılır. Ayrı sütun eklenip eklenmeyeceği VIAFA ekibinin kararıdır; bu belge canlı veriyi değiştirmez.

### 8.2 Kayıtlı gönderimler

| Kampanya kimliği | Tarih | Yöntem | Gönderen hesap | Alıcı | Kayıt | Dayanak |
|---|---|---|---|---|---|---|
| WAMPEX2027-TR-MADEN-20261005-BCC | 05.10.2026 | BCC | Gülşah'ın Gmail hesabı | 823 | SEND_LOG | [Kullanıcı doğruladı] |
| WAMPEX2027-TR-HTMLTEST-20261012-TEST | 12.10.2026 | Test taslağı (Apps Script) | `ahmet@expoviafair.com` | 1 test alıcısı (taslak) | `HANDOFF-WAMPEX-2027-GMAIL.md` | [Doğrulandı] |
| WAMPEX2027-TR-BGRUBU-20261014-BIREYSEL | 14.10.2026 | Bireysel e-posta | `gulsah@expoviafair.com` | 8 | SEND_LOG | [Kullanıcı doğruladı] |
| SECUREX2027-… | — | — | — | — | **AÇIK KONTROL** – SECUREX alıcı listesinde bounce durumları var; yöntem, tarih, gönderen ve alıcı sayısı doğrulanmadı | [Doğrulanmadı] |

*Bu tablodaki kampanya kimlikleri 8.1 biçimine göre geriye dönük olarak önerilmiştir. SEND_LOG'da farklı bir kimlik kullanıldıysa SEND_LOG'daki kimlik esastır.*

### 8.3 Gönderim sonrası adımlar

1. **SEND_LOG:** 8.1'deki alanlarla gönderim kaydı yazılır.
2. **CAMPAIGNS:** Kampanya özeti güncellenir.
3. **MASTER:** `Son Kampanya`, `Son Gönderim` ve `Bounce` güncellenir.
4. **Kampanya alıcı dosyası:** "Mailing Durumu" (veya Gönderim/Teslimat Durumu) güncellenir: `Hazır` / `Teknik hata – tekrar kontrol` / `Geçici hata – tekrar kontrol`.
5. **SUPPRESSION:** Kalıcı bounce ve opt-out talepleri tarih ve kaynakla eklenir (örnek: Mitatek, 05.10.2026, "Mail göndermeyin"). Geçici hatalar aktif kalır.

---

## 9. Sık karşılaşılan hatalar ve çözümleri

| Belirti | Neden | Çözüm |
|---|---|---|
| Taslakta görsel yok | Taslak, HTML'i temizleyen Claude Gmail bağlayıcısıyla oluşturuldu | Yalnızca Apps Script `GmailApp.createDraft(htmlBody)` |
| Script "Beklenmeyen `<img>` sayısı" veriyor | Editördeki kodda eski beklenen değer kalmış (SECUREX'te 5 → 7) | Editördeki kopyayı repodaki son sürümle değiştirin |
| Raw HTML eski sürümü getiriyor | raw.githubusercontent önbelleği | Birkaç dakika bekleyin veya commit SHA'lı raw URL kullanın |
| Görseller kırık | Görseller push edilmedi ya da Cloudflare yayını bitmedi | Push sonrası adresleri HTTP 200 + `image/*` için kontrol edin |
| Görsel adresi HTML döndürüyor | Dosya yok; Cloudflare site sayfasına düşüyor | Yolu ve `public/` altındaki adı kontrol edin |
| `.gsheet` bilgisayardan okunmuyor | Drive masaüstü uygulaması Sheets içeriğini yerelde tutmaz | Sheets'te açın veya `.xlsx` olarak dışa aktarın |
| Satış listesi "gönderim kaydı yok" diyor ama gönderim yapılmış | Liste yerel kopyalardan hazırlandı; SEND_LOG'a bakılmadı | Gönderim geçmişini yalnızca canlı SEND_LOG'dan doğrulayın |
| Gmail Merge yarıda kalıyor | 1.500 alıcı limiti | Listeyi ≤1.500'lük parçalara bölün |
| BCC gönderimi reddediliyor/kısıtlanıyor | Google Workspace ileti/gün limitleri | Alıcıları parçalara bölün; limitleri güncel Workspace belgelerinden kontrol edin |
| Türkçe adres hatası | Adreste Türkçe karakter veya boşluk | RULES: ASCII + boşluksuz + hücre başına tek adres |
| Gmail iletiyi kırpıyor | HTML > 102 KB | İçeriği sadeleştirin |
| "AFRİCA" gibi hatalı İ | `text-transform: uppercase` + `lang="tr"` | Büyük harfi doğrudan yazın |

---

## 10. Açık noktalar ve riskler (14.10.2026)

1. ~~Çalışan test scriptinin tek kopyası Git'te değil.~~ **Çözüldü (14.10.2026):** `HANDOFF-WAMPEX-2027-GMAIL.md` içeriği değiştirilmeden Git'e eklendi (`364c383`).
2. **CAMPAIGN_BUILDER sütunları doğrulanmadı.** Tahmin edilmedi; canlı dosyadan teyit edilip eklenmeli. (SEND_LOG sütunları 14.10.2026'da belgelendi.)
3. **Eski satış hazırlık dosyaları SEND_LOG'a bakılmadan hazırlandı.** `WAMPEX_2027_SATIS_HAVUZU_FINAL.xlsx` ve `WAMPEX_2027_BC_GONDERIM_HAZIRLIK.xlsx`'teki "gönderim kaydı yok" ifadeleri yerel kopyalara dayanıyor. 05.10.2026'daki 823 alıcılık BCC gönderimi ve 14.10.2026'daki 8 e-posta bu dosyalarda yok. Bu listeler kullanılmadan önce canlı SEND_LOG ile karşılaştırılmalı.
4. **AÇIK KONTROL – SECUREX gönderim geçmişi doğrulanmadı.** Alıcı listesindeki bounce durumları bir gönderim yapıldığını düşündürüyor. Yöntem, tarih, gönderen hesap ve alıcı sayısı SEND_LOG'dan teyit edilip 8.2'ye işlenene kadar SECUREX listesi "gönderilmemiş" ya da "gönderilmiş" kabul edilmez.
5. **Gönderen hesap ve yöntem** geçmiş kampanyalarda tutarlı kaydedilmemiş. Bölüm 8.1 bundan sonra zorunlu.
6. **Hukuki uyum:** 6563 sayılı Kanun ve İYS kapsamında tacirlere gönderimde ret hakkı tanınmalı. BCC'de alıcılar birbirini görmez; yine de pazarlama izni ve ret kayıtları kampanya öncesinde teyit edilmeli.

---

## 11. Her kampanyadan önce kontrol listesi

- [ ] Kampanya kimliği belirlendi (Bölüm 8.1 biçimi)
- [ ] Gönderim yöntemi seçildi (BCC / bireysel / Gmail Merge) ve gerekçesi not edildi
- [ ] Gönderen hesap belirlendi
- [ ] Kampanya klasörü açıldı: `email-campaigns/<kampanya>/` (HTML + HANDOFF)
- [ ] Görseller `public/email-assets/<kampanya>/` altında; lisanslar kontrol edildi
- [ ] Push yapıldı; tüm görsel adresleri HTTP 200 + `image/*`
- [ ] Raw HTML erişilebilir; `<img>` sayısı not edildi; boyut < 102 KB
- [ ] Segment seçildi (MASTER / CAMPAIGN_BUILDER)
- [ ] SUPPRESSION ile karşılaştırıldı
- [ ] **SEND_LOG ile önceki gönderimler kontrol edildi** (aynı kampanyada tekrar yok)
- [ ] Aynı firmanın mükerrer adresleri değerlendirildi (firma başına birincil alıcı)
- [ ] Geçersiz, hatalı ve engellenmiş adresler çıkarıldı (ASCII, söz dizimi, MX)
- [ ] Süren görüşmesi olan firmalar satış ekibiyle teyit edilip çıkarıldı
- [ ] Pazarlama izni / gönderim uygunluğu teyit edildi (MASTER kaydı tek başına izin değildir)
- [ ] Kampanyaya ayrı alıcı dosyası hazırlandı; yöntem limitine göre parçalandı
- [ ] Apps Script test taslağı: kaynak = taslak `<img>`
- [ ] Taslak masaüstü ve mobilde görsel olarak kontrol edildi
- [ ] Test gönderimi için açık onay alındı ve test e-postası kontrol edildi
- [ ] Toplu gönderim için açık onay alındı
- [ ] Gönderim sonrası SEND_LOG, CAMPAIGNS, MASTER, alıcı dosyası ve SUPPRESSION güncellendi (Bölüm 8)

---

## 12. Yeni mailing çalışması için standart başlangıç promptu

Aşağıdaki metni yeni bir Claude oturumuna tek parça olarak verin; köşeli parantezleri doldurun.

```text
VIAFA MAILING – YENİ KAMPANYA HAZIRLIĞI

EXPOVIA projesinde çalış (C:\Users\ahmet\Desktop\EXPOVIA). Önce docs/VIAFA-MAILING-STANDARD.md (kanonik standart) dosyasını oku ve harfiyen uy. Yeni bir mailing yöntemi icat etme. Çalışan yöntem: kampanya HTML'i repoda, görseller public/email-assets/ altında herkese açık HTTPS adreslerinde, test taslağı yalnızca Google Apps Script GmailApp.createDraft(htmlBody) ile (bu script yalnızca taslak oluşturur, gönderim yapmaz). Gönderim yöntemi kampanya bazında seçilir: BCC, bireysel e-posta veya Gmail Merge. Hangi yöntem kullanılacaksa açıkça belirtilir ve kaydedilir; doğrulanmamış bir yöntemi kullanılmış gibi gösterme.

Kampanya: [FUAR ADI ve YILI]
Kampanya kimliği: [<FUAR><YIL>-<SEGMENT>-<YYYYMMDD>-<YÖNTEM>]
Hedef segment: [SEKTÖR / LİSTE]
Gönderim yöntemi: [BCC / Bireysel / Gmail Merge]
Gönderen hesap: [info@expoviafair.com veya yetkili hesap]
Test alıcısı: [E-POSTA]
Konu satırı: [ONAYLI KONU veya "3 alternatif öner"]
Onaylı içerik/görseller: [VARSA DOSYA YOLLARI]

Yapılacaklar:
1. Önceki kampanyaları (email-campaigns/*) incele ve aynı yapıyı kullan.
2. Fuar bilgilerini (tarih, yer, kapsam) resmî kaynaktan doğrula; doğrulanmamış istatistik, fiyat veya temsilcilik iddiası yazma.
3. Tablo tabanlı, inline CSS'li, 600 px, Türkçe HTML hazırla: email-campaigns/[kampanya]/[kampanya]-campaign.html. Görselleri public/email-assets/[kampanya]/ altına koy; lisansları kontrol et.
4. Alıcı listesini VIAFA_MAILING_MASTER mantığıyla hazırla: segment → SUPPRESSION → SEND_LOG (önceki gönderimler; esas kaynak SEND_LOG'dur, yerel kopyalar değil) → mükerrer (firma başına birincil alıcı) → geçersiz/engellenmiş adresler (ASCII, söz dizimi, MX) → süren görüşmeler → pazarlama izni. Erişemediğin dosyaları atlayıp "kontrol edildi" deme; eksik erişimi raporla. MASTER kaydı tek başına gönderim izni değildir.
5. Apps Script test taslağı scriptini standarttaki şablondan uyarla (HTML_URL, TO, SUBJECT, EXPECTED_IMAGES) ve HANDOFF-[KAMPANYA]-GMAIL.md yaz. Gönderimden sonra yazılacak kayıt alanlarını (kampanya kimliği, gönderen hesap, yöntem, tarih, alıcı sayısı) HANDOFF'a ekle.
6. Commit ve push yalnızca ben istediğimde. Push sonrası görsel adreslerini HTTP 200 + image/* ve raw HTML'i doğrula.

Yasaklar: Gmail'den e-posta gönderme veya taslak oluşturma; Claude Gmail bağlayıcısıyla HTML taslak oluşturma; MASTER, SUPPRESSION, SEND_LOG veya mevcut mailing dosyalarını değiştirme; VIAWA'ya dokunma; mevcut scriptleri silme veya yeniden yazma.

Teslimde: dosya listesi, görsel/URL doğrulaması, alıcı sayıları (aday / hariç / kontrol), seçilen gönderim yöntemi ve gönderen hesap, açık riskler ve Apps Script'i çalıştırmam için adımlar.
```

---

## Ek A – Google Apps Script şablonu `createCampaignTestDraft`

*`docs/VIAFA_MAILING_STANDARD.md`'den değiştirilmeden taşındı.*

Sabitleri her kampanya için değiştirin. `EXPECTED_IMAGES` değerini onaylı HTML'deki gerçek sayıya göre ayarlayın; her zaman 17 değildir.

```javascript
function createCampaignTestDraft() {
  const HTML_URL = 'REPLACE_WITH_APPROVED_RAW_HTML_HTTPS_URL';
  const TO = 'REPLACE_WITH_TEST_RECIPIENT';
  const SUBJECT = 'REPLACE_WITH_APPROVED_SUBJECT';
  const EXPECTED_IMAGES = 0; // Set to actual count before running

  if (!HTML_URL.startsWith('https://') || EXPECTED_IMAGES < 1) {
    throw new Error('Set the approved HTTPS URL and image count first.');
  }
  const response = UrlFetchApp.fetch(HTML_URL, {muteHttpExceptions: true});
  if (response.getResponseCode() !== 200) {
    throw new Error('HTML fetch failed: HTTP ' + response.getResponseCode());
  }
  const html = response.getContentText('UTF-8');
  const sourceCount = (html.match(/<img\b/gi) || []).length;
  if (sourceCount !== EXPECTED_IMAGES) {
    throw new Error('Unexpected source image count: ' + sourceCount);
  }
  const plain = 'Please view this message in an HTML-capable email client.';
  const draft = GmailApp.createDraft(TO, SUBJECT, plain, {
    htmlBody: html,
    name: 'VIAFA'
  });
  const savedCount = (draft.getMessage().getBody().match(/<img\b/gi) || []).length;
  Logger.log('Source images: ' + sourceCount);
  Logger.log('Saved draft images: ' + savedCount);
  Logger.log('Draft ID: ' + draft.getId());
  if (savedCount !== sourceCount) {
    throw new Error('Draft created but image count differs. DO NOT SEND.');
  }
  Logger.log('Draft created, NOT SENT. Visually inspect in Gmail.');
}
```

## Ek B – Claude için kopyalanabilir talimat (özgün, İngilizce)

*`docs/VIAFA_MAILING_STANDARD.md`'den değiştirilmeden taşındı. Güncel Türkçe sürüm için Bölüm 12'yi kullanın.*

> **VIAFA MAILING STANDARD (MANDATORY).** Build the approved Gmail-compatible campaign HTML and publish all images to public HTTPS URLs. Check each image URL for HTTP 200 and correct MIME type. Do not create the campaign draft through the Gmail connector used in WAMPEX 2027; it removed all image tags. Instead prepare a Google Apps Script using `GmailApp.createDraft()` with the original HTML in `htmlBody`, sourced from the approved published file. Count `<img>` tags in source and saved draft and require equality, using the correct image count for THIS campaign (WAMPEX had 17; other campaigns may differ). Do not send. Have the user open the draft and visually inspect all images, links and mobile layout. Send a test only after explicit approval, and never run a mass mailing until the delivered test is approved. Preserve approved text and design.

## Ek C – Referans vaka (özgün)

*`docs/VIAFA_MAILING_STANDARD.md`'den değiştirilmeden taşındı.*

WAMPEX 2027: approved HTML `email-campaigns/wampex-2027-mining/wampex-2027-mining-campaign.html`; original image count 17; Apps Script execution log showed source 17 and saved draft 17; user confirmed images appeared correctly in Gmail draft. This validates draft creation and draft rendering, **not yet final delivery or mass-mail merge**.

*Ek not (14.10.2026):* Bu test, 05.10.2026'daki BCC gönderiminden (823 alıcı) sonra yapılmıştır. İki iş birbirinden bağımsızdır: BCC gönderimi bu HTML test taslağıyla yapılmamıştır.
