/**
 * SECUREX South Africa 2027 – Gmail taslak araçları (WAMPEX 2027 yönteminin uyarlaması).
 *
 * Bu dosya HİÇBİR E-POSTA GÖNDERMEZ ve mailing listesine YAZMAZ.
 *   createSecurexTestDraft() → tek bir TEST TASLAĞI oluşturur (Gmail > Taslaklar).
 *   auditMailingList()       → "Gonderim Adaylari" sekmesini SALT OKUNUR inceler, yalnızca günlüğe yazar.
 *
 * gulsah@expoviafair.com hesabıyla https://script.google.com üzerinde çalıştırın:
 * taslak, scripti çalıştıran hesabın Gmail'inde oluşur.
 */

var CONFIG = {
  // GitHub (public) üzerindeki kampanya HTML'i – dosya main'e push edildikten sonra erişilebilir.
  HTML_URL: 'https://raw.githubusercontent.com/gtexglobalturkey-crypto/expovia-website/main/email-campaigns/securex-2027/securex-2027-gmail-campaign.html',
  EXPECTED_IMG_COUNT: 7,
  TEST_TO: 'gtexglobalturkey@gmail.com',
  SUBJECT: 'Afrika Güvenlik Pazarına Johannesburg’dan Açılın | SECUREX 2027',
  SENDER_NAME: 'Gülşah Eryıldırım | VIAFA',
  REPLY_TO: 'gulsah@expoviafair.com',
  SHEET_ID: '1q7Chc1v6F7OwjFsiVe1FirZEcAlcw7ydu3FIC9QpFeQ',
  SHEET_TAB: 'Gonderim Adaylari'
};

var PLAIN_TEXT =
  'SECUREX SOUTH AFRICA 2027\n' +
  'Afrika güvenlik pazarında yeni ticari bağlantılar kurun.\n' +
  '1–3 Haziran 2027 | Gallagher Convention Centre, Johannesburg\n\n' +
  'Güvenlik teknolojileri, yangın güvenliği, iş sağlığı ve güvenliği ile tesis yönetimi: dört uzmanlık fuarı, tek çatı altında.\n\n' +
  'Katılım bilgisi için bu e-postayı firma adınız ve ürün grubunuzla yanıtlamanız yeterli.\n' +
  'Fuar detayları: https://www.expoviafair.com/exhibition-detail/securex-south-africa-2027\n\n' +
  'Gülşah Eryıldırım – +90 542 789 55 93 (WhatsApp) – gulsah@expoviafair.com\n\n' +
  'Listeden çıkmak için bu e-postayı "Listeden çıkar" yazarak yanıtlayın.';

/** Kampanya HTML'ini alır: önce GitHub, olmazsa projedeki "securex" HTML dosyası. */
function getCampaignHtml_() {
  try {
    var res = UrlFetchApp.fetch(CONFIG.HTML_URL, { muteHttpExceptions: true });
    if (res.getResponseCode() === 200) return res.getContentText('UTF-8');
    Logger.log('GitHub HTML alınamadı: HTTP ' + res.getResponseCode() + ' – yerel dosya deneniyor.');
  } catch (e) {
    Logger.log('GitHub hatası: ' + e + ' – yerel dosya deneniyor.');
  }
  // Yedek: Apps Script projesine "securex" adlı HTML dosyası olarak yapıştırılmış kampanya.
  return HtmlService.createHtmlOutputFromFile('securex').getContent();
}

/** TEST TASLAĞI oluşturur. GÖNDERMEZ. */
function createSecurexTestDraft() {
  var html = getCampaignHtml_();

  var imgCount = (html.match(/<img\b/gi) || []).length;
  Logger.log('HTML içindeki <img> sayısı: ' + imgCount + ' (beklenen ' + CONFIG.EXPECTED_IMG_COUNT + ')');
  if (imgCount !== CONFIG.EXPECTED_IMG_COUNT) {
    throw new Error('Beklenmeyen <img> sayısı – HTML doğru dosya mı?');
  }

  var draft = GmailApp.createDraft(CONFIG.TEST_TO, CONFIG.SUBJECT, PLAIN_TEXT, {
    htmlBody: html,
    name: CONFIG.SENDER_NAME,
    replyTo: CONFIG.REPLY_TO
  });

  var savedCount = (draft.getMessage().getBody().match(/<img\b/gi) || []).length;
  Logger.log('Taslakta kalan <img> sayısı: ' + savedCount);
  Logger.log('Taslak ID: ' + draft.getId());
  if (savedCount !== imgCount) {
    throw new Error('Taslak oluştu ancak <img> sayısı farklı. GÖNDERMEYİN.');
  }
  Logger.log('Taslak oluşturuldu, GÖNDERİLMEDİ. Gmail’de görsel olarak kontrol edin.');
}

/**
 * Mailing listesini SALT OKUNUR inceler. Sayfaya hiçbir şey yazmaz.
 * Başlıkları, e-posta geçerlilik/tekrar sayılarını ve az sayıda farklı değeri olan
 * sütunların (ör. onay/durum sütunu) dağılımını günlüğe yazar.
 */
function auditMailingList() {
  var sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.SHEET_TAB);
  if (!sheet) throw new Error('Sekme bulunamadı: ' + CONFIG.SHEET_TAB);

  var values = sheet.getDataRange().getDisplayValues();
  var headers = values[0];
  var rows = values.slice(1).filter(function (r) { return r.join('').trim() !== ''; });
  Logger.log('Sütunlar: ' + headers.join(' | '));
  Logger.log('Dolu satır sayısı: ' + rows.length);

  var emailCol = headers.findIndex(function (h) { return /e-?posta|e-?mail|mail/i.test(h); });
  if (emailCol >= 0) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var seen = {}, valid = 0, invalid = 0, dup = 0;
    rows.forEach(function (r) {
      var e = String(r[emailCol]).trim().toLowerCase();
      if (!re.test(e)) { invalid++; return; }
      if (seen[e]) { dup++; return; }
      seen[e] = true; valid++;
    });
    Logger.log('E-posta sütunu "' + headers[emailCol] + '": geçerli tekil ' + valid + ', geçersiz/boş ' + invalid + ', tekrar ' + dup);
  } else {
    Logger.log('E-posta sütunu otomatik bulunamadı.');
  }

  headers.forEach(function (h, i) {
    var counts = {};
    rows.forEach(function (r) { var v = String(r[i]).trim() || '(boş)'; counts[v] = (counts[v] || 0) + 1; });
    var keys = Object.keys(counts);
    if (keys.length <= 12) {
      Logger.log('Sütun "' + h + '" dağılımı: ' + keys.map(function (k) { return k + '=' + counts[k]; }).join(', '));
    }
  });
}
