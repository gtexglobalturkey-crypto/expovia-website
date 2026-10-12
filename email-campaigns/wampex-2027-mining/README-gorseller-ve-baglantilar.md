# WAMPEX 2027 – Madencilik Mailingi · Görseller ve Bağlantılar

**Konu:** Gana Madencilik Pazarında Yeni İş Fırsatları | WAMPEX 2027
**Gönderime hazır HTML:** `wampex-2027-mining-campaign.html` (~29 KB, Gmail kırpma sınırı 102 KB'ın çok altında)
**Tarayıcı önizleme:** `wampex-2027-mining-preview.html` (aynı HTML + üstte önizleme şeridi)

## Görseller

| Kullanım | HTTPS adresi | Kaynak / lisans |
|---|---|---|
| VIAFA logosu (üst + alt) | https://expoviafair.com/email-assets/viafa-logo.png | VIAFA – mevcut, canlıda |
| WAMPEX logosu | https://expoviafair.com/email-assets/wampex-2027-mining/wampex-logo.png | Proje: `src/assets/exhibitions/wampex/wampex-logo.png` (beyaz zemine düzleştirildi) |
| Hero – WAMPEX fuar girişi | https://expoviafair.com/email-assets/wampex-2027-mining/wampex-show-entrance.jpg | Proje: `src/assets/exhibitions/wampex/gallery-entrance.jpg` |
| Sektör 1 – maden sahası | https://expoviafair.com/email-assets/wampex-2027-mining/sector-1-mining-site.jpg | Proje: `src/assets/exhibitions/wampex/products/product-mining.jpg` (sitede kullanılan görsel) |
| Sektör 2 – pompa/vana | https://images.unsplash.com/photo-1693463735697-73df1f35930d | Unsplash License – IYYM IYYM – https://unsplash.com/photos/KWZMx4T8Y1k |
| Sektör 3 – trafo/enerji | https://images.unsplash.com/photo-1509390144018-eeaf65052242 | Unsplash License – American Public Power Association – https://unsplash.com/photos/VuR4oHZ3ucc |
| Sektör 4 – yeraltı madeni, KKD'li çalışan | https://images.unsplash.com/photo-1660748255246-80f24d317070 | Unsplash License – Munkh-Erdene Eenee – https://unsplash.com/photos/lrnc1AdZ8wA |
| Broşür (gövdede) | https://expoviafair.com/email-assets/wampex-2027-mining/wampex-2027-brochure-tr.jpg | `public/email-assets/wampex-2027.png` 900 px JPG'ye küçültüldü (2,6 MB → 179 KB) |
| Broşür (tam çözünürlük bağlantısı) | https://expoviafair.com/email-assets/wampex-2027.png | Mevcut, canlıda |
| 4 sektör ikonu + onay ikonu | https://expoviafair.com/email-assets/wampex-2027-mining/icon-*.png | Kodla çizilmiş sade geometrik PNG'ler (VIAFA bordo/altın) – yapay zekâ görseli değil |

Unsplash görselleri Unsplash CDN'den (images.unsplash.com, HTTPS) boyutlandırılarak yükleniyor; Unsplash License ticari kullanıma izin verir, atıf zorunlu değildir ama altbilgide nezaketen belirtilmiştir.

## Bağlantılar

| Öğe | URL |
|---|---|
| CTA "KATILIM BİLGİSİ ALIN" + hero görseli | https://expoviafair.com/exhibition-detail?utm_source=email&utm_medium=mailing&utm_campaign=wampex2027_mining&utm_content=cta (hero: utm_content=hero) — `src/App.jsx` içindeki WAMPEX rotası |
| Logo / web sitesi | https://expoviafair.com/ (UTM'li) |
| Gülşah Eryıldırım | tel:+905427895593 · mailto:gulsah@expoviafair.com (broşürdeki Türkiye katılım iletişimi) |
| Genel iletişim | tel:+905427895591 · mailto:info@expoviafair.com (`src/components/contact/ContactInfo.jsx`) |
| Abonelikten çıkış | mailto:info@expoviafair.com?subject=Abonelikten çıkmak istiyorum — HTML'de `<!-- UNSUBSCRIBE -->` notuyla işaretli; gönderim aracınız kendi çıkış bağlantısını veriyorsa onunla değiştirin |

## İstatistik kaynağı
- Altın üretimi 2025: 5,94 milyon ons (+%23,41; 2024: 4,82 milyon) – Ghana Chamber of Mines 2025 raporu: https://www.graphic.com.gh/business/business-news/ghana-records-23-41-pct-increase-in-gold-production-in-2025.html
- Madencilik ihracat geliri 2025: 21,36 milyar USD (2024: 11,98 milyar) – https://ghanaiantimes.com.gh/mining-industry-to-record-stronger-output-this-year-gcm-outgone-president/amp/

## Merge notu
Gövdede zorunlu `{{...}}` etiketi yok; Google Sheets tabanlı merge araçlarında doğrudan HTML gövdesi olarak kullanılabilir. Kişiselleştirme isterseniz selamlama satırı eklenip `{{Firma}}` gibi sütun etiketi konabilir.
