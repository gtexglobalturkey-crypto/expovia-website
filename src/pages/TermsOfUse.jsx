import LegalPage from "../components/legal/LegalPage";

import { useTranslation } from "../hooks/useTranslation";

import { CONTACT_EMAIL } from "../config/site";

function TermsOfUse() {
  const { language } = useTranslation();

  const content = {
    en: {
      eyebrow: "Legal Information",
      title: "Terms of Use",
      description:
        "These Terms of Use govern access to and use of the EXPOVIA website, content, services and exhibition-related information.",
      updatedLabel: "Last updated",
      updatedDate: "July 20, 2026",

      sections: [
        {
          id: "acceptance",
          title: "Acceptance of Terms",
          content: (
            <>
              <p>
                By accessing or using the EXPOVIA website,
                you agree to comply with these Terms of Use.
              </p>

              <p>
                If you do not agree with these terms, you
                should discontinue use of the website.
              </p>
            </>
          ),
        },

        {
          id: "about-expovia",
          title: "About EXPOVIA",
          content: (
            <>
              <p>
                EXPOVIA provides international exhibition
                representation, business development and
                participation support services.
              </p>

              <p>
                Information published on the website is
                intended to introduce exhibitions,
                industries, services and participation
                opportunities.
              </p>
            </>
          ),
        },

        {
          id: "website-use",
          title: "Permitted Use",
          content: (
            <>
              <p>
                You may use the website only for lawful,
                personal and legitimate business purposes.
              </p>

              <p>
                You must not:
              </p>

              <ul>
                <li>
                  Use the website in violation of any law
                  or regulation
                </li>

                <li>
                  Attempt to gain unauthorised access to
                  systems, accounts or data
                </li>

                <li>
                  Interfere with website security,
                  availability or performance
                </li>

                <li>
                  Introduce viruses, malicious code or
                  harmful technologies
                </li>

                <li>
                  Copy, scrape or systematically extract
                  website content without authorisation
                </li>

                <li>
                  Use the website in a misleading,
                  fraudulent or abusive manner
                </li>
              </ul>
            </>
          ),
        },

        {
          id: "information-accuracy",
          title: "Accuracy of Information",
          content: (
            <>
              <p>
                EXPOVIA aims to keep website information
                accurate, clear and current.
              </p>

              <p>
                Exhibition dates, locations, organisers,
                prices, participation conditions and service
                details may change without notice.
              </p>

              <p>
                Visitors should obtain written confirmation
                before making commercial, travel,
                contractual or financial decisions.
              </p>
            </>
          ),
        },

        {
          id: "no-offer",
          title: "No Binding Offer",
          content: (
            <>
              <p>
                Content published on the website does not
                constitute a binding commercial offer,
                contract, guarantee or commitment unless
                expressly confirmed in writing by EXPOVIA.
              </p>

              <p>
                Participation, pricing and service
                arrangements become binding only when
                confirmed through the applicable written
                agreement or authorised documentation.
              </p>
            </>
          ),
        },

        {
          id: "third-party-services",
          title: "Third-Party Services and Organisers",
          content: (
            <>
              <p>
                Certain exhibitions, venues, logistics
                services, accommodation services and related
                services may be provided by independent
                third parties.
              </p>

              <p>
                EXPOVIA is not responsible for acts,
                omissions, availability, pricing or policies
                of independent third-party providers except
                where liability cannot be excluded by law.
              </p>
            </>
          ),
        },

        {
          id: "external-links",
          title: "External Links",
          content: (
            <>
              <p>
                The website may contain links to organiser,
                venue, partner or other third-party
                websites.
              </p>

              <p>
                These links are provided for convenience.
                EXPOVIA does not control and is not
                responsible for third-party content,
                security, availability or privacy
                practices.
              </p>
            </>
          ),
        },

        {
          id: "intellectual-property",
          title: "Intellectual Property",
          content: (
            <>
              <p>
                Unless otherwise stated, the EXPOVIA name,
                logo, website design, text, graphics,
                layout, documents and original content are
                owned by or licensed to EXPOVIA.
              </p>

              <p>
                Content may not be reproduced, modified,
                distributed, published, sold or commercially
                exploited without prior written permission.
              </p>

              <p>
                Limited copying for personal reference is
                permitted provided that ownership notices
                remain intact.
              </p>
            </>
          ),
        },

        {
          id: "trademarks",
          title: "Trademarks",
          content: (
            <>
              <p>
                Third-party company names, exhibition names,
                event names, logos and trademarks belong to
                their respective owners.
              </p>

              <p>
                Their appearance on the website does not
                imply ownership, sponsorship or endorsement
                beyond the relevant business or
                representation relationship.
              </p>
            </>
          ),
        },

        {
          id: "user-submissions",
          title: "Information Submitted by Users",
          content: (
            <>
              <p>
                You are responsible for ensuring that
                information submitted through forms, email
                or other communication channels is accurate,
                lawful and does not infringe third-party
                rights.
              </p>

              <p>
                You must not submit confidential,
                misleading, unlawful, harmful or unnecessary
                sensitive information.
              </p>
            </>
          ),
        },

        {
          id: "privacy",
          title: "Privacy and Personal Data",
          content: (
            <>
              <p>
                Personal information collected through the
                website is processed in accordance with the
                EXPOVIA Privacy Policy and Cookie Policy.
              </p>

              <p>
                By using forms or communication channels,
                you acknowledge that information may be
                processed as necessary to respond to your
                request.
              </p>
            </>
          ),
        },

        {
          id: "availability",
          title: "Website Availability",
          content: (
            <>
              <p>
                EXPOVIA does not guarantee that the website
                will always be uninterrupted, error-free or
                available.
              </p>

              <p>
                Access may be suspended or restricted for
                maintenance, security, technical or
                operational reasons.
              </p>
            </>
          ),
        },

        {
          id: "disclaimer",
          title: "Disclaimer",
          content: (
            <>
              <p>
                The website and its content are provided on
                an informational basis and, to the maximum
                extent permitted by law, without warranties
                of any kind.
              </p>

              <p>
                EXPOVIA does not guarantee specific business
                results, sales outcomes, visitor numbers,
                commercial opportunities or exhibition
                performance.
              </p>
            </>
          ),
        },

        {
          id: "limitation-liability",
          title: "Limitation of Liability",
          content: (
            <>
              <p>
                To the maximum extent permitted by law,
                EXPOVIA will not be liable for indirect,
                incidental, consequential or special loss
                arising from use of or reliance on the
                website.
              </p>

              <p>
                Nothing in these terms excludes liability
                that cannot legally be excluded or limited.
              </p>
            </>
          ),
        },

        {
          id: "indemnity",
          title: "User Responsibility",
          content: (
            <>
              <p>
                You are responsible for your use of the
                website and for decisions made based on
                website content.
              </p>

              <p>
                You may be responsible for losses caused by
                unlawful use, misuse, security interference
                or infringement of third-party rights.
              </p>
            </>
          ),
        },

        {
          id: "changes",
          title: "Changes to the Website and Terms",
          content: (
            <>
              <p>
                EXPOVIA may update website content, features,
                services or these Terms of Use when
                necessary.
              </p>

              <p>
                Updated terms become effective when
                published on this page unless another date
                is expressly stated.
              </p>
            </>
          ),
        },

        {
          id: "termination",
          title: "Restriction or Termination of Access",
          content: (
            <>
              <p>
                EXPOVIA may restrict or terminate access to
                the website where misuse, security risk,
                unlawful conduct or violation of these terms
                is identified.
              </p>
            </>
          ),
        },

        {
          id: "governing-law",
          title: "Governing Law",
          content: (
            <>
              <p>
                These Terms of Use are governed by the laws
                of the Republic of Türkiye.
              </p>

              <p>
                Disputes will be submitted to the competent
                courts and enforcement offices determined
                under applicable law.
              </p>
            </>
          ),
        },

        {
          id: "severability",
          title: "Severability",
          content: (
            <>
              <p>
                If any provision of these terms is found to
                be invalid or unenforceable, the remaining
                provisions will continue in effect.
              </p>
            </>
          ),
        },

        {
          id: "contact",
          title: "Contact",
          content: (
            <>
              <p>
                For questions regarding these Terms of Use,
                please contact:
              </p>

              <p>
                <strong>EXPOVIA</strong>
                <br />
                International Exhibition Representation
                <br />
                Türkiye
                <br />
                <a
                  href={
                    CONTACT_EMAIL
                      ? `mailto:${CONTACT_EMAIL}`
                      : undefined
                  }
                >
                  {CONTACT_EMAIL || "Email address pending"}
                </a>
              </p>
            </>
          ),
        },
      ],
    },

    tr: {
      eyebrow: "Yasal Bilgilendirme",
      title: "Kullanım Koşulları",
      description:
        "Bu Kullanım Koşulları, EXPOVIA internet sitesine, içeriklerine, hizmetlerine ve fuar bilgilerine erişimi ve bunların kullanımını düzenler.",
      updatedLabel: "Son güncelleme",
      updatedDate: "20 Temmuz 2026",

      sections: [
        {
          id: "kosullarin-kabulu",
          title: "Koşulların Kabulü",
          content: (
            <>
              <p>
                EXPOVIA internet sitesine erişerek veya siteyi
                kullanarak bu Kullanım Koşulları’na uymayı
                kabul etmiş olursunuz.
              </p>

              <p>
                Bu koşulları kabul etmiyorsanız internet
                sitesini kullanmayı bırakmanız gerekir.
              </p>
            </>
          ),
        },

        {
          id: "expovia-hakkinda",
          title: "EXPOVIA Hakkında",
          content: (
            <>
              <p>
                EXPOVIA; uluslararası fuar temsilciliği, iş
                geliştirme ve fuar katılım destek hizmetleri
                sunar.
              </p>

              <p>
                İnternet sitesindeki bilgiler; fuarları,
                sektörleri, hizmetleri ve katılım
                fırsatlarını tanıtmak amacıyla yayımlanır.
              </p>
            </>
          ),
        },

        {
          id: "izin-verilen-kullanim",
          title: "İzin Verilen Kullanım",
          content: (
            <>
              <p>
                İnternet sitesini yalnızca hukuka uygun,
                kişisel ve meşru ticari amaçlarla
                kullanabilirsiniz.
              </p>

              <p>
                Aşağıdaki faaliyetlerde bulunamazsınız:
              </p>

              <ul>
                <li>
                  İnternet sitesini herhangi bir kanun veya
                  düzenlemeye aykırı şekilde kullanmak
                </li>

                <li>
                  Sistemlere, hesaplara veya verilere
                  yetkisiz erişmeye çalışmak
                </li>

                <li>
                  Site güvenliğine, erişilebilirliğine veya
                  performansına müdahale etmek
                </li>

                <li>
                  Virüs, zararlı kod veya zararlı teknoloji
                  yüklemek
                </li>

                <li>
                  İzin almadan site içeriğini sistematik
                  biçimde kopyalamak veya toplamak
                </li>

                <li>
                  Siteyi yanıltıcı, hileli veya kötüye
                  kullanıma dayalı şekilde kullanmak
                </li>
              </ul>
            </>
          ),
        },

        {
          id: "bilgilerin-dogrulugu",
          title: "Bilgilerin Doğruluğu",
          content: (
            <>
              <p>
                EXPOVIA, internet sitesindeki bilgileri doğru,
                açık ve güncel tutmaya çalışır.
              </p>

              <p>
                Fuar tarihleri, konumları, organizatörleri,
                fiyatları, katılım koşulları ve hizmet
                detayları önceden bildirim yapılmaksızın
                değişebilir.
              </p>

              <p>
                Ticari, seyahat, sözleşmesel veya mali karar
                verilmeden önce yazılı teyit alınmalıdır.
              </p>
            </>
          ),
        },

        {
          id: "baglayici-teklif-degildir",
          title: "Bağlayıcı Teklif Niteliği Taşımaması",
          content: (
            <>
              <p>
                İnternet sitesinde yayımlanan içerikler,
                EXPOVIA tarafından yazılı olarak açıkça teyit
                edilmedikçe bağlayıcı ticari teklif,
                sözleşme, garanti veya taahhüt oluşturmaz.
              </p>

              <p>
                Katılım, fiyatlandırma ve hizmet düzenlemeleri
                yalnızca ilgili yazılı sözleşme veya yetkili
                belgelerle teyit edildiğinde bağlayıcı hale
                gelir.
              </p>
            </>
          ),
        },

        {
          id: "ucuncu-taraf-hizmetleri",
          title: "Üçüncü Taraf Hizmetleri ve Organizatörler",
          content: (
            <>
              <p>
                Bazı fuarlar, fuar alanları, lojistik,
                konaklama ve bağlantılı hizmetler bağımsız
                üçüncü taraflarca sunulabilir.
              </p>

              <p>
                Kanunen sorumluluğun sınırlandırılamadığı
                durumlar dışında EXPOVIA, bağımsız üçüncü
                tarafların işlem, ihmal, erişilebilirlik,
                fiyatlandırma veya politikalarından sorumlu
                değildir.
              </p>
            </>
          ),
        },

        {
          id: "harici-baglantilar",
          title: "Harici Bağlantılar",
          content: (
            <>
              <p>
                İnternet sitesi; organizatör, fuar alanı, iş
                ortağı veya diğer üçüncü taraf internet
                sitelerine bağlantılar içerebilir.
              </p>

              <p>
                Bu bağlantılar kolaylık amacıyla sunulur.
                EXPOVIA, üçüncü taraf içeriklerini,
                güvenliğini, erişilebilirliğini veya gizlilik
                uygulamalarını kontrol etmez ve bunlardan
                sorumlu değildir.
              </p>
            </>
          ),
        },

        {
          id: "fikri-mulkiyet",
          title: "Fikri Mülkiyet Hakları",
          content: (
            <>
              <p>
                Aksi belirtilmedikçe EXPOVIA adı, logosu,
                internet sitesi tasarımı, metinleri,
                grafikleri, düzeni, belgeleri ve özgün
                içerikleri EXPOVIA’ya aittir veya lisanslı
                olarak kullanılmaktadır.
              </p>

              <p>
                İçerikler önceden yazılı izin alınmadan
                çoğaltılamaz, değiştirilemez, dağıtılamaz,
                yayımlanamaz, satılamaz veya ticari olarak
                kullanılamaz.
              </p>

              <p>
                Mülkiyet bildirimleri korunmak şartıyla
                kişisel başvuru amacıyla sınırlı kopyalamaya
                izin verilebilir.
              </p>
            </>
          ),
        },

        {
          id: "markalar",
          title: "Markalar",
          content: (
            <>
              <p>
                Üçüncü taraf şirket, fuar, etkinlik adları,
                logoları ve markaları ilgili hak sahiplerine
                aittir.
              </p>

              <p>
                Bunların internet sitesinde yer alması,
                ilgili iş veya temsil ilişkisi dışında
                mülkiyet, sponsorluk veya onay anlamına
                gelmez.
              </p>
            </>
          ),
        },

        {
          id: "kullanici-bildirimleri",
          title: "Kullanıcılar Tarafından Gönderilen Bilgiler",
          content: (
            <>
              <p>
                Form, e-posta veya diğer iletişim kanalları
                üzerinden gönderdiğiniz bilgilerin doğru,
                hukuka uygun ve üçüncü taraf haklarını ihlal
                etmeyen nitelikte olmasından siz
                sorumlusunuz.
              </p>

              <p>
                Gizli, yanıltıcı, hukuka aykırı, zararlı
                veya gerekli olmayan hassas bilgileri
                göndermemelisiniz.
              </p>
            </>
          ),
        },

        {
          id: "gizlilik",
          title: "Gizlilik ve Kişisel Veriler",
          content: (
            <>
              <p>
                İnternet sitesi üzerinden toplanan kişisel
                veriler, EXPOVIA Gizlilik Politikası ve Çerez
                Politikası kapsamında işlenir.
              </p>

              <p>
                Formları veya iletişim kanallarını
                kullanarak, talebinizin yanıtlanması için
                gerekli bilgilerin işlenebileceğini kabul
                etmiş olursunuz.
              </p>
            </>
          ),
        },

        {
          id: "site-erisim",
          title: "İnternet Sitesinin Erişilebilirliği",
          content: (
            <>
              <p>
                EXPOVIA, internet sitesinin her zaman
                kesintisiz, hatasız veya erişilebilir
                olacağını garanti etmez.
              </p>

              <p>
                Bakım, güvenlik, teknik veya operasyonel
                nedenlerle erişim geçici olarak
                durdurulabilir veya sınırlandırılabilir.
              </p>
            </>
          ),
        },

        {
          id: "sorumluluk-reddi",
          title: "Sorumluluk Reddi",
          content: (
            <>
              <p>
                İnternet sitesi ve içerikleri bilgilendirme
                amacıyla sunulur ve kanunun izin verdiği en
                geniş ölçüde herhangi bir garanti
                verilmez.
              </p>

              <p>
                EXPOVIA; belirli bir ticari sonuç, satış,
                ziyaretçi sayısı, iş fırsatı veya fuar
                performansı garanti etmez.
              </p>
            </>
          ),
        },

        {
          id: "sorumlulugun-sinirlandirilmasi",
          title: "Sorumluluğun Sınırlandırılması",
          content: (
            <>
              <p>
                Kanunun izin verdiği en geniş ölçüde EXPOVIA,
                internet sitesinin kullanılması veya
                içeriklere güvenilmesi sonucunda doğan
                dolaylı, arızi, sonuç niteliğindeki veya özel
                zararlardan sorumlu değildir.
              </p>

              <p>
                Bu koşullardaki hiçbir hüküm, kanunen
                kaldırılamayan veya sınırlandırılamayan
                sorumluluğu ortadan kaldırmaz.
              </p>
            </>
          ),
        },

        {
          id: "kullanici-sorumlulugu",
          title: "Kullanıcı Sorumluluğu",
          content: (
            <>
              <p>
                İnternet sitesini kullanımınızdan ve site
                içeriğine dayanarak aldığınız kararlardan siz
                sorumlusunuz.
              </p>

              <p>
                Hukuka aykırı kullanım, kötüye kullanım,
                güvenliğe müdahale veya üçüncü taraf
                haklarının ihlalinden doğan zararlardan
                sorumlu tutulabilirsiniz.
              </p>
            </>
          ),
        },

        {
          id: "degisiklikler",
          title: "Site ve Koşullardaki Değişiklikler",
          content: (
            <>
              <p>
                EXPOVIA, gerekli gördüğünde site içeriğini,
                özelliklerini, hizmetlerini veya bu Kullanım
                Koşulları’nı güncelleyebilir.
              </p>

              <p>
                Aksi açıkça belirtilmedikçe güncel koşullar
                bu sayfada yayımlandığı tarihte yürürlüğe
                girer.
              </p>
            </>
          ),
        },

        {
          id: "erisimin-sonlandirilmasi",
          title: "Erişimin Sınırlandırılması veya Sonlandırılması",
          content: (
            <>
              <p>
                Kötüye kullanım, güvenlik riski, hukuka
                aykırı davranış veya bu koşulların ihlali
                halinde EXPOVIA internet sitesine erişimi
                sınırlandırabilir veya sonlandırabilir.
              </p>
            </>
          ),
        },

        {
          id: "uygulanacak-hukuk",
          title: "Uygulanacak Hukuk",
          content: (
            <>
              <p>
                Bu Kullanım Koşulları Türkiye Cumhuriyeti
                hukukuna tabidir.
              </p>

              <p>
                Uyuşmazlıklar, yürürlükteki mevzuat uyarınca
                belirlenecek yetkili mahkeme ve icra
                dairelerine sunulur.
              </p>
            </>
          ),
        },

        {
          id: "bolunebilirlik",
          title: "Bölünebilirlik",
          content: (
            <>
              <p>
                Bu koşulların herhangi bir hükmünün geçersiz
                veya uygulanamaz olması halinde kalan
                hükümler yürürlükte kalmaya devam eder.
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
                Bu Kullanım Koşulları hakkındaki sorularınızı
                aşağıdaki iletişim bilgileri üzerinden
                iletebilirsiniz:
              </p>

              <p>
                <strong>EXPOVIA</strong>
                <br />
                Uluslararası Fuar Temsilciliği
                <br />
                Türkiye
                <br />
                <a
                  href={
                    CONTACT_EMAIL
                      ? `mailto:${CONTACT_EMAIL}`
                      : undefined
                  }
                >
                  {CONTACT_EMAIL || "Email address pending"}
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

export default TermsOfUse;