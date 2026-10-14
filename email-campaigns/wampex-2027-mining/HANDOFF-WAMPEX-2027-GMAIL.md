# DEVİR NOTU — WAMPEX 2027 Madencilik Mailingi · Gmail Taslağı

Bu dosya, işi devralacak asistan (ChatGPT vb.) veya kişi için hazırlanmıştır. Her şey hazırdır; yapılması gereken tek iş, **görselleri koruyarak Gmail test taslağı oluşturmaktır**. TOPLU GÖNDERİM YAPILMAYACAK.

---

## 1. Durum özeti

| Öğe | Durum |
|---|---|
| Gönderime hazır HTML | `email-campaigns/wampex-2027-mining/wampex-2027-mining-campaign.html` (~29 KB, tablo tabanlı, inline CSS) |
| Önizleme HTML | `email-campaigns/wampex-2027-mining/wampex-2027-mining-preview.html` |
| Görseller | `public/email-assets/wampex-2027-mining/` — canlıda, commit `250fc15` |
| Görsel/bağlantı listesi | `email-campaigns/wampex-2027-mining/README-gorseller-ve-baglantilar.md` |
| Gmail hesabı | ahmet@expoviafair.com |
| Test alıcısı | gtexglobalturkey@gmail.com |
| E-posta konusu | `Gana Madencilik Pazarında Yeni İş Fırsatları \| WAMPEX 2027` |

Proje: `C:\Users\ahmet\Desktop\EXPOVIA` · GitHub: `gtexglobalturkey-crypto/expovia-website` (branch `main`, public)

---

## 2. Sorunun kök nedeni (doğrulandı)

İlk test mailinde görseller görünmedi. **Sebep görseller değil, taslağı oluşturan araçtı:**

- 11 görsel URL'sinin tamamı canlıda **HTTP 200** ve doğru `image/png` / `image/jpeg` döndürüyor (12.10.2026'da kontrol edildi).
- Taslak, Claude'un Gmail MCP bağlayıcısıyla (`create_draft`, `htmlBody`) oluşturuldu. Bu bağlayıcı HTML'i sanitize ediyor. Gönderilen mailin ham MIME `text/html` bölümünde kaynaktaki **17 `<img>` etiketinin hiçbiri yok**.
- Aynı sanitizasyon `<head>/<style>`, `class`, `role` özelliklerini de siliyor ve `tel:` linklerini `javascript:void(0)` yapıyor.
- CID inline görsel testi de başarısız: `cid:` `<img>` etiketi siliniyor, görsel ayrı ek olarak kalıyor.

**Sonuç:** Kampanya HTML'inde değişiklik gerekmiyor. Taslak, HTML'i olduğu gibi koruyan bir yöntemle oluşturulmalı. Claude Gmail bağlayıcısı veya HTML'i sanitize eden başka bir API aracı KULLANILMAMALI.

---

## 3. ÖNERİLEN YÖNTEM — Google Apps Script ile taslak (en güvenilir)

`GmailApp.createDraft` HTML'i değiştirmeden kaydeder; harici HTTPS `<img>` etiketleri korunur. Mevcut Google Sheets / Gmail altyapısıyla da aynı yöntem.

1. ahmet@expoviafair.com ile https://script.google.com adresine girin → **Yeni proje**.
2. Aşağıdaki kodu yapıştırın, kaydedin.
3. Fonksiyon olarak `createWampexTestDraft` seçip **Çalıştır**'a basın. İlk çalıştırmada Gmail ve harici URL izni isteyecek; onaylayın.
4. Gmail → **Taslaklar** klasöründe taslak oluşur. **Göndermeyin**; açıp görselleri kontrol edin.

```javascript
/**
 * WAMPEX 2027 – Gmail TEST TASLAĞI oluşturur. GÖNDERMEZ.
 * HTML, GitHub'daki (public) kampanya dosyasından alınır.
 */
function createWampexTestDraft() {
  var HTML_URL = 'https://raw.githubusercontent.com/gtexglobalturkey-crypto/expovia-website/main/email-campaigns/wampex-2027-mining/wampex-2027-mining-campaign.html';
  var TO = 'gtexglobalturkey@gmail.com';
  var SUBJECT = 'Gana Madencilik Pazarında Yeni İş Fırsatları | WAMPEX 2027';

  var res = UrlFetchApp.fetch(HTML_URL, { muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) {
    throw new Error('HTML alınamadı: HTTP ' + res.getResponseCode());
  }
  var html = res.getContentText('UTF-8');

  // Kontrol: HTML'de 17 <img> olmalı
  var imgCount = (html.match(/<img\b/gi) || []).length;
  Logger.log('HTML içindeki <img> sayısı: ' + imgCount);

  var plain =
    'GANA MADENCİLİK PAZARINDA YERİNİZİ ALIN!\n' +
    'WAMPEX 2027 – 2–4 Haziran 2027 | Accra, Gana\n\n' +
    'Katılım bilgisi: https://expoviafair.com/exhibition-detail\n' +
    'Gülşah Eryıldırım – +90 542 789 55 93 – gulsah@expoviafair.com\n' +
    'Abonelikten çıkmak için info@expoviafair.com adresine yazabilirsiniz.';

  var draft = GmailApp.createDraft(TO, SUBJECT, plain, {
    htmlBody: html,
    name: 'VIAFA'
  });

  // Doğrulama: kaydedilen taslaktaki <img> sayısı
  var saved = draft.getMessage().getBody();
  Logger.log('Taslakta kalan <img> sayısı: ' + (saved.match(/<img\b/gi) || []).length);
  Logger.log('Taslak ID: ' + draft.getId());
}
```

