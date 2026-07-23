import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionProfiles() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Business Network",
      title: "Meet the Right People",
      description:
        "Mining Türkiye brings together qualified buyers and leading industry suppliers, creating an ideal environment for long-term business development.",

      buyerBadge: "BUYERS",
      buyerTitle: "Visitor Profile",
      buyerDescription:
        "Decision makers actively looking for new products, technologies and business partners.",

      supplierBadge: "SUPPLIERS",
      supplierTitle: "Exhibitor Profile",
      supplierDescription:
        "International manufacturers and solution providers presenting the latest mining technologies.",

      visitorProfile: [
        "Mining companies",
        "Quarries & mine operators",
        "Engineering companies",
        "Government institutions",
        "Investors & project developers",
        "Distributors & importers",
        "Procurement managers",
        "International buyers",
      ],

      exhibitorProfile: [
        "Mining machinery manufacturers",
        "Heavy equipment suppliers",
        "Technology providers",
        "Automation companies",
        "Safety equipment manufacturers",
        "Processing system suppliers",
        "Industrial solution providers",
        "Engineering consultants",
      ],
    },

    tr: {
      label: "İş Ağı",
      title: "Doğru Kişilerle Tanışın",
      description:
        "Mining Türkiye, nitelikli ziyaretçileri ve sektörün önde gelen tedarikçilerini bir araya getirerek uzun vadeli iş birlikleri için ideal bir ortam oluşturur.",

      buyerBadge: "ZİYARETÇİLER",
      buyerTitle: "Ziyaretçi Profili",
      buyerDescription:
        "Yeni ürünler, teknolojiler ve iş ortakları arayan karar vericiler.",

      supplierBadge: "KATILIMCILAR",
      supplierTitle: "Katılımcı Profili",
      supplierDescription:
        "En yeni madencilik teknolojilerini sunan uluslararası üreticiler ve çözüm sağlayıcıları.",

      visitorProfile: [
        "Madencilik şirketleri",
        "Maden işletmeleri",
        "Mühendislik firmaları",
        "Kamu kurumları",
        "Yatırımcılar ve proje geliştiricileri",
        "Distribütörler ve ithalatçılar",
        "Satın alma yöneticileri",
        "Uluslararası alıcılar",
      ],

      exhibitorProfile: [
        "Madencilik makinesi üreticileri",
        "Ağır ekipman tedarikçileri",
        "Teknoloji sağlayıcıları",
        "Otomasyon firmaları",
        "İş güvenliği ekipmanı üreticileri",
        "Cevher işleme sistemi üreticileri",
        "Endüstriyel çözüm sağlayıcıları",
        "Mühendislik danışmanları",
      ],
    },
  };

  const t = content[language] ?? content.en;

  return (
    <section className="exhibition-profiles section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="profiles-grid">
          <article className="profile-card">
            <div className="profile-header">
              <span className="profile-badge">
                {t.buyerBadge}
              </span>

              <h3>{t.buyerTitle}</h3>

              <p>{t.buyerDescription}</p>
            </div>

            <ul>
              {t.visitorProfile.map((item) => (
                <li key={item}>
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="profile-card">
            <div className="profile-header">
              <span className="profile-badge">
                {t.supplierBadge}
              </span>

              <h3>{t.supplierTitle}</h3>

              <p>{t.supplierDescription}</p>
            </div>

            <ul>
              {t.exhibitorProfile.map((item) => (
                <li key={item}>
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ExhibitionProfiles;