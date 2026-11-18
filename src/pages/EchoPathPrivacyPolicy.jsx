import { Link } from "react-router-dom";

import LegalPage from "../components/legal/LegalPage";
import SEO from "../components/seo/SEO";

// Echo Path gizlilik politikası (TR/EN). Metin, uygulama içindeki politikayla aynı
// kaynaktan üretildi: echo_path/assets/policy/privacy_<dil>.md
const CONTACT = "ahmet@expoviafair.com";
const mail = <a href={`mailto:${CONTACT}`}>{CONTACT}</a>;

const sectionsEn = [
  {
    id: "s1",
    title: "1. App and publisher",
    content: (
      <>
        <p>Türkçe sürüm: <Link to="/echo-path/privacy/tr">Echo Path Gizlilik Politikası</Link></p>
        <p>Echo Path is a sliding puzzle game for Android, published by VIAFA (Istanbul, Türkiye; package name com.echopath.echo_path). This policy covers the Echo Path app only.</p>
      </>
    ),
  },
  {
    id: "s2",
    title: "2. Information we collect",
    content: (
      <>
        <p>We do not ask for, collect or receive personal information. There is no account or sign-in. The app does not ask for your name, email address, phone number, precise location, contacts, photos, files, camera or microphone. We run no servers for the app, and your game data is never sent to us.</p>
      </>
    ),
  },
  {
    id: "s3",
    title: "3. Data stored only on your device",
    content: (
      <>
        <p>To let you continue where you left off, the app saves the following in its private storage on your device:</p>
        <ul>
          <li>which levels you have completed,</li>
          <li>your language (Turkish or English),</li>
          <li>sound effect and melody volume, mute and reduced motion settings,</li>
          <li>a counter used to space out ads.</li>
        </ul>
        <p>This data is not sent to us or to anyone else, and we cannot see it. The game itself works offline; only advertising uses the internet. The data is removed when you clear the app's storage or uninstall the app. If Android backup is turned on, Android may include it in your own device backup, which you control in your Android and Google account settings.</p>
      </>
    ),
  },
  {
    id: "s4",
    title: "4. Advertising (Google AdMob)",
    content: (
      <>
        <p>The app is free and shows full-screen (interstitial) ads from Google AdMob, a service of Google LLC. An ad may be shown only after every 5 different levels you complete for the first time, and only when you choose to continue from the results screen; the tutorial is not counted. There are no banner ads.</p>
        <p>When the app requests or shows an ad, the Google Mobile Ads SDK in the app automatically collects and shares the following with Google for advertising, analytics and fraud prevention:</p>
        <ul>
          <li>device and account identifiers, such as the Android advertising ID and app set ID,</li>
          <li>IP address, which may be used to estimate the general location of the device,</li>
          <li>product interactions, such as app launches, taps and ad views,</li>
          <li>diagnostic information, such as app launch time, hang rate and energy usage.</li>
        </ul>
        <p>This is separate from the game data in section 3: the game data stays on your device, while the advertising data above is handled by Google under its own policies:</p>
        <ul>
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a></li>
          <li><a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">How Google uses information from apps that use its services</a></li>
          <li><a href="https://developers.google.com/admob/android/privacy/play-data-disclosure" target="_blank" rel="noopener noreferrer">Google Mobile Ads SDK data disclosure</a></li>
        </ul>
      </>
    ),
  },
  {
    id: "s5",
    title: "5. Consent and your choices",
    content: (
      <>
        <p>Every time the app starts, it checks with Google's User Messaging Platform whether consent is needed. Where the law requires it (for example in the European Economic Area, the United Kingdom and Switzerland), you are asked for consent before personalized advertising or other consent-based processing, and ads are requested only when Google's consent tools allow it. Where your region requires it, you can change your choice at any time in Settings &rarr; Ad privacy options. If you do not consent, the game still works fully; you may see non-personalized or limited ads, or none. You can also reset or delete your advertising ID, or opt out of ad personalization, in your Android settings.</p>
      </>
    ),
  },
  {
    id: "s6",
    title: "6. Data sharing",
    content: (
      <>
        <p>We do not sell, rent or share personal information. The only data that leaves your device is the advertising data in section 4, which the Google Mobile Ads SDK sends to Google and its advertising partners. Google Play may process information under Google's own terms when you download or update apps.</p>
      </>
    ),
  },
  {
    id: "s7",
    title: "7. Retention and deletion",
    content: (
      <>
        <p>Game data stays on your device until you clear the app's storage or uninstall the app. Google keeps advertising data according to its own policies; we cannot access or delete it. You can reset or delete your advertising ID in Android settings.</p>
      </>
    ),
  },
  {
    id: "s8",
    title: "8. Your rights",
    content: (
      <>
        <p>Depending on where you live, you may have rights to access, correct or delete personal data, to object to or restrict processing, to withdraw consent and to complain to a data protection authority. As we hold no personal data about you, most requests concern data held by Google; see Google's privacy controls. You can withdraw ad consent in Settings &rarr; Ad privacy options, where shown.</p>
      </>
    ),
  },
  {
    id: "s9",
    title: "9. Children",
    content: (
      <>
        <p>We do not knowingly collect personal information from children, and the game itself collects no personal information from anyone. Advertising is handled by Google AdMob as described in section 4. If you believe a child has provided personal information through the app, contact us.</p>
      </>
    ),
  },
  {
    id: "s10",
    title: "10. Security",
    content: (
      <>
        <p>Game data is kept in Android's private app storage, which other apps cannot read. According to Google, advertising data is encrypted in transit using TLS.</p>
      </>
    ),
  },
  {
    id: "s11",
    title: "11. Changes",
    content: (
      <>
        <p>We will update this policy if the app, its advertising or legal requirements change in a way that affects it. The current version and its date are published at the address above.</p>
      </>
    ),
  },
  {
    id: "s12",
    title: "12. Contact",
    content: (
      <>
        <p>VIAFA, Istanbul, Türkiye — {mail}</p>
      </>
    ),
  },
];