**Beklenen günlük çıktısı:** HTML'de 17, taslakta 17 `<img>`.

> GitHub erişilemezse: `HTML_URL` yerine kampanya HTML'ini Apps Script'te `wampex.html` adlı bir HTML dosyası olarak ekleyin ve `var html = HtmlService.createHtmlOutputFromFile('wampex').getContent();` kullanın.

---

## 4. ALTERNATİF YÖNTEM — Gmail web arayüzüne yapıştırma (kod gerektirmez)

1. `wampex-2027-mining-campaign.html` dosyasını **Chrome**'da açın (çift tıklayın). Görseller canlı URL'lerden yüklenir.
2. Sayfada **Ctrl+A**, ardından **Ctrl+C**.
3. Gmail'de (ahmet@expoviafair.com) **Oluştur** → gövdeye **Ctrl+V**.
4. Alıcı: gtexglobalturkey@gmail.com · Konu: yukarıdaki konu.
5. Göndermeden kapatın; taslak kaydedilir.

Not: Bu yöntemde Gmail `<style>` bloğunu (mobil medya sorguları) kaldırır. Tasarım bunlara bağımlı olmadan da mobilde tek sütuna düşecek şekilde akışkan kuruldu; yine de mobil test yapın.

---

## 5. Kontrol listesi (taslak açıldığında)

Aşağıdaki görsellerin tamamı görünmeli (toplam 17 `<img>`):

| # | Görsel | URL |
|---|---|---|
| 1 | VIAFA logosu (üst) | https://expoviafair.com/email-assets/viafa-logo.png |
| 2 | WAMPEX logosu | https://expoviafair.com/email-assets/wampex-2027-mining/wampex-logo.png |
| 3 | Hero – fuar girişi | https://expoviafair.com/email-assets/wampex-2027-mining/wampex-show-entrance.jpg |
| 4 | Sektör 1 ikonu | https://expoviafair.com/email-assets/wampex-2027-mining/icon-sector-1-machinery.png |
| 5 | Sektör 1 fotoğrafı | https://expoviafair.com/email-assets/wampex-2027-mining/sector-1-mining-site.jpg |
| 6 | Sektör 2 ikonu | https://expoviafair.com/email-assets/wampex-2027-mining/icon-sector-2-pumps-valves.png |
| 7 | Sektör 2 fotoğrafı (Unsplash) | https://images.unsplash.com/photo-1693463735697-73df1f35930d?w=1072&h=576&fit=crop&fm=jpg&q=72 |
| 8 | Sektör 3 ikonu | https://expoviafair.com/email-assets/wampex-2027-mining/icon-sector-3-energy.png |
| 9 | Sektör 3 fotoğrafı (Unsplash) | https://images.unsplash.com/photo-1509390144018-eeaf65052242?w=1072&h=576&fit=crop&fm=jpg&q=72 |
| 10 | Sektör 4 ikonu | https://expoviafair.com/email-assets/wampex-2027-mining/icon-sector-4-drilling-safety.png |
| 11 | Sektör 4 fotoğrafı (Unsplash) | https://images.unsplash.com/photo-1660748255246-80f24d317070?w=1072&h=576&fit=crop&fm=jpg&q=72 |
| 12–15 | 4 × onay ikonu (fırsatlar listesi) | https://expoviafair.com/email-assets/wampex-2027-mining/icon-check.png |
| 16 | Broşür | https://expoviafair.com/email-assets/wampex-2027-mining/wampex-2027-brochure-tr.jpg |
| 17 | VIAFA logosu (altbilgi) | https://expoviafair.com/email-assets/viafa-logo.png |

Kampanya HTML'i GitHub `main` (250fc15) ile birebir aynıdır (MD5 `ea93d2d3f9de4911c1a98dcf14aeaa7d`).

Ayrıca kontrol edin:
- CTA butonu "KATILIM BİLGİSİ ALIN" → https://expoviafair.com/exhibition-detail (UTM parametreli)
- Telefon/e-posta linkleri, abonelikten çıkış linki (mailto:info@expoviafair.com)
- Masaüstü Gmail + Gmail mobil uygulaması

---

## 6. Kurallar

- **Toplu gönderim yapmayın.** Yalnızca test taslağı; gönderim için kullanıcı onayı gerekir.
- Kampanya tasarımını ve metnini değiştirmeyin.
- Claude Gmail MCP bağlayıcısını veya HTML'i sanitize eden araçları kullanmayın (bkz. Bölüm 2).
- İstatistik kaynağı: Ghana Chamber of Mines 2025 raporu (5,94 milyon ons, +%23,41; maden ihracatı 21,36 milyar USD).
- GitHub'a ek push gerekmez. Bu devir notu repoya eklenecekse:

```
cd C:\Users\ahmet\Desktop\EXPOVIA
git add email-campaigns/wampex-2027-mining/HANDOFF-WAMPEX-2027-GMAIL.md
git commit -m "Add WAMPEX 2027 Gmail draft handoff notes"
git push
```
