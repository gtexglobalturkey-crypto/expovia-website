import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

import wampexImage from "../../assets/exhibitions/wampex-01.png";

function FeaturedExhibitions() {
  const { language } = useTranslation();

  const content = {
    en: {
      description:
        "The international exhibition VIAFA is currently representing for participation from Türkiye.",
      country: "Country",
      city: "City",
      date: "Date",
      organizer: "Organizer",
      button: "View Exhibition",

      exhibitions: [
        {
          id: 1,
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
      ],
    },

    tr: {
      description:
        "VIAFA'nın Türkiye'den katılım için temsilciliğini yürüttüğü uluslararası fuar.",

      country: "Ülke",
      city: "Şehir",
      date: "Tarih",
      organizer: "Organizatör",
      button: "Fuarı İncele",

      exhibitions: [
        {
          id: 1,
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
      ],
    },
  };

  const t = content[language];

  return (
    <section className="featured-exhibitions section-spacing">
      <div className="container">
        <p className="featured-exhibitions-intro">{t.description}</p>

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
