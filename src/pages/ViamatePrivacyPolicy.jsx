import LegalPage from "../components/legal/LegalPage";
import SEO from "../components/seo/SEO";
import { useTranslation } from "../hooks/useTranslation";

const content = {
  tr: {
    title: "VIAMATE Gizlilik Politikası",
    updated: "Son güncelleme: 14 Eylül 2026",
    description: "VIAMATE mobil uygulamasının kullanıcı ve cihaz verilerini nasıl işlediğini açıklayan gizlilik politikası.",
    sections: [
      { title: "1. VIAMATE Hakkında", paragraphs: ["VIAMATE, VIAFA tarafından sunulan, saha çalışmaları sırasında firma, kişi, görüşme, belge, fotoğraf, ses ve harcama bilgilerinin toplanmasını, düzenlenmesini ve dışa aktarılmasını sağlayan bir mobil uygulamadır.", "Bu Gizlilik Politikası, VIAMATE'in kullanıcı ve cihaz verilerine nasıl eriştiğini ve bunları nasıl işlediğini ve kullanıcı bilgileri dışa aktarmayı veya paylaşmayı seçtiğinde bilgilerin uygulama dışına nasıl çıkabileceğini açıklar."] },
      { title: "2. Temel çalışma ve cihazda saklanan veriler", paragraphs: ["VIAMATE V1 çevrimdışı çalışacak şekilde tasarlanmıştır. Temel veri toplama, düzenleme, saklama ve dışa aktarma iş akışları için internet bağlantısı gerekmez.", "Kullanıcının oluşturduğu veya eklediği firma ve kişi bilgileri, iletişim bilgileri, görüşme kayıtları ve notları, çalışma bilgileri, fotoğraflar, belgeler, kartvizitler, QR/barkod verileri, ses kayıtları, harcamalar ve makbuz bilgileri kullanıcının cihazında işlenir ve saklanır.", "VIAMATE V1 bu çalışma verilerini otomatik olarak VIAFA sunucularına yüklemez veya bir yapay zekâ ya da transkripsiyon hizmetine göndermez."] },
      { title: "3. Kamera ve görseller", paragraphs: ["VIAMATE; kartvizit tarama, QR/barkod tarama, makbuz yakalama, fotoğraf çekme ve ilgili saha kayıtlarını oluşturma gibi özellikler için kamera erişimi isteyebilir.", "Kartvizit ve makbuz OCR işlemleri ile QR/barkod tanıma cihaz üzerinde gerçekleştirilir.", "Kamera erişimi yalnız ilgili kullanıcı tarafından başlatılan özellikleri sağlamak için kullanılır."] },
      { title: "4. Mikrofon ve ses kayıtları", paragraphs: ["VIAMATE; sesli notlar ve görüşme kayıtları gibi kullanıcı tarafından başlatılan özellikler için mikrofon erişimi isteyebilir.", "Ses kayıtları cihazda yerel olarak saklanır.", "Bir ses kaydının oluşturulması veya saklanması, kaydın VIAFA'ya veya harici bir transkripsiyon ya da yapay zekâ hizmetine otomatik olarak yüklenmesine veya iletilmesine neden olmaz.", "VIAMATE V1 bulut tabanlı transkripsiyon veya yapay zekâ tarafından oluşturulan görüşme özetleri sunmaz."] },
      { title: "5. Kişiler", paragraphs: ["VIAMATE, cihaz adres defterine kişi aktarma ve mevcut bir kişiyi kontrol etme gibi kullanıcı tarafından başlatılan işlevler için Android kişi izinlerini isteyebilir.", "Kişilere erişim bu işlevleri sağlamak amacıyla kullanılır. VIAMATE, bu erişim nedeniyle kullanıcının kişi listesini veya temel firma ve kişi çalışma verilerini VIAFA sunucularına otomatik olarak yüklemez."] },
      { title: "6. OCR, QR/barkodlar ve Google ML Kit", paragraphs: ["VIAMATE, kartvizit ve makbuz metinlerini tanımak ve QR kodları ile barkodları okumak için Google ML Kit teknolojilerini kullanabilir.", "İçerik tanıma işlemleri cihaz üzerinde gerçekleştirilir. Uygulama tarafından kullanılan Google veya Android bileşenleri kendi çalışma, güvenlik veya teşhis süreçlerinin bir parçası olarak sınırlı teknik, teşhis veya kullanım bilgilerini işleyebilir."] },
      { title: "7. Dışa aktarma ve kullanıcı tarafından oluşturulan kopyalar", paragraphs: ["VIAMATE, kullanıcıların çalışmalarını Excel dosyaları, ZIP arşivleri, dosyalar, fotoğraflar ve desteklenen diğer biçimler aracılığıyla dışa aktarmasına veya paylaşmasına olanak tanır.", "Dışa aktarma veya paylaşma işlemi kullanıcı tarafından başlatılır.", "Downloads/VIAMATE, cihaz Gallery'si, kullanıcı tarafından seçilen başka bir hedef veya üçüncü taraf uygulamasında oluşturulan kopyalar kullanıcının kontrolündedir.", "Kullanıcı bilgileri başka bir uygulama veya hizmetle paylaşmayı seçerse bu bilgiler daha sonra seçilen uygulama veya hizmetin gizlilik uygulamalarına göre işlenebilir.", "VIAMATE içinde bir çalışma veya kayıt silindiğinde, kullanıcının daha önce dışa aktardığı veya başka bir uygulamayla paylaştığı kopyalar otomatik olarak silinmeyebilir."] },
      { title: "8. Veri saklama ve silme", paragraphs: ["VIAMATE tarafından yönetilen çalışma verileri kullanıcının kontrolündedir.", "Bir çalışmanın tamamlanması veya yeniden açılması verileri otomatik olarak silmez. Kullanıcı kalıcı silmeyi seçtiğinde VIAMATE, ilgili çalışma için yönettiği özel kayıtları ve çalışma dosyalarını siler.", "Daha önce Downloads'a, Gallery'ye, başka bir klasöre veya başka bir uygulamaya dışa aktarılan kopyalar bu silme işleminin dışında kalabilir ve kullanıcı tarafından ayrıca silinmeleri gerekebilir.", "Uygulamanın kaldırılması Android tarafından yönetilen uygulamaya özel verileri kaldırabilir. Uygulamanın özel depolama alanı dışında oluşturulan kullanıcı kontrollü kopyalar cihazda kalabilir."] },
      { title: "9. Güvenlik", paragraphs: ["VIAMATE V1, temel çalışma verilerinin kullanıcının cihazında yerel olarak işleneceği şekilde tasarlanmıştır.", "Uygulama, VIAMATE çalışma içeriğini bulut işleme amacıyla otomatik olarak VIAFA sunucularına iletmez.", "Kullanıcılar cihazlarının güvenliğinden ve VIAMATE dışına aktarmayı veya paylaşmayı seçtikleri bilgi kopyalarından sorumludur."] },
      { title: "10. Reklam, takip ve hesaplar", paragraphs: ["VIAMATE V1:"], bullets: ["üçüncü taraf reklam göstermez;", "reklam profilleri oluşturmaz;", "genel amaçlı davranış analitiği veya reklam takibi kullanmaz;", "kullanıcıların VIAMATE hesabı oluşturmasını gerektirmez."] },
      { title: "11. Çocuklar", paragraphs: ["VIAMATE profesyonel saha çalışmaları ve iş kullanımı için tasarlanmıştır. Çocuklara yönelik değildir."] },
      { title: "12. Üçüncü taraf teknolojiler ve hizmetler", paragraphs: ["VIAMATE; OCR, QR/barkod tanıma, kamera erişimi, yerel dosya işleme ve diğer cihaz işlevleri gibi cihaz üzerinde çalışan özellikleri sağlamak için Google ML Kit ve Android platform teknolojilerini kullanabilir.", "VIAMATE V1, kullanıcının çalışma içeriğini, ses kayıtlarını, görüşme bilgilerini veya diğer saha çalışma verilerini işlemek için OpenAI veya Cloudflare kullanmaz.", "Kullanıcı bilgileri bilinçli olarak başka bir uygulama veya hizmete dışa aktardığında veya paylaştığında seçilen üçüncü taraf bu bilgileri kendi şartları ve gizlilik uygulamaları kapsamında işleyebilir."] },
      { title: "13. Bu Gizlilik Politikasındaki değişiklikler", paragraphs: ["VIAMATE'in özellikleri, veri işleme uygulamaları veya geçerli gereklilikler değişirse bu Gizlilik Politikası güncellenebilir.", "Güncel sürüm, son güncelleme tarihiyle birlikte bu sayfada yayımlanacaktır."] },
      { title: "14. İletişim", paragraphs: ["VIAFA", "E-posta: viamate@expoviafair.com", "Web: expoviafair.com"] },
    ],
  },
  en: {
    title: "VIAMATE Privacy Policy",
    updated: "Last updated: 14 September 2026",
    description: "Privacy Policy explaining how the VIAMATE mobile application processes user and device data.",
    sections: [
      { title: "1. About VIAMATE", paragraphs: ["VIAMATE is a mobile application provided by VIAFA for capturing, organizing, and exporting company, contact, meeting, document, photo, audio, and expense information during field work.", "This Privacy Policy explains how VIAMATE accesses and processes user and device data and how information may leave the application when the user chooses to export or share it."] },
      { title: "2. Core operation and data stored on your device", paragraphs: ["VIAMATE V1 is designed to operate offline. An internet connection is not required for its core capture, organization, storage, and export workflows.", "Company and contact information, contact details, meeting records and notes, workspace information, photos, documents, business cards, QR/barcode data, audio recordings, expenses, and receipt information created or added by the user are processed and stored on the user's device.", "VIAMATE V1 does not automatically upload this workspace information to VIAFA servers or send it to an AI or transcription service."] },
      { title: "3. Camera and images", paragraphs: ["VIAMATE may request camera access for features such as business-card scanning, QR/barcode scanning, receipt capture, photography, and creating related field records.", "Business-card and receipt OCR and QR/barcode recognition are performed on the device.", "Camera access is used only to provide the relevant user-requested features."] },
      { title: "4. Microphone and audio recordings", paragraphs: ["VIAMATE may request microphone access for user-initiated features such as voice notes and meeting recordings.", "Audio recordings are stored locally on the device.", "Creating or storing a recording does not automatically upload or transmit that recording to VIAFA or to an external transcription or AI service.", "VIAMATE V1 does not provide cloud transcription or AI-generated meeting summaries."] },
      { title: "5. Contacts", paragraphs: ["VIAMATE may request Android contacts permissions for user-initiated functions such as exporting a contact to the device address book and checking for an existing contact.", "Access to contacts is used to provide those functions. VIAMATE does not automatically upload the user's contacts or core company and contact workspace data to VIAFA servers as a result of this access."] },
      { title: "6. OCR, QR/barcodes, and Google ML Kit", paragraphs: ["VIAMATE may use Google ML Kit technologies to recognize text from business cards and receipts and to read QR codes and barcodes.", "Content recognition is performed on the device. Google or Android components used by the application may process limited technical, diagnostic, or usage information as part of their own operation, security, or diagnostics."] },
      { title: "7. Exports and user-created copies", paragraphs: ["VIAMATE allows users to export or share their work through Excel files, ZIP archives, files, photos, and other supported formats.", "Exporting or sharing information is initiated by the user.", "Copies created in Downloads/VIAMATE, the device Gallery, another user-selected destination, or a third-party application are under the user's control.", "If the user chooses to share information with another application or service, that information may subsequently be processed according to the privacy practices of the selected application or service.", "Deleting a workspace or record inside VIAMATE may not automatically delete copies that the user previously exported or shared with another application."] },
      { title: "8. Data retention and deletion", paragraphs: ["VIAMATE's app-managed workspace data is controlled by the user.", "Completing or reopening a workspace does not automatically delete its data. When the user chooses permanent deletion, VIAMATE deletes the private records and workspace files it manages for that workspace.", "Copies previously exported to Downloads, the Gallery, another folder, or another application may remain outside this deletion process and may need to be deleted separately by the user.", "Uninstalling the application may remove app-private data managed by Android. User-controlled copies created outside the app's private storage may remain on the device."] },
      { title: "9. Security", paragraphs: ["VIAMATE V1 is designed so that its core workspace data is processed locally on the user's device.", "The application does not automatically transmit VIAMATE workspace content to VIAFA servers for cloud processing.", "Users remain responsible for the security of their device and for copies of information they choose to export or share outside VIAMATE."] },
      { title: "10. Advertising, tracking, and accounts", paragraphs: ["VIAMATE V1:"], bullets: ["does not display third-party advertising;", "does not build advertising profiles;", "does not use general-purpose behavioral analytics or advertising tracking;", "does not require users to create a VIAMATE account."] },
      { title: "11. Children", paragraphs: ["VIAMATE is designed for professional field work and business use. It is not directed to children."] },
      { title: "12. Third-party technologies and services", paragraphs: ["VIAMATE may use Google ML Kit and Android platform technologies to provide on-device functions such as OCR, QR/barcode recognition, camera access, local file handling, and other device functionality.", "VIAMATE V1 does not use OpenAI or Cloudflare to process the user's workspace content, audio recordings, meeting information, or other field-work data.", "When a user intentionally exports or shares information to another application or service, the selected third party may process that information under its own terms and privacy practices."] },
      { title: "13. Changes to this Privacy Policy", paragraphs: ["This Privacy Policy may be updated if VIAMATE's features, data-processing practices, or applicable requirements change.", "The current version will be published on this page together with its last-updated date."] },
      { title: "14. Contact", paragraphs: ["VIAFA", "Email: viamate@expoviafair.com", "Web: expoviafair.com"] },
    ],
  },
};

function ViamatePrivacyPolicy() {
  const { language } = useTranslation();
  const policy = content[language] ?? content.en;
  const sections = policy.sections.map((section, index) => ({
    id: `section-${index + 1}`,
    title: section.title,
    content: (
      <>
        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
      </>
    ),
  }));

  return (
    <>
      <SEO title={`${policy.title} | VIAFA`} description={policy.description} canonical="/viamate/privacy" />
      <LegalPage
        eyebrow="VIAMATE"
        title={policy.title}
        description={policy.description}
        updatedLabel={language === "tr" ? "Son güncelleme" : "Last updated"}
        updatedDate={language === "tr" ? "14 Eylül 2026" : "14 September 2026"}
        sections={sections}
      />
    </>
  );
}

export default ViamatePrivacyPolicy;
