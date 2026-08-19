import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

import mining01 from "../../assets/exhibitions/mining-01.png";
import construction01 from "../../assets/exhibitions/construction-01.png";

function FeaturedExhibitions() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Featured",
      title: "Featured Exhibitions",
      description:
        "Hand-picked international exhibitions recommended by VIAFA for companies looking to expand into global markets.",
      country: "Country",
      city: "City",
      date: "Date",
      organizer: "Organizer",
      button: "View Exhibition",

      exhibitions: [
        {
          id: 1,
          image: mining01,
          name: "Mining Türkiye 2027",
          country: "Türkiye",
          city: "Istanbul",
          date: "12–15 May 2027",
          industry: "Mining",
          organizer: "HKF Trade Fairs",
          description:
            "One of the leading mining exhibitions connecting equipment manufacturers, technology providers and mining professionals.",
        },
        {
          id: 2,
          image: construction01,
          name: "Big 5 Global",
          country: "United Arab Emirates",
          city: "Dubai",
          date: "24–27 November 2026",
          industry: "Construction",
          organizer: "dmg events",
          description:
            "The region's flagship construction exhibition bringing together global suppliers, contractors and decision makers.",
        },
      ],
    },

    tr: {
      label: "Öne Çıkanlar",
      title: "Öne Çıkan Fuarlar",
      description:
        "VIAFA tarafından uluslararası pazarlara açılmak isteyen firmalar için özenle seçilen fuarlar.",

      country: "Ülke",
      city: "Şehir",
      date: "Tarih",
      organizer: "Organizatör",
      button: "Fuarı İncele",

      exhibitions: [
        {
          id: 1,
          image: mining01,
          name: "Mining Türkiye 2027",
          country: "Türkiye",
          city: "İstanbul",
          date: "12–15 Mayıs 2027",
          industry: "Madencilik",
          organizer: "HKF Trade Fairs",
          description:
            "Madencilik ekipmanları üreticilerini, teknoloji sağlayıcılarını ve sektör profesyonellerini buluşturan önde gelen uluslararası fuarlardan biri.",
        },
        {
          id: 2,
          image: construction01,
          name: "Big 5 Global",
          country: "Birleşik Arap Emirlikleri",
          city: "Dubai",
          date: "24–27 Kasım 2026",
          industry: "İnşaat",
          organizer: "dmg events",
          description:
            "Küresel tedarikçileri, yüklenicileri ve karar vericileri bir araya getiren bölgenin en önemli yapı ve inşaat fuarı.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="featured-exhibitions section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="section-label">{t.label}</p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="featured-exhibitions-grid">
          {t.exhibitions.map((exhibition) => (
            <article
              key={exhibition.id}
              className="exhibition-card featured"
            >
              <div className="exhibition-image">
                <img
                  src={exhibition.image}
                  alt={exhibition.name}
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
                  to="/exhibition-detail"
                  className="view-exhibition-btn"
                >
                  {t.button}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedExhibitions;