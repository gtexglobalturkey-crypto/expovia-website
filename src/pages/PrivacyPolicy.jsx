import LegalPage from "../components/legal/LegalPage";

import { useTranslation } from "../hooks/useTranslation";

function PrivacyPolicy() {
  const { language } = useTranslation();

  const content = {
    en: {
      eyebrow: "Legal Information",
      title: "Privacy Policy",
      description:
        "This Privacy Policy explains how EREXPO collects, uses, stores and protects personal information when you visit our website or contact us.",
      updatedLabel: "Last updated",
      updatedDate: "July 20, 2026",

      sections: [
        {
          id: "introduction",
          title: "Introduction",
          content: (
            <>
              <p>
                EREXPO respects your privacy and is committed
                to protecting the personal information you
                share with us.
              </p>

              <p>
                This Privacy Policy applies to information
                collected through the EREXPO website,
                contact forms, email communications and
                exhibition-related enquiries.
              </p>

              <p>
                By using this website, you acknowledge that
                your personal information may be processed
                as described in this Privacy Policy and in
                accordance with applicable data protection
                legislation.
              </p>
            </>
          ),
        },

        {
          id: "data-controller",
          title: "Data Controller",
          content: (
            <>
              <p>
                For the purposes of applicable personal data
                protection legislation, EREXPO acts as the
                data controller for personal information
                collected through this website.
              </p>

              <p>
                Questions regarding the processing of your
                personal information may be directed to:
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

        {
          id: "information-collected",
          title: "Information We Collect",
          content: (
            <>
              <p>
                Depending on how you interact with EREXPO,
                we may collect the following categories of
                personal information:
              </p>

              <ul>
                <li>
                  Name, surname and professional title
                </li>

                <li>
                  Company name, industry and business
                  information
                </li>

                <li>
                  Email address and telephone number
                </li>

                <li>
                  Country, city and preferred language
                </li>

                <li>
                  Exhibition interests and participation
                  requirements
                </li>

                <li>
                  Information included in messages,
                  enquiries or documents sent to us
                </li>

                <li>
                  Technical information such as browser
                  type, device type, IP address and website
                  usage data
                </li>
              </ul>

              <p>
                We do not intentionally request sensitive
                personal information through the website.
                Please avoid submitting information that is
                not necessary for your enquiry.
              </p>
            </>
          ),
        },

        {
          id: "collection-methods",
          title: "How We Collect Information",
          content: (
            <>
              <p>
                Personal information may be collected
                directly from you when you:
              </p>

              <ul>
                <li>
                  Complete a contact or participation
                  enquiry form
                </li>

                <li>
                  Contact EREXPO by email, telephone or
                  another communication channel
                </li>

                <li>
                  Request information about an exhibition
                  or service
                </li>

                <li>
                  Subscribe to business communications,
                  where available
                </li>

                <li>
                  Communicate with us during an exhibition,
                  meeting or business event
                </li>
              </ul>

              <p>
                Limited technical information may also be
                collected automatically through cookies,
                analytics technologies and server logs.
              </p>
            </>
          ),
        },

        {
          id: "processing-purposes",
          title: "How We Use Information",
          content: (
            <>
              <p>
                We may process personal information for the
                following purposes:
              </p>

              <ul>
                <li>
                  Responding to enquiries and information
                  requests
                </li>

                <li>
                  Providing information about international
                  exhibitions and participation services
                </li>

                <li>
                  Evaluating exhibition participation
                  requirements
                </li>

                <li>
                  Managing communications with exhibitors,
                  organisers and business partners
                </li>

                <li>
                  Preparing proposals, participation
                  documents and service information
                </li>

                <li>
                  Improving our website, services and user
                  experience
                </li>

                <li>
                  Maintaining website security and
                  preventing misuse
                </li>

                <li>
                  Fulfilling legal, regulatory and
                  contractual obligations
                </li>
              </ul>
            </>
          ),
        },

        {
          id: "legal-basis",
          title: "Legal Basis for Processing",
          content: (
            <>
              <p>
                Depending on the nature of the interaction,
                personal information may be processed on one
                or more of the following legal grounds:
              </p>

              <ul>
                <li>
                  Processing is necessary to respond to your
                  request or take steps before entering into
                  a contract
                </li>

                <li>
                  Processing is necessary for the
                  performance of a contract
                </li>

                <li>
                  Processing is required to comply with a
                  legal obligation
                </li>

                <li>
                  Processing is necessary for the legitimate
                  business interests of EREXPO, provided
                  that your fundamental rights are not
                  overridden
                </li>

                <li>
                  You have provided explicit consent where
                  consent is legally required
                </li>
              </ul>

              <p>
                Where processing is based on consent, you
                may withdraw your consent at any time. The
                withdrawal of consent does not affect the
                lawfulness of processing carried out before
                withdrawal.
              </p>
            </>
          ),
        },

        {
          id: "data-sharing",
          title: "Sharing Personal Information",
          content: (
            <>
              <p>
                Personal information may be shared only when
                necessary and proportionate for the purposes
                described in this Privacy Policy.
              </p>

              <p>
                Relevant information may be shared with:
              </p>

              <ul>
                <li>
                  International exhibition organisers
                </li>

                <li>
                  Exhibition venues and authorised service
                  providers
                </li>

                <li>
                  Technology, hosting, email and website
                  service providers
                </li>

                <li>
                  Professional advisers, consultants and
                  authorised contractors
                </li>

                <li>
                  Public authorities where disclosure is
                  required by law
                </li>
              </ul>

              <p>
                EREXPO does not sell or rent personal
                information to third parties.
              </p>
            </>
          ),
        },

        {
          id: "international-transfers",
          title: "International Data Transfers",
          content: (
            <>
              <p>
                Due to the international nature of
                exhibition representation, certain personal
                information may need to be transferred to
                exhibition organisers, service providers or
                business partners located outside Türkiye.
              </p>

              <p>
                Where an international transfer is
                required, EREXPO takes reasonable measures
                to ensure that the transfer is carried out
                in accordance with applicable data
                protection legislation and appropriate
                safeguards.
              </p>
            </>
          ),
        },

        {
          id: "data-retention",
          title: "Data Retention",
          content: (
            <>
              <p>
                Personal information is retained only for as
                long as necessary to fulfil the purposes for
                which it was collected.
              </p>

              <p>
                Retention periods may vary depending on the
                nature of the communication, contractual
                relationship, legal obligations, potential
                disputes and legitimate business
                requirements.
              </p>

              <p>
                When personal information is no longer
                required, it may be securely deleted,
                destroyed or anonymised in accordance with
                applicable legislation and internal
                retention procedures.
              </p>
            </>
          ),
        },

        {
          id: "data-security",
          title: "Data Security",
          content: (
            <>
              <p>
                EREXPO applies reasonable administrative,
                organisational and technical safeguards to
                protect personal information against
                unauthorised access, disclosure, alteration,
                loss or misuse.
              </p>

              <p>
                However, no internet transmission or
                electronic storage system can be guaranteed
                to be completely secure. Users should also
                take reasonable precautions when sharing
                information online.
              </p>
            </>
          ),
        },

        {
          id: "cookies",
          title: "Cookies and Analytics",
          content: (
            <>
              <p>
                The EREXPO website may use cookies and
                similar technologies to provide essential
                website functionality, remember user
                preferences, analyse website performance and
                improve the visitor experience.
              </p>

              <p>
                More detailed information about cookies and
                available choices will be provided in the
                EREXPO Cookie Policy.
              </p>
            </>
          ),
        },

        {
          id: "your-rights",
          title: "Your Rights",
          content: (
            <>
              <p>
                Subject to applicable legislation, you may
                have the right to:
              </p>

              <ul>
                <li>
                  Learn whether your personal information is
                  being processed
                </li>

                <li>
                  Request information about the processing
                  of your personal information
                </li>

                <li>
                  Request access to your personal
                  information
                </li>

                <li>
                  Request correction of incomplete or
                  inaccurate information
                </li>

                <li>
                  Request deletion or destruction of
                  personal information where legally
                  applicable
                </li>

                <li>
                  Object to certain processing activities
                </li>

                <li>
                  Request restriction of processing where
                  legally applicable
                </li>

                <li>
                  Withdraw consent where processing is based
                  on consent
                </li>

                <li>
                  Submit a complaint to the relevant data
                  protection authority
                </li>
              </ul>

              <p>
                Requests may be subject to identity
                verification and any limitations permitted
                under applicable legislation.
              </p>
            </>
          ),
        },

        {
          id: "third-party-links",
          title: "Third-Party Websites",
          content: (
            <>
              <p>
                The EREXPO website may contain links to
                exhibition organisers, venues, service
                providers or other third-party websites.
              </p>

              <p>
                EREXPO is not responsible for the privacy
                practices, security or content of
                third-party websites. Visitors should
                review the privacy policies of those
                websites before providing personal
                information.
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
                EREXPO may update this Privacy Policy when
                necessary to reflect changes in legal
                requirements, business activities, website
                functions or data processing practices.
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
                For questions, requests or concerns
                regarding this Privacy Policy or the
                processing of your personal information,
                please contact:
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
      title: "Gizlilik Politikası",
      description:
        "Bu Gizlilik Politikası, EREXPO’nun internet sitemizi ziyaret ettiğinizde veya bizimle iletişime geçtiğinizde kişisel verileri nasıl topladığını, kullandığını, sakladığını ve koruduğunu açıklar.",
      updatedLabel: "Son güncelleme",
      updatedDate: "20 Temmuz 2026",

      sections: [
        {
          id: "giris",
          title: "Giriş",
          content: (
            <>
              <p>
                EREXPO, özel hayatın gizliliğine saygı
                gösterir ve bizimle paylaşılan kişisel
                verilerin korunmasına önem verir.
              </p>

              <p>
                Bu Gizlilik Politikası; EREXPO internet
                sitesi, iletişim formları, e-posta
                yazışmaları ve fuar katılım talepleri
                aracılığıyla elde edilen kişisel veriler
                için geçerlidir.
              </p>

              <p>
                İnternet sitesini kullanarak kişisel
                verilerinizin bu politikada açıklanan
                şekilde ve yürürlükteki veri koruma
                mevzuatına uygun olarak işlenebileceğini
                kabul etmiş olursunuz.
              </p>
            </>
          ),
        },

        {
          id: "veri-sorumlusu",
          title: "Veri Sorumlusu",
          content: (
            <>
              <p>
                Yürürlükteki kişisel verilerin korunması
                mevzuatı kapsamında, bu internet sitesi
                aracılığıyla toplanan kişisel veriler
                bakımından EREXPO veri sorumlusu olarak
                hareket eder.
              </p>

              <p>
                Kişisel verilerinizin işlenmesine ilişkin
                sorularınızı aşağıdaki iletişim bilgileri
                üzerinden iletebilirsiniz:
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

        {
          id: "toplanan-veriler",
          title: "Topladığımız Kişisel Veriler",
          content: (
            <>
              <p>
                EREXPO ile kurduğunuz iletişimin niteliğine
                bağlı olarak aşağıdaki kişisel veri
                kategorileri işlenebilir:
              </p>

              <ul>
                <li>Ad, soyad ve mesleki unvan</li>

                <li>
                  Şirket adı, sektör ve ticari bilgiler
                </li>

                <li>
                  E-posta adresi ve telefon numarası
                </li>

                <li>
                  Ülke, şehir ve tercih edilen dil
                </li>

                <li>
                  İlgilenilen fuarlar ve katılım ihtiyaçları
                </li>

                <li>
                  Mesaj, talep veya gönderilen belgelerde
                  yer alan bilgiler
                </li>

                <li>
                  Tarayıcı türü, cihaz türü, IP adresi ve
                  internet sitesi kullanım bilgileri
                </li>
              </ul>

              <p>
                İnternet sitesi üzerinden özel nitelikli
                kişisel veri talep edilmemektedir. Talebiniz
                için gerekli olmayan bilgileri paylaşmamanız
                önerilir.
              </p>
            </>
          ),
        },

        {
          id: "toplama-yontemleri",
          title: "Kişisel Verilerin Toplanma Yöntemleri",
          content: (
            <>
              <p>
                Kişisel verileriniz aşağıdaki durumlarda
                doğrudan sizden toplanabilir:
              </p>

              <ul>
                <li>
                  İletişim veya fuar katılım formu
                  doldurmanız
                </li>

                <li>
                  E-posta, telefon veya başka bir iletişim
                  kanalı üzerinden bize ulaşmanız
                </li>

                <li>
                  Bir fuar veya hizmet hakkında bilgi talep
                  etmeniz
                </li>

                <li>
                  Ticari iletişimlere kaydolmanız
                </li>

                <li>
                  Fuar, toplantı veya iş etkinliklerinde
                  bizimle iletişim kurmanız
                </li>
              </ul>

              <p>
                Sınırlı teknik veriler; çerezler, analiz
                teknolojileri ve sunucu kayıtları
                aracılığıyla otomatik olarak da
                toplanabilir.
              </p>
            </>
          ),
        },

        {
          id: "isleme-amaclari",
          title: "Kişisel Verilerin İşlenme Amaçları",
          content: (
            <>
              <p>
                Kişisel veriler aşağıdaki amaçlarla
                işlenebilir:
              </p>

              <ul>
                <li>
                  Bilgi ve iletişim taleplerinin
                  yanıtlanması
                </li>

                <li>
                  Uluslararası fuarlar ve katılım
                  hizmetleri hakkında bilgi sunulması
                </li>

                <li>
                  Fuar katılım ihtiyaçlarının
                  değerlendirilmesi
                </li>

                <li>
                  Katılımcılar, organizatörler ve iş
                  ortaklarıyla iletişimin yürütülmesi
                </li>

                <li>
                  Teklif, katılım belgesi ve hizmet
                  bilgilerinin hazırlanması
                </li>

                <li>
                  İnternet sitesi, hizmetler ve kullanıcı
                  deneyiminin geliştirilmesi
                </li>

                <li>
                  İnternet sitesi güvenliğinin sağlanması ve
                  kötüye kullanımın önlenmesi
                </li>

                <li>
                  Hukuki, düzenleyici ve sözleşmesel
                  yükümlülüklerin yerine getirilmesi
                </li>
              </ul>
            </>
          ),
        },

        {
          id: "hukuki-sebepler",
          title: "Kişisel Verilerin İşlenmesinin Hukuki Sebepleri",
          content: (
            <>
              <p>
                Kişisel veriler, iletişimin niteliğine göre
                aşağıdaki hukuki sebeplerden birine veya
                birkaçına dayanılarak işlenebilir:
              </p>

              <ul>
                <li>
                  Talebinizin karşılanması veya sözleşme
                  kurulmadan önce gerekli işlemlerin
                  gerçekleştirilmesi
                </li>

                <li>
                  Bir sözleşmenin kurulması veya ifası
                </li>

                <li>
                  Hukuki yükümlülüklerin yerine getirilmesi
                </li>

                <li>
                  Temel hak ve özgürlüklerinize zarar
                  vermemek kaydıyla EREXPO’nun meşru
                  menfaatleri
                </li>

                <li>
                  Kanunen gerekli olduğu durumlarda açık
                  rızanızın bulunması
                </li>
              </ul>

              <p>
                İşleme faaliyetinin açık rızaya dayanması
                durumunda rızanızı her zaman geri
                çekebilirsiniz. Rızanın geri çekilmesi,
                geri çekme işleminden önce gerçekleştirilen
                işlemlerin hukuka uygunluğunu etkilemez.
              </p>
            </>
          ),
        },

        {
          id: "veri-aktarimi",
          title: "Kişisel Verilerin Aktarılması",
          content: (
            <>
              <p>
                Kişisel veriler yalnızca bu politikada
                belirtilen amaçlar için gerekli ve ölçülü
                olduğu durumlarda paylaşılabilir.
              </p>

              <p>
                İlgili bilgiler aşağıdaki taraflarla
                paylaşılabilir:
              </p>

              <ul>
                <li>Uluslararası fuar organizatörleri</li>

                <li>
                  Fuar alanları ve yetkili hizmet
                  sağlayıcılar
                </li>

                <li>
                  Teknoloji, barındırma, e-posta ve internet
                  sitesi hizmet sağlayıcıları
                </li>

                <li>
                  Profesyonel danışmanlar ve yetkili hizmet
                  sağlayıcılar
                </li>

                <li>
                  Kanunen gerekli olması halinde kamu kurum
                  ve kuruluşları
                </li>
              </ul>

              <p>
                EREXPO, kişisel verileri üçüncü kişilere
                satmaz veya kiralamaz.
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
                Fuar temsilciliğinin uluslararası niteliği
                nedeniyle bazı kişisel verilerin Türkiye
                dışında bulunan fuar organizatörlerine,
                hizmet sağlayıcılara veya iş ortaklarına
                aktarılması gerekebilir.
              </p>

              <p>
                Yurt dışına aktarım yapılması gereken
                durumlarda, aktarımın yürürlükteki kişisel
                verilerin korunması mevzuatına ve uygun
                güvence mekanizmalarına uygun şekilde
                gerçekleştirilmesi için makul önlemler
                alınır.
              </p>
            </>
          ),
        },

        {
          id: "saklama-suresi",
          title: "Kişisel Verilerin Saklanması",
          content: (
            <>
              <p>
                Kişisel veriler yalnızca toplandıkları
                amaçların gerçekleştirilmesi için gerekli
                olan süre boyunca saklanır.
              </p>

              <p>
                Saklama süreleri; iletişimin niteliğine,
                sözleşmesel ilişkiye, hukuki yükümlülüklere,
                olası uyuşmazlıklara ve meşru ticari
                ihtiyaçlara göre değişebilir.
              </p>

              <p>
                Saklanmasını gerektiren bir neden kalmayan
                kişisel veriler, yürürlükteki mevzuata ve
                kurum içi prosedürlere uygun olarak silinir,
                yok edilir veya anonim hale getirilir.
              </p>
            </>
          ),
        },

        {
          id: "veri-guvenligi",
          title: "Veri Güvenliği",
          content: (
            <>
              <p>
                EREXPO; kişisel verileri yetkisiz erişim,
                açıklama, değiştirme, kayıp veya kötüye
                kullanıma karşı korumak amacıyla makul
                idari, organizasyonel ve teknik güvenlik
                önlemleri uygular.
              </p>

              <p>
                Bununla birlikte, internet üzerinden
                gerçekleştirilen hiçbir veri aktarımının
                veya elektronik saklama sisteminin tamamen
                güvenli olduğu garanti edilemez.
              </p>
            </>
          ),
        },

        {
          id: "cerezler",
          title: "Çerezler ve Analiz Teknolojileri",
          content: (
            <>
              <p>
                EREXPO internet sitesi; temel site
                işlevlerinin sağlanması, kullanıcı
                tercihlerinin hatırlanması, site
                performansının analiz edilmesi ve ziyaretçi
                deneyiminin geliştirilmesi amacıyla çerezler
                ve benzeri teknolojiler kullanabilir.
              </p>

              <p>
                Çerezlerin kullanımı ve tercihlerinizi nasıl
                yönetebileceğiniz hakkında ayrıntılı bilgi
                EREXPO Çerez Politikası’nda yer alacaktır.
              </p>
            </>
          ),
        },

        {
          id: "haklariniz",
          title: "Kişisel Verilerinize İlişkin Haklarınız",
          content: (
            <>
              <p>
                Yürürlükteki mevzuat kapsamında aşağıdaki
                haklara sahip olabilirsiniz:
              </p>

              <ul>
                <li>
                  Kişisel verilerinizin işlenip işlenmediğini
                  öğrenme
                </li>

                <li>
                  Kişisel verileriniz işlenmişse buna
                  ilişkin bilgi talep etme
                </li>

                <li>
                  Kişisel verilerinize erişim talep etme
                </li>

                <li>
                  Eksik veya yanlış işlenen kişisel
                  verilerin düzeltilmesini isteme
                </li>

                <li>
                  Kanuni şartların oluşması halinde kişisel
                  verilerin silinmesini veya yok edilmesini
                  isteme
                </li>

                <li>
                  Belirli işleme faaliyetlerine itiraz etme
                </li>

                <li>
                  Uygulanabilir durumlarda işlemenin
                  sınırlandırılmasını isteme
                </li>

                <li>
                  Açık rızaya dayanan işlemlerde rızanızı
                  geri çekme
                </li>

                <li>
                  İlgili veri koruma otoritesine şikâyette
                  bulunma
                </li>
              </ul>

              <p>
                Başvurular kimlik doğrulamasına ve
                yürürlükteki mevzuatta öngörülen
                sınırlamalara tabi olabilir.
              </p>
            </>
          ),
        },

        {
          id: "ucuncu-taraf-siteler",
          title: "Üçüncü Taraf İnternet Siteleri",
          content: (
            <>
              <p>
                EREXPO internet sitesi; fuar
                organizatörleri, fuar alanları, hizmet
                sağlayıcılar veya diğer üçüncü taraf
                internet sitelerine bağlantılar içerebilir.
              </p>

              <p>
                EREXPO, üçüncü taraf internet sitelerinin
                gizlilik uygulamalarından, güvenliğinden
                veya içeriğinden sorumlu değildir.
                Ziyaretçilerin kişisel veri paylaşmadan önce
                ilgili internet sitelerinin gizlilik
                politikalarını incelemesi önerilir.
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
                EREXPO; hukuki gerekliliklerde, ticari
                faaliyetlerde, internet sitesi
                özelliklerinde veya veri işleme
                uygulamalarında meydana gelen değişiklikleri
                yansıtmak amacıyla bu Gizlilik
                Politikası’nı güncelleyebilir.
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
                Bu Gizlilik Politikası veya kişisel
                verilerinizin işlenmesiyle ilgili soru,
                talep ve görüşlerinizi aşağıdaki iletişim
                bilgileri üzerinden iletebilirsiniz:
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

export default PrivacyPolicy;