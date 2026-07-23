import LegalPage from "../components/legal/LegalPage";

import { useTranslation } from "../hooks/useTranslation";

function CookiePolicy() {
  const { language } = useTranslation();

  const content = {
    en: {
      eyebrow: "Legal Information",
      title: "Cookie Policy",
      description:
        "This Cookie Policy explains how EREXPO may use cookies and similar technologies when you visit our website and how you can manage your preferences.",
      updatedLabel: "Last updated",
      updatedDate: "July 20, 2026",

      sections: [
        {
          id: "introduction",
          title: "Introduction",
          content: (
            <>
              <p>
                This Cookie Policy provides information
                about cookies and similar technologies that
                may be used on the EREXPO website.
              </p>

              <p>
                Cookies help websites function properly,
                remember preferences, understand how
                visitors use pages and improve the overall
                website experience.
              </p>

              <p>
                This policy should be read together with the
                EREXPO Privacy Policy.
              </p>
            </>
          ),
        },

        {
          id: "what-are-cookies",
          title: "What Are Cookies?",
          content: (
            <>
              <p>
                Cookies are small text files placed on your
                computer, mobile device or other
                internet-enabled device when you visit a
                website.
              </p>

              <p>
                Cookies allow a website to recognise a
                device, remember certain information and
                provide a more efficient browsing
                experience.
              </p>

              <p>
                Similar technologies, including local
                storage, pixels, tags and software
                development tools, may perform related
                functions.
              </p>
            </>
          ),
        },

        {
          id: "cookie-types",
          title: "Types of Cookies We May Use",
          content: (
            <>
              <p>
                Depending on the website features and
                services in use, EREXPO may use the
                following categories of cookies:
              </p>

              <ul>
                <li>
                  <strong>Strictly necessary cookies:</strong>{" "}
                  These cookies are required for essential
                  website functions, security and page
                  navigation.
                </li>

                <li>
                  <strong>Preference cookies:</strong>{" "}
                  These cookies may remember choices such as
                  language, region or display preferences.
                </li>

                <li>
                  <strong>Performance and analytics cookies:</strong>{" "}
                  These cookies may help us understand how
                  visitors interact with the website and
                  identify areas for improvement.
                </li>

                <li>
                  <strong>Functionality cookies:</strong>{" "}
                  These cookies may support enhanced
                  features and personalised website
                  functions.
                </li>

                <li>
                  <strong>Marketing cookies:</strong>{" "}
                  Where used, these cookies may help measure
                  campaigns or provide more relevant
                  communications and advertising.
                </li>
              </ul>
            </>
          ),
        },

        {
          id: "necessary-cookies",
          title: "Strictly Necessary Cookies",
          content: (
            <>
              <p>
                Strictly necessary cookies support the basic
                operation and security of the website.
              </p>

              <p>
                They may be used to maintain navigation,
                protect forms, manage network traffic,
                remember privacy choices and prevent
                fraudulent or malicious activity.
              </p>

              <p>
                Because these cookies are required for the
                website to operate, they generally cannot be
                disabled through the website’s preference
                controls.
              </p>
            </>
          ),
        },

        {
          id: "analytics-cookies",
          title: "Analytics and Performance Cookies",
          content: (
            <>
              <p>
                EREXPO may use analytics technologies to
                understand website performance and visitor
                interactions.
              </p>

              <p>
                These technologies may collect information
                such as:
              </p>

              <ul>
                <li>Pages viewed</li>

                <li>Time spent on the website</li>

                <li>Links and buttons selected</li>

                <li>Approximate location</li>

                <li>Browser and device information</li>

                <li>
                  Referring website or traffic source
                </li>

                <li>
                  Technical errors and performance data
                </li>
              </ul>

              <p>
                Analytics cookies that are not strictly
                necessary will be used only where permitted
                by applicable legislation and, where
                required, after your consent has been
                obtained.
              </p>
            </>
          ),
        },

        {
          id: "preference-cookies",
          title: "Preference and Functionality Cookies",
          content: (
            <>
              <p>
                Preference and functionality cookies may be
                used to remember information you select
                during your visit.
              </p>

              <p>
                This may include your language preference,
                cookie choices or other settings intended to
                make future visits more convenient.
              </p>

              <p>
                Disabling these cookies may cause certain
                preferences or enhanced functions not to
                operate as expected.
              </p>
            </>
          ),
        },

        {
          id: "marketing-cookies",
          title: "Marketing Cookies",
          content: (
            <>
              <p>
                The EREXPO website does not intend to place
                non-essential marketing cookies without the
                legally required consent.
              </p>

              <p>
                Where marketing or campaign measurement
                technologies are introduced, visitors will
                be informed about their purpose, provider
                and available choices.
              </p>

              <p>
                Refusing marketing cookies should not
                prevent access to the essential functions of
                the website.
              </p>
            </>
          ),
        },

        {
          id: "session-persistent",
          title: "Session and Persistent Cookies",
          content: (
            <>
              <p>
                Cookies may remain on your device for
                different periods:
              </p>

              <ul>
                <li>
                  <strong>Session cookies</strong> are
                  temporary and are normally deleted when
                  you close your browser.
                </li>

                <li>
                  <strong>Persistent cookies</strong> remain
                  on your device until their expiry date,
                  until they are replaced or until you
                  delete them manually.
                </li>
              </ul>

              <p>
                The duration of each cookie depends on its
                purpose and the settings of the relevant
                service provider.
              </p>
            </>
          ),
        },

        {
          id: "first-third-party",
          title: "First-Party and Third-Party Cookies",
          content: (
            <>
              <p>
                First-party cookies are set directly by the
                EREXPO website.
              </p>

              <p>
                Third-party cookies may be set by external
                service providers whose tools or content are
                integrated into the website.
              </p>

              <p>
                These providers may include hosting,
                analytics, security, map, video, social
                media or communication service providers.
              </p>

              <p>
                Third parties process information according
                to their own privacy and cookie policies.
              </p>
            </>
          ),
        },

        {
          id: "legal-basis",
          title: "Legal Basis",
          content: (
            <>
              <p>
                Strictly necessary cookies may be used where
                required to provide the website, protect its
                security or deliver a service requested by
                the visitor.
              </p>

              <p>
                Cookies used for analytics, personalisation
                or marketing purposes will be based on
                consent where consent is required by
                applicable legislation.
              </p>

              <p>
                Consent may be withdrawn at any time without
                affecting the lawfulness of processing
                carried out before withdrawal.
              </p>
            </>
          ),
        },

        {
          id: "cookie-preferences",
          title: "Managing Your Cookie Preferences",
          content: (
            <>
              <p>
                Where a cookie preference tool is available,
                you can use it to accept, reject or manage
                non-essential cookie categories.
              </p>

              <p>
                You may also configure your browser to
                block, delete or warn you about cookies.
                Browser controls vary by provider and
                device.
              </p>

              <p>
                Disabling all cookies may affect essential
                functions, saved preferences or parts of the
                website.
              </p>
            </>
          ),
        },

        {
          id: "browser-settings",
          title: "Browser Settings",
          content: (
            <>
              <p>
                Most browsers allow you to review and manage
                cookies through their privacy or security
                settings.
              </p>

              <p>
                Depending on your browser, available
                controls may allow you to:
              </p>

              <ul>
                <li>View cookies stored on your device</li>

                <li>Delete existing cookies</li>

                <li>
                  Block all cookies or selected cookie types
                </li>

                <li>
                  Block third-party cookies
                </li>

                <li>
                  Receive a warning before cookies are
                  stored
                </li>
              </ul>

              <p>
                Please consult the support documentation of
                your browser for current instructions.
              </p>
            </>
          ),
        },

        {
          id: "personal-data",
          title: "Personal Data Collected Through Cookies",
          content: (
            <>
              <p>
                Depending on the cookie or technology used,
                collected information may include IP
                address, device identifiers, browser type,
                operating system, language preference,
                viewed pages and interaction data.
              </p>

              <p>
                Where this information identifies or can
                reasonably be linked to an individual, it
                will be treated as personal information and
                processed in accordance with the EREXPO
                Privacy Policy.
              </p>
            </>
          ),
        },

        {
          id: "international-transfers",
          title: "International Transfers",
          content: (
            <>
              <p>
                Some technology or analytics providers may
                process information using systems located
                outside Türkiye.
              </p>

              <p>
                Where cookie-related information is
                transferred internationally, EREXPO will
                take reasonable measures to ensure that the
                transfer is carried out in accordance with
                applicable data protection legislation.
              </p>
            </>
          ),
        },

        {
          id: "policy-updates",
          title: "Changes to This Policy",
          content: (
            <>
              <p>
                This Cookie Policy may be updated when the
                website’s functions, service providers,
                cookies or legal requirements change.
              </p>

              <p>
                The latest version will be published on this
                page together with the most recent update
                date.
              </p>
            </>
          ),
        },

        {
          id: "contact",
          title: "Contact Us",
          content: (
            <>
              <p>
                For questions about cookies, privacy choices
                or this Cookie Policy, please contact:
              </p>

              <p>
                <strong>EREXPO</strong>
                <br />
                International Exhibition Representation
                <br />
                Türkiye
                <br />
                <a href="mailto:info@erexpo.com">
                  info@erexpo.com
                </a>
              </p>
            </>
          ),
        },
      ],
    },

    tr: {
      eyebrow: "Yasal Bilgilendirme",
      title: "Çerez Politikası",
      description:
        "Bu Çerez Politikası, EREXPO internet sitesini ziyaret ettiğinizde çerezlerin ve benzeri teknolojilerin nasıl kullanılabileceğini ve tercihlerinizi nasıl yönetebileceğinizi açıklar.",
      updatedLabel: "Son güncelleme",
      updatedDate: "20 Temmuz 2026",

      sections: [
        {
          id: "giris",
          title: "Giriş",
          content: (
            <>
              <p>
                Bu Çerez Politikası, EREXPO internet
                sitesinde kullanılabilecek çerezler ve
                benzeri teknolojiler hakkında bilgi verir.
              </p>

              <p>
                Çerezler; internet sitesinin doğru şekilde
                çalışmasına, tercihlerin hatırlanmasına,
                ziyaretçilerin sayfaları nasıl kullandığının
                anlaşılmasına ve kullanıcı deneyiminin
                geliştirilmesine yardımcı olur.
              </p>

              <p>
                Bu politika, EREXPO Gizlilik Politikası ile
                birlikte değerlendirilmelidir.
              </p>
            </>
          ),
        },

        {
          id: "cerez-nedir",
          title: "Çerez Nedir?",
          content: (
            <>
              <p>
                Çerezler, bir internet sitesini ziyaret
                ettiğinizde bilgisayarınıza, mobil
                cihazınıza veya internet bağlantılı başka
                bir cihazınıza yerleştirilen küçük metin
                dosyalarıdır.
              </p>

              <p>
                Çerezler; internet sitesinin cihazınızı
                tanımasına, belirli bilgileri hatırlamasına
                ve daha verimli bir gezinme deneyimi
                sunmasına yardımcı olur.
              </p>

              <p>
                Yerel depolama, piksel, etiket ve benzeri
                teknolojiler de çerezlere benzer işlevler
                gerçekleştirebilir.
              </p>
            </>
          ),
        },

        {
          id: "cerez-turleri",
          title: "Kullanılabilecek Çerez Türleri",
          content: (
            <>
              <p>
                İnternet sitesindeki özelliklere ve
                kullanılan hizmetlere bağlı olarak EREXPO
                aşağıdaki çerez kategorilerini
                kullanabilir:
              </p>

              <ul>
                <li>
                  <strong>Zorunlu çerezler:</strong>{" "}
                  İnternet sitesinin temel işlevleri,
                  güvenliği ve sayfa dolaşımı için
                  gereklidir.
                </li>

                <li>
                  <strong>Tercih çerezleri:</strong>{" "}
                  Dil, bölge veya görüntüleme tercihi gibi
                  seçimlerin hatırlanmasını sağlayabilir.
                </li>

                <li>
                  <strong>Performans ve analiz çerezleri:</strong>{" "}
                  Ziyaretçilerin siteyle nasıl etkileşim
                  kurduğunun anlaşılmasına ve geliştirme
                  alanlarının belirlenmesine yardımcı
                  olabilir.
                </li>

                <li>
                  <strong>İşlevsellik çerezleri:</strong>{" "}
                  Gelişmiş özellikleri ve kişiselleştirilmiş
                  site işlevlerini destekleyebilir.
                </li>

                <li>
                  <strong>Pazarlama çerezleri:</strong>{" "}
                  Kullanılması halinde kampanyaların
                  ölçülmesine veya daha ilgili iletişim ve
                  reklamların sunulmasına yardımcı olabilir.
                </li>
              </ul>
            </>
          ),
        },

        {
          id: "zorunlu-cerezler",
          title: "Zorunlu Çerezler",
          content: (
            <>
              <p>
                Zorunlu çerezler, internet sitesinin temel
                şekilde çalışmasını ve güvenliğini
                destekler.
              </p>

              <p>
                Bu çerezler; sayfa dolaşımının sürdürülmesi,
                formların korunması, ağ trafiğinin
                yönetilmesi, gizlilik tercihlerinin
                hatırlanması ve kötü niyetli faaliyetlerin
                önlenmesi amacıyla kullanılabilir.
              </p>

              <p>
                İnternet sitesinin çalışması için gerekli
                olduklarından, bu çerezler genellikle site
                üzerindeki tercih araçları aracılığıyla
                devre dışı bırakılamaz.
              </p>
            </>
          ),
        },

        {
          id: "analiz-cerezleri",
          title: "Analiz ve Performans Çerezleri",
          content: (
            <>
              <p>
                EREXPO, internet sitesinin performansını ve
                ziyaretçi etkileşimlerini anlamak amacıyla
                analiz teknolojileri kullanabilir.
              </p>

              <p>
                Bu teknolojiler aşağıdaki bilgileri
                toplayabilir:
              </p>

              <ul>
                <li>Görüntülenen sayfalar</li>

                <li>Sitede geçirilen süre</li>

                <li>Tıklanan bağlantı ve düğmeler</li>

                <li>Yaklaşık konum</li>

                <li>Tarayıcı ve cihaz bilgileri</li>

                <li>
                  Yönlendiren internet sitesi veya trafik
                  kaynağı
                </li>

                <li>
                  Teknik hatalar ve performans bilgileri
                </li>
              </ul>

              <p>
                Zorunlu olmayan analiz çerezleri, yalnızca
                yürürlükteki mevzuatın izin verdiği
                durumlarda ve gerekli olması halinde
                onayınız alındıktan sonra kullanılır.
              </p>
            </>
          ),
        },

        {
          id: "tercih-cerezleri",
          title: "Tercih ve İşlevsellik Çerezleri",
          content: (
            <>
              <p>
                Tercih ve işlevsellik çerezleri,
                ziyaretiniz sırasında yaptığınız seçimlerin
                hatırlanması amacıyla kullanılabilir.
              </p>

              <p>
                Bu seçimler; dil tercihinizi, çerez
                tercihlerinizi veya sonraki ziyaretlerinizi
                kolaylaştıracak diğer ayarları içerebilir.
              </p>

              <p>
                Bu çerezlerin devre dışı bırakılması, bazı
                tercihlerin veya gelişmiş özelliklerin
                beklendiği şekilde çalışmamasına neden
                olabilir.
              </p>
            </>
          ),
        },

        {
          id: "pazarlama-cerezleri",
          title: "Pazarlama Çerezleri",
          content: (
            <>
              <p>
                EREXPO internet sitesi, kanunen gerekli
                onay alınmadan zorunlu olmayan pazarlama
                çerezleri yerleştirmeyi amaçlamaz.
              </p>

              <p>
                Pazarlama veya kampanya ölçüm teknolojileri
                kullanıma alınırsa ziyaretçilere bu
                teknolojilerin amacı, sağlayıcısı ve mevcut
                tercih seçenekleri hakkında bilgi verilir.
              </p>

              <p>
                Pazarlama çerezlerinin reddedilmesi,
                internet sitesinin temel işlevlerine
                erişimi engellememelidir.
              </p>
            </>
          ),
        },

        {
          id: "oturum-kalici",
          title: "Oturum ve Kalıcı Çerezler",
          content: (
            <>
              <p>
                Çerezler cihazınızda farklı sürelerle
                saklanabilir:
              </p>

              <ul>
                <li>
                  <strong>Oturum çerezleri</strong>{" "}
                  geçicidir ve genellikle tarayıcınızı
                  kapattığınızda silinir.
                </li>

                <li>
                  <strong>Kalıcı çerezler</strong> son
                  kullanma tarihine kadar, yenileriyle
                  değiştirilene kadar veya manuel olarak
                  silinene kadar cihazınızda kalır.
                </li>
              </ul>

              <p>
                Her çerezin kullanım süresi, amacına ve
                ilgili hizmet sağlayıcının ayarlarına göre
                değişebilir.
              </p>
            </>
          ),
        },

        {
          id: "birinci-ucuncu-taraf",
          title: "Birinci ve Üçüncü Taraf Çerezler",
          content: (
            <>
              <p>
                Birinci taraf çerezler doğrudan EREXPO
                internet sitesi tarafından yerleştirilir.
              </p>

              <p>
                Üçüncü taraf çerezler ise araçları veya
                içerikleri internet sitesine entegre edilen
                harici hizmet sağlayıcılar tarafından
                yerleştirilebilir.
              </p>

              <p>
                Bu sağlayıcılar; barındırma, analiz,
                güvenlik, harita, video, sosyal medya veya
                iletişim hizmeti sunan kuruluşları
                içerebilir.
              </p>

              <p>
                Üçüncü taraflar, bilgileri kendi gizlilik
                ve çerez politikalarına göre işler.
              </p>
            </>
          ),
        },

        {
          id: "hukuki-sebep",
          title: "Hukuki Sebep",
          content: (
            <>
              <p>
                Zorunlu çerezler; internet sitesinin
                sunulması, güvenliğinin korunması veya
                ziyaretçinin talep ettiği bir hizmetin
                sağlanması için gerekli olduğu ölçüde
                kullanılabilir.
              </p>

              <p>
                Analiz, kişiselleştirme veya pazarlama
                amacıyla kullanılan çerezler, yürürlükteki
                mevzuatın onay gerektirdiği durumlarda açık
                rızaya dayanır.
              </p>

              <p>
                Verilen onay, geri çekme işleminden önce
                gerçekleştirilen işlemlerin hukuka
                uygunluğunu etkilemeden her zaman geri
                çekilebilir.
              </p>
            </>
          ),
        },

        {
          id: "cerez-tercihleri",
          title: "Çerez Tercihlerinin Yönetilmesi",
          content: (
            <>
              <p>
                İnternet sitesinde bir çerez tercih aracı
                sunulması halinde, zorunlu olmayan çerez
                kategorilerini kabul etmek, reddetmek veya
                yönetmek için bu aracı kullanabilirsiniz.
              </p>

              <p>
                Tarayıcınızı çerezleri engelleyecek, silecek
                veya çerezler hakkında uyarı verecek şekilde
                de yapılandırabilirsiniz. Tarayıcı
                kontrolleri sağlayıcıya ve cihaza göre
                değişir.
              </p>

              <p>
                Tüm çerezlerin devre dışı bırakılması;
                temel işlevleri, kaydedilen tercihleri veya
                internet sitesinin bazı bölümlerini
                etkileyebilir.
              </p>
            </>
          ),
        },

        {
          id: "tarayici-ayarlari",
          title: "Tarayıcı Ayarları",
          content: (
            <>
              <p>
                Çoğu tarayıcı, gizlilik veya güvenlik
                ayarları üzerinden çerezlerin incelenmesine
                ve yönetilmesine izin verir.
              </p>

              <p>
                Tarayıcınıza bağlı olarak aşağıdaki
                işlemleri gerçekleştirebilirsiniz:
              </p>

              <ul>
                <li>
                  Cihazınızda saklanan çerezleri görüntüleme
                </li>

                <li>Mevcut çerezleri silme</li>

                <li>
                  Tüm çerezleri veya belirli çerez
                  türlerini engelleme
                </li>

                <li>Üçüncü taraf çerezlerini engelleme</li>

                <li>
                  Çerez kaydedilmeden önce uyarı alma
                </li>
              </ul>

              <p>
                Güncel talimatlar için kullandığınız
                tarayıcının destek belgelerini
                inceleyebilirsiniz.
              </p>
            </>
          ),
        },

        {
          id: "kisisel-veriler",
          title: "Çerezler Aracılığıyla İşlenen Kişisel Veriler",
          content: (
            <>
              <p>
                Kullanılan çerez veya teknolojiye bağlı
                olarak IP adresi, cihaz tanımlayıcısı,
                tarayıcı türü, işletim sistemi, dil tercihi,
                görüntülenen sayfalar ve etkileşim bilgileri
                işlenebilir.
              </p>

              <p>
                Bu bilgilerin bir kişiyi tanımlaması veya
                makul şekilde bir kişiyle
                ilişkilendirilebilmesi halinde bilgiler
                kişisel veri olarak kabul edilir ve EREXPO
                Gizlilik Politikası’na uygun şekilde
                işlenir.
              </p>
            </>
          ),
        },

        {
          id: "yurt-disi-aktarim",
          title: "Yurt Dışına Veri Aktarımı",
          content: (
            <>
              <p>
                Bazı teknoloji veya analiz hizmet
                sağlayıcıları, bilgileri Türkiye dışında
                bulunan sistemler üzerinden işleyebilir.
              </p>

              <p>
                Çerezler aracılığıyla elde edilen
                bilgilerin yurt dışına aktarılması halinde,
                aktarımın yürürlükteki kişisel verilerin
                korunması mevzuatına uygun şekilde
                gerçekleştirilmesi için makul önlemler
                alınır.
              </p>
            </>
          ),
        },

        {
          id: "politika-degisiklikleri",
          title: "Politikadaki Değişiklikler",
          content: (
            <>
              <p>
                İnternet sitesinin özellikleri, hizmet
                sağlayıcıları, kullanılan çerezler veya
                hukuki gereklilikler değiştiğinde bu Çerez
                Politikası güncellenebilir.
              </p>

              <p>
                Politikanın güncel sürümü, son güncelleme
                tarihiyle birlikte bu sayfada yayımlanır.
              </p>
            </>
          ),
        },

        {
          id: "iletisim",
          title: "İletişim",
          content: (
            <>
              <p>
                Çerezler, gizlilik tercihleriniz veya bu
                Çerez Politikası hakkındaki sorularınızı
                aşağıdaki iletişim bilgileri üzerinden
                iletebilirsiniz:
              </p>

              <p>
                <strong>EREXPO</strong>
                <br />
                Uluslararası Fuar Temsilciliği
                <br />
                Türkiye
                <br />
                <a href="mailto:info@erexpo.com">
                  info@erexpo.com
                </a>
              </p>
            </>
          ),
        },
      ],
    },
  };

  const pageContent =
    content[language] ?? content.en;

  return (
    <LegalPage
      eyebrow={pageContent.eyebrow}
      title={pageContent.title}
      description={pageContent.description}
      updatedLabel={pageContent.updatedLabel}
      updatedDate={pageContent.updatedDate}
      sections={pageContent.sections}
    />
  );
}

export default CookiePolicy;