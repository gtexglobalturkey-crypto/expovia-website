# DEVİR NOTU — SECUREX South Africa 2027 Mailingi · Gmail Taslağı

Zorunlu standart: `docs/VIAFA_MAILING_STANDARD.md`. WAMPEX 2027 çalışmasındaki (12.10.2026, `email-campaigns/wampex-2027-mining/HANDOFF-WAMPEX-2027-GMAIL.md`) yöntemin aynısıdır: **Google Apps Script `GmailApp.createDraft(..., { htmlBody })`** ile taslak oluşturulur. **TOPLU GÖNDERİM YAPILMAYACAK.** Gmail'deki mevcut taslaklara dokunulmaz.

---

## 1. Durum özeti

| Öğe | Durum |
|---|---|
| Kampanya HTML | `email-campaigns/securex-2027/securex-2027-gmail-campaign.html` (~19 KB, tablo tabanlı, inline CSS, 7 `<img>`) |
| Apps Script | `email-campaigns/securex-2027/securex-2027-gmail-draft.gs` |
| Görseller | `public/email-assets/securex-2027/` (6 dosya) + mevcut `public/email-assets/viafa-logo.png` |
| Gönderen hesap | gulsah@expoviafair.com (script bu hesapla çalıştırılmalı) |
| Test alıcısı | gtexglobalturkey@gmail.com (WAMPEX'teki test alıcısı) |
| Mailing listesi | Sheet `1q7Chc1v6F7OwjFsiVe1FirZEcAlcw7ydu3FIC9QpFeQ`, sekme `Gonderim Adaylari` — **değiştirilmez** |

**Ön koşul:** 4 yeni görsel ve HTML henüz canlıda/GitHub'da değil. Commit + `main`'e push yapılmadan (Cloudflare ~30 sn'de yayınlar) görseller taslakta kırık görünür ve script GitHub'dan HTML alamaz.

---

## 2. Neden bu yöntem (WAMPEX'te doğrulandı)

- Claude'un Gmail MCP bağlayıcısı (`create_draft`) HTML'i sanitize ediyor: `<img>`, `<style>`, `class` siliniyor. **Kullanılmayacak.**
- `GmailApp.createDraft` + `htmlBody` HTML'i olduğu gibi kaydeder; harici HTTPS görseller korunur.
- Görseller ek dosya veya base64 değil, `https://www.expoviafair.com/email-assets/...` adreslerinden yüklenir.

---

## 3. Test taslağı oluşturma

1. **gulsah@expoviafair.com** ile https://script.google.com → **Yeni proje**.
2. `securex-2027-gmail-draft.gs` içeriğini `Code.gs`'ye yapıştırın, kaydedin.
3. Fonksiyon: `createSecurexTestDraft` → **Çalıştır**. İlk seferde Gmail + harici URL izinlerini onaylayın.
4. Beklenen günlük: `HTML içindeki <img> sayısı: 7` ve `Taslakta kalan <img> sayısı: 7`.
5. Gmail → **Taslaklar** → taslağı açın, **göndermeyin**. Masaüstü ve Gmail mobil uygulamasında kontrol edin.

> GitHub'a erişilemezse: Apps Script'te **+ → HTML** ile `securex` adlı dosya oluşturup kampanya HTML'ini yapıştırın; script otomatik olarak bu dosyayı kullanır.

## 4. Mailing listesi kontrolü (salt okunur)

`auditMailingList` fonksiyonu sekmeye hiçbir şey yazmadan şunları günlüğe döker: sütun başlıkları, dolu satır sayısı, geçerli/geçersiz/tekrar eden e-posta sayısı ve onay/durum gibi az değerli sütunların dağılımı.

711 adresin tamamı onaylı değildir. **Kontrol bekleyen adresler gönderime hazır sayılmaz.** Toplu taslak/merge adımı, hangi sütun ve değerin "onaylı" anlamına geldiği netleştikten ve açık onay alındıktan sonra ayrıca hazırlanacaktır. Repoda veya geçmişte Sheets tabanlı bir toplu Mail Merge scripti **bulunmadı**; WAMPEX'te yalnızca tek test taslağı oluşturuldu.

Google Sheets eklentisiyle (ör. YAMM / GMass) merge yapılacaksa: bu test taslağı şablon olarak seçilebilir. Gövdede zorunlu `{{...}}` etiketi yoktur.

---

## 5. Konu satırı (3 alternatif)

1. **Afrika Güvenlik Pazarına Johannesburg’dan Açılın | SECUREX 2027** ← scriptte varsayılan
2. Güvenlik, Yangın ve Akıllı Bina Üreticileri İçin Güney Afrika Fırsatı | SECUREX 2027
3. 4 Fuar, Tek Salon: SECUREX South Africa 2027 Katılım Bilgisi

Önizleme metni (preheader): *Güvenlik teknolojileri, yangın güvenliği, İSG ve akıllı bina üreticileri için tek fuar: 1–3 Haziran 2027, Johannesburg. Katılım bilgisi için yanıtlamanız yeterli.*

---

## 6. Görseller (7 `<img>`)

| # | Görsel | URL | Kaynak |
|---|---|---|---|
| 1 | VIAFA logosu | https://www.expoviafair.com/email-assets/viafa-logo.png | Mevcut, canlıda |
| 2 | Hero – 4 fuar logosu | https://www.expoviafair.com/email-assets/securex-2027/securex-2027-four-shows.jpg | Organizatör görseli (`src/assets/exhibitions/securex/securex-2027-hero.webp`, 1200 px JPG) |
| 3 | SECUREX kartı – CCTV direği (PTZ dome) | https://www.expoviafair.com/email-assets/securex-2027/card-securex-cctv.jpg | Unsplash License – Milan Malkomes – https://unsplash.com/photos/a40akJxBhT8 |
| 4 | FIREXPO kartı – sprinkler/itfaiye vanası | https://www.expoviafair.com/email-assets/securex-2027/card-firexpo-suppression.jpg | Unsplash License – Kevin Butz – https://unsplash.com/photos/U-4b9CMcr7k |
| 5 | FACILITIES kartı – panel kuran teknisyen | https://www.expoviafair.com/email-assets/securex-2027/card-fm-smart-building.jpg | Unsplash License – Citadel Life Safety – https://unsplash.com/photos/K4dBR3TiH4U |
| 6 | A-OSH kartı – baret ve reflektif yelek | https://www.expoviafair.com/email-assets/securex-2027/card-aosh-ppe.jpg | Unsplash License – Tanya Paquet – https://unsplash.com/photos/wjHdeYmI-XU |
| 7 | Fuar alanı | https://www.expoviafair.com/email-assets/securex-2027/securex-show-floor.jpg | Organizatör görseli (`src/assets/exhibitions/securex/securex-2027-floor.jpg`) |

Unsplash görselleri kendi sunucumuza indirilip kırpıldı (hotlink yok).

## 7. Bağlantılar

| Öğe | Hedef |
|---|---|
| CTA "KATILIM BİLGİSİ TALEP EDİN" | `mailto:gulsah@expoviafair.com` (konu + firma/ürün/telefon şablonu) |
| Tek web bağlantısı | https://www.expoviafair.com/exhibition-detail/securex-south-africa-2027 (UTM: `securex2027`) |
| İletişim | tel:+905427895593 · mailto:gulsah@expoviafair.com |
| Listeden çıkış | E-postayı "Listeden çıkar" yazarak yanıtlama (link yok) |

## 8. İçerik kuralları

- Kapsam resmî kaynaktan: securex.co.za (1–3 Haziran 2027, Gallagher Convention Centre; Securex, A-OSH Expo, Facilities Management, Firexpo) ve `src/data/securexSouthAfrica2027.js`.
- **Kablo** resmî kapsamda geçmediği için metne eklenmedi.
- Ziyaretçi/katılımcı sayısı, fiyat, teşvik, doluluk kullanılmadı (2026 rakamları beş fuarlık platforma ait).
- Temsilcilik iddiası yok (web sitesiyle aynı nötr dil). "Türkiye Temsilciliği" eklenecekse kullanıcı onayıyla.
