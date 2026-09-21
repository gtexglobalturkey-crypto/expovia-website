import { useTranslation } from "../../../hooks/useTranslation";

import { SECUREX_TAGLINE } from "../../../data/securexSouthAfrica2027";

import floorImage from "../../../assets/exhibitions/securex/securex-2027-floor.jpg";

function SecurexOverview() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "About the Exhibition",
      title: "One Venue, Four Complementary Sectors",
      lead:
        `Securex South Africa 2027 brings security technology, occupational health and safety, facilities management and fire protection together at the Gallagher Convention Centre in Johannesburg. The organizer positions the co-located shows as “${SECUREX_TAGLINE}”.`,
      secondary:
        "Exhibitors present their solutions within one connected event, and visitors can reach all four sectors at the same venue between 1 and 3 June 2027.",
      imageAlt:
        "Exhibitors and visitors on the show floor of the Securex South Africa event platform",
      whyLabel: "Why It Matters",
      whyTitle: "Four Reasons to Consider Securex South Africa",

      whyParticipate: [
        {
          number: "01",
          title: "Four Sectors, One Venue",
          description:
            "Security, occupational safety, facilities management and fire protection are presented side by side at the Gallagher Convention Centre.",
        },
        {
          number: "02",
          title: "A Connected Ecosystem",
          description:
            "The four shows are positioned as one integrated platform, so related solutions and disciplines meet within the same event.",
        },
        {
          number: "03",
          title: "Access to the South African Market",
          description:
            "The event gives companies from Türkiye a platform to introduce their products and solutions to the South African market.",
        },
        {
          number: "04",
          title: "Technology & Solution Showcase",
          description:
            "Present CCTV, access control, fire protection, PPE and smart building technologies to an audience focused on protection and safety.",
        },
      ],
    },

    tr: {
      label: "Fuar Hakkında",
      title: "Tek Fuar, Birbirini Tamamlayan Dört Sektör",
      lead:
        `Securex South Africa 2027; güvenlik teknolojilerini, iş sağlığı ve güvenliğini, tesis yönetimini ve yangın güvenliğini Johannesburg'daki Gallagher Convention Centre'da bir araya getirir. Organizatör, aynı mekânda düzenlenen bu fuarları “${SECUREX_TAGLINE}” olarak konumlandırıyor.`,
      secondary:
        "Katılımcılar çözümlerini tek ve bağlantılı bir etkinlik içinde sunar; ziyaretçiler ise 1–3 Haziran 2027 tarihlerinde dört sektöre aynı mekânda ulaşabilir.",
      imageAlt:
        "Securex South Africa etkinlik platformunun fuar alanında katılımcılar ve ziyaretçiler",
      whyLabel: "Neden Önemli?",
      whyTitle: "Securex South Africa'yı Değerlendirmek İçin Dört Neden",

      whyParticipate: [
        {
          number: "01",
          title: "Dört Sektör, Tek Fuar",
          description:
            "Güvenlik, iş güvenliği, tesis yönetimi ve yangın güvenliği, Gallagher Convention Centre'da yan yana sunulur.",
        },
        {
          number: "02",
          title: "Birbirine Bağlı Bir Ekosistem",
          description:
            "Dört fuar tek bir bütünleşik platform olarak konumlandırılır; birbiriyle ilişkili çözümler ve disiplinler aynı etkinlikte buluşur.",
        },
        {
          number: "03",
          title: "Güney Afrika Pazarına Erişim",
          description:
            "Etkinlik, Türkiye'den firmalara ürün ve çözümlerini Güney Afrika pazarına tanıtabilecekleri bir platform sunar.",
        },
        {
          number: "04",
          title: "Teknoloji ve Çözüm Vitrini",
          description:
            "CCTV, geçiş kontrol, yangın güvenliği, KKD ve akıllı bina teknolojilerinizi koruma ve güvenlik odaklı bir kitleye sunun.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section
      id="overview"
      className="exhibition-overview section-spacing"
    >
      <div className="container">
        <div className="overview-layout">
          <div className="overview-intro">
            <p className="section-label">
              {t.label}
            </p>

            <h2>{t.title}</h2>

            <p className="overview-lead">
              {t.lead}
            </p>

            <p className="overview-secondary">
              {t.secondary}
            </p>

            <figure className="securex-overview-figure">
              <img
                src={floorImage}
                alt={t.imageAlt}
                width="722"
                height="363"
                loading="lazy"
              />
            </figure>
          </div>

          <div className="overview-content-column">
            <div className="overview-why-header">
              <p className="section-label">
                {t.whyLabel}
              </p>

              <h3>{t.whyTitle}</h3>
            </div>

            <div className="overview-story">
              {t.whyParticipate.map((item) => (
                <article
                  key={item.number}
                  className="overview-card"
                >
                  <span className="overview-card-number">
                    {item.number}
                  </span>

                  <div>
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecurexOverview;