const sectionsTr = [
  {
    id: "s1",
    title: "1. Uygulama ve yayıncı",
    content: (
      <>
        <p>English version: <Link to="/echo-path/privacy">Echo Path Privacy Policy</Link></p>
        <p>Echo Path, VIAFA (İstanbul, Türkiye) tarafından yayımlanan, Android için bir kaydırma bulmaca oyunudur (paket adı com.echopath.echo_path). Bu politika yalnızca Echo Path uygulamasını kapsar.</p>
      </>
    ),
  },
  {
    id: "s2",
    title: "2. Topladığımız bilgiler",
    content: (
      <>
        <p>Sizden kişisel bilgi istemiyor, toplamıyor ve almıyoruz. Hesap veya oturum açma yoktur. Uygulama adınızı, e-posta adresinizi, telefon numaranızı, hassas konumunuzu, kişilerinizi, fotoğraflarınızı, dosyalarınızı, kameranızı veya mikrofonunuzu istemez. Uygulama için sunucu çalıştırmıyoruz; oyun verileriniz bize hiçbir zaman gönderilmez.</p>
      </>
    ),
  },
  {
    id: "s3",
    title: "3. Yalnızca cihazınızda saklanan veriler",
    content: (
      <>
        <p>Kaldığınız yerden devam edebilmeniz için uygulama, cihazınızdaki kendi özel depolama alanına şunları kaydeder:</p>
        <ul>
          <li>tamamladığınız bölümler,</li>
          <li>dil seçiminiz (Türkçe veya İngilizce),</li>
          <li>ses efekti ve melodi düzeyi, sessize alma ve azaltılmış hareket ayarları,</li>
          <li>reklamların aralığını belirlemek için kullanılan bir sayaç.</li>
        </ul>
        <p>Bu veriler bize veya başka birine gönderilmez; biz göremeyiz. Oyunun kendisi internetsiz çalışır; internet yalnızca reklamlar için kullanılır. Veriler, uygulamanın depolama alanını temizlediğinizde veya uygulamayı kaldırdığınızda silinir. Android yedeklemesi açıksa Android bu verileri kendi cihaz yedeğinize ekleyebilir; bunu Android ve Google hesabı ayarlarınızdan yönetirsiniz.</p>
      </>
    ),
  },
  {
    id: "s4",
    title: "4. Reklamlar (Google AdMob)",
    content: (
      <>
        <p>Uygulama ücretsizdir ve Google LLC'nin bir hizmeti olan Google AdMob üzerinden tam ekran (geçiş) reklamları gösterir. Reklam yalnızca ilk kez tamamladığınız her 5 farklı bölümün ardından ve yalnızca sonuç ekranından devam etmeyi seçtiğinizde gösterilebilir; öğretici bu sayıya dahil değildir. Banner reklam yoktur.</p>
        <p>Uygulama reklam istediğinde veya gösterdiğinde, uygulamadaki Google Mobile Ads SDK'sı aşağıdakileri reklam, analiz ve dolandırıcılığı önleme amacıyla otomatik olarak toplar ve Google ile paylaşır:</p>
        <ul>
          <li>reklam kimliği ve uygulama kümesi kimliği gibi cihaz ve hesap kimlikleri,</li>
          <li>cihazın genel konumunu tahmin etmek için kullanılabilecek IP adresi,</li>
          <li>uygulama açılışları, dokunmalar ve reklam görüntülemeleri gibi ürün etkileşimleri,</li>
          <li>uygulamanın açılış süresi, takılma oranı ve enerji kullanımı gibi tanılama bilgileri.</li>
        </ul>
        <p>Bu, 3. bölümdeki oyun verilerinden ayrıdır: oyun verileri cihazınızda kalır; yukarıdaki reklam verilerini ise Google kendi politikalarına göre işler:</p>
        <ul>
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Gizlilik Politikası</a></li>
          <li><a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google'ın, hizmetlerini kullanan uygulamalardan gelen bilgileri nasıl kullandığı</a></li>
          <li><a href="https://developers.google.com/admob/android/privacy/play-data-disclosure" target="_blank" rel="noopener noreferrer">Google Mobile Ads SDK veri açıklaması</a></li>
        </ul>
      </>
    ),
  },
  {
    id: "s5",
    title: "5. Rıza ve seçimleriniz",
    content: (
      <>
        <p>Uygulama her açılışta Google'ın Kullanıcı Mesajlaşma Platformu (UMP) ile rıza gerekip gerekmediğini kontrol eder. Yasanın gerektirdiği yerlerde (örneğin Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre) kişiselleştirilmiş reklam veya rızaya dayalı diğer işlemlerden önce rızanız istenir ve reklamlar yalnızca Google'ın rıza araçları izin verdiğinde istenir. Bölgeniz gerektiriyorsa seçiminizi istediğiniz zaman Ayarlar &rarr; Reklam gizlilik seçenekleri bölümünden değiştirebilirsiniz. Rıza vermezseniz oyun tam olarak çalışmaya devam eder; kişiselleştirilmemiş veya sınırlı reklam görebilir ya da hiç reklam görmeyebilirsiniz. Reklam kimliğinizi sıfırlayabilir, silebilir veya reklam kişiselleştirmesini Android ayarlarından kapatabilirsiniz.</p>
      </>
    ),
  },
  {
    id: "s6",
    title: "6. Veri paylaşımı",
    content: (
      <>
        <p>Kişisel bilgileri satmaz, kiralamaz veya paylaşmayız. Cihazınızdan çıkan tek veri, Google Mobile Ads SDK'sının Google'a ve reklam iş ortaklarına gönderdiği 4. bölümdeki reklam verileridir. Uygulamaları indirdiğinizde veya güncellediğinizde Google Play, Google'ın kendi koşullarına göre bilgi işleyebilir.</p>
      </>
    ),
  },
  {
    id: "s7",
    title: "7. Saklama ve silme",
    content: (
      <>
        <p>Oyun verileri, uygulamanın depolama alanını temizleyene veya uygulamayı kaldırana kadar cihazınızda kalır. Google reklam verilerini kendi politikalarına göre saklar; bu verilere erişemeyiz ve onları silemeyiz. Reklam kimliğinizi Android ayarlarından sıfırlayabilir veya silebilirsiniz.</p>
      </>
    ),
  },
  {
    id: "s8",
    title: "8. Haklarınız",
    content: (
      <>
        <p>Yaşadığınız yere bağlı olarak kişisel verilere erişme, düzeltme veya silme, işlemeye itiraz etme veya kısıtlama, rızayı geri çekme ve bir veri koruma kurumuna şikâyette bulunma haklarınız olabilir. Hakkınızda kişisel veri tutmadığımız için taleplerin çoğu Google'ın tuttuğu verilerle ilgilidir; Google'ın gizlilik denetimlerine bakın. Reklam rızanızı, gösterildiği yerlerde Ayarlar &rarr; Reklam gizlilik seçenekleri bölümünden geri çekebilirsiniz.</p>
      </>
    ),
  },
  {
    id: "s9",
    title: "9. Çocuklar",
    content: (
      <>
        <p>Çocuklardan bilerek kişisel bilgi toplamayız; oyunun kendisi kimseden kişisel bilgi toplamaz. Reklamlar, 4. bölümde açıklandığı gibi Google AdMob tarafından yönetilir. Bir çocuğun uygulama üzerinden kişisel bilgi verdiğini düşünüyorsanız bizimle iletişime geçin.</p>
      </>
    ),
  },
  {
    id: "s10",
    title: "10. Güvenlik",
    content: (
      <>
        <p>Oyun verileri, diğer uygulamaların okuyamadığı Android'in özel uygulama depolama alanında tutulur. Google'a göre reklam verileri aktarım sırasında TLS ile şifrelenir.</p>
      </>
    ),
  },
  {
    id: "s11",
    title: "11. Değişiklikler",
    content: (
      <>
        <p>Uygulamada, reklamlarında veya yasal gereksinimlerde politikayı etkileyen bir değişiklik olursa bu politikayı güncelleriz. Güncel sürüm ve tarihi yukarıdaki adreste yayımlanır.</p>
      </>
    ),
  },
  {
    id: "s12",
    title: "12. İletişim",
    content: (
      <>
        <p>VIAFA, İstanbul, Türkiye — {mail}</p>
      </>
    ),
  },
];

