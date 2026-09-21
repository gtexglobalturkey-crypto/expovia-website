import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

import wampexImage from "../../assets/exhibitions/wampex-01.png";
import securexImage from "../../assets/exhibitions/securex/securex-2027-hero.webp";

import { SECUREX_PATH } from "../../data/securexSouthAfrica2027";

function FeaturedExhibitions() {
  const { language } = useTranslation();

  const content = {
    en: {
      description:
        "The international exhibition VIAFA is currently representing for participation from Türkiye.",
      opportunityDescription:
        "An additional exhibition opportunity for companies from Türkiye. Contact VIAFA to discuss participation.",
      country: "Country",
      city: "City",
      date: "Date",
      organizer: "Organizer",
      button: "View Exhibition",

      exhibitions: [
        {
          id: 1,
          path: "/exhibition-detail",
          representationConfirmed: true,
          image: wampexImage,
          name: "WAMPEX West Africa 2027",
          country: "Ghana",
          city: "Accra",
          date: "2–4 June 2027",
          industry: "Mining & Power",
          organizer: "DMG Events",
          description:
            "The region's largest mining and power exhibition, connecting equipment manufacturers, technology providers and mining professionals across West Africa.",
        },
        {
          id: 2,
          path: SECUREX_PATH,
          image: securexImage,
          imageLockup: true,
          imageAlt:
            "Securex South Africa 2027 integrated exhibition platform in Johannesburg: Securex South Africa, A-OSH Expo, Facilities Management Expo and Firexpo",
          name: "Securex South Africa 2027",
          country: "South Africa",
          city: "Johannesburg",
          date: "1–3 June 2027",
          industry: "Security & Safety",
          organizer: "Montgomery Group Africa",
          description:
            "Four co-located shows in one venue, covering security technology, occupational health & safety, facilities management and fire protection.",
        },
      ],
    },

    tr: {
      description:
        "VIAFA'nın Türkiye'den katılım için temsilciliğini yürüttüğü uluslararası fuar.",
      opportunityDescription:
        "Türkiye'den firmalar için ek bir fuar fırsatı. Katılım için VIAFA ile iletişime geçebilirsiniz.",

      country: "Ülke",
      city: "Şehir",
      date: "Tarih",
      organizer: "Organizatör",
      button: "Fuarı İncele",

      exhibitions: [
        {
          id: 1,
          path: "/exhibition-detail",
          representationConfirmed: true,
          image: wampexImage,
          name: "WAMPEX West Africa 2027",
          country: "Gana",
          city: "Accra",
          date: "2–4 Haziran 2027",
          industry: "Madencilik & Enerji",
          organizer: "DMG Events",
          description:
            "Batı Afrika'nın en büyük madencilik ve enerji fuarı; ekipman üreticilerini, teknoloji sağlayıcılarını ve sektör profesyonellerini bir araya getiriyor.",
        },
        {
          id: 2,
          path: SECUREX_PATH,
          image: securexImage,
          imageLockup: true,
          imageAlt:
            "Johannesburg'da düzenlenen Securex South Africa 2027 entegre fuar platformu: Securex South Africa, A-OSH Expo, Facilities Management Expo ve Firexpo",
          name: "Securex South Africa 2027",
          country: "Güney Afrika",
          city: "Johannesburg",
          date: "1–3 Haziran 2027",
          industry: "Güvenlik & İSG",
          organizer: "Montgomery Group Africa",
          description:
            "Güvenlik teknolojileri, iş sağlığı ve güvenliği, tesis yönetimi ve yangın güvenliği alanlarını aynı mekânda buluşturan dört fuar.",
        },
      ],
    },
  };

  const t = content[language];

  const renderCard = (exhibition) => (
    <article
      key={exhibition.id}
      className="exhibition-card featured"
    >
      <div
        className={`exhibition-image${
          exhibition.imageLockup ? " exhibition-image--lockup" : ""
        }`}
      >
        <img
          src={exhibition.image}
          alt={exhibition.imageAlt ?? exhibition.name}
        />

        <span className="industry-tag">
          {exhibition.industry}
        </span>
      </div>

      <div className="exhibition-content">
        <h3>{exhibition.name}</h3>

        <p className="exhibition-description">
          {exhibition.description}
        </p>

        <ul className="exhibition-meta">
          <li>
            <strong>{t.country}</strong>
            <span>{exhibition.country}</span>
          </li>

          <li>
            <strong>{t.city}</strong>
            <span>{exhibition.city}</span>
          </li>

          <li>
            <strong>{t.date}</strong>
            <span>{exhibition.date}</span>
          </li>

          <li>
            <strong>{t.organizer}</strong>
            <span>{exhibition.organizer}</span>
          </li>
        </ul>

        <Link
          to={exhibition.path}
          className="view-exhibition-btn"
        >
          {t.button}
        </Link>
      </div>
    </article>
  );

  return (
    <section className="featured-exhibitions section-spacing">
      <div className="container">
        <div className="featured-exhibitions-grid featured-exhibitions-grid--groups">
          {t.exhibitions.map((exhibition) => (
            <div
              key={exhibition.id}
              className="featured-exhibitions-group"
            >
              <p className="featured-exhibitions-intro">
                {exhibition.representationConfirmed
                  ? t.description
                  : t.opportunityDescription}
              </p>

              {renderCard(exhibition)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedExhibitions;