export function EchoPathPrivacyPolicyTr() {
  return (
    <>
      <SEO
        title="Echo Path Gizlilik Politikası | VIAFA"
        description="Android bulmaca oyunu Echo Path için gizlilik politikası: cihazda kalan oyun verileri, Google AdMob reklamları ve rıza seçenekleri."
        canonical="/echo-path/privacy/tr"
      />
      <LegalPage
        eyebrow="VIAFA · ECHO PATH"
        title="Echo Path Gizlilik Politikası"
        description="Echo Path Android oyununun ve reklamlarının (Google AdMob) bilgileri nasıl işlediği."
        updatedLabel="Son güncelleme"
        updatedDate="18 Kasım 2026"
        sections={sectionsTr}
      />
    </>
  );
}

export default function EchoPathPrivacyPolicy() {
  return (
    <>
      <SEO
        title="Echo Path Privacy Policy | VIAFA"
        description="Privacy policy for Echo Path, a puzzle game for Android: on-device game data, Google AdMob advertising, and consent choices."
        canonical="/echo-path/privacy"
      />
      <LegalPage
        eyebrow="VIAFA · ECHO PATH"
        title="Echo Path Privacy Policy"
        description="How the Echo Path Android game and its advertising (Google AdMob) handle information."
        updatedLabel="Last updated"
        updatedDate="November 18, 2026"
        sections={sectionsEn}
      />
    </>
  );
}
