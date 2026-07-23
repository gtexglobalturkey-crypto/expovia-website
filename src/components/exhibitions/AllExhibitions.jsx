import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

import mining01 from "../../assets/exhibitions/mining-01.png";
import mining02 from "../../assets/exhibitions/mining-02.png";
import construction01 from "../../assets/exhibitions/construction-01.png";
import construction02 from "../../assets/exhibitions/construction-02.png";
import energy01 from "../../assets/exhibitions/energy-01.png";
import food01 from "../../assets/exhibitions/food-01.png";
import industry01 from "../../assets/exhibitions/industry-01.png";
import business01 from "../../assets/exhibitions/business-01.png";
import logistics01 from "../../assets/exhibitions/logistics-01.png";
import technology01 from "../../assets/exhibitions/technology-01.png";

function AllExhibitions() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Browse",
      title: "All Exhibitions",
      description:
        "Explore international trade exhibitions across different industries and regions to identify new business opportunities.",
      country: "Country",
      city: "City",
      date: "Date",
      organizer: "Organizer",
      button: "View Exhibition",

      exhibitions: [
        {
          id: 1,
          image: mining01,
          name: "MINExpo International",
          country: "United States",
          city: "Las Vegas",
          date: "21–23 September 2026",
          industry: "Mining",
          organizer: "National Mining Association",
        },
        {
          id: 2,
          image: construction01,
          name: "bauma",
          country: "Germany",
          city: "Munich",
          date: "3–9 April 2028",
          industry: "Construction",
          organizer: "Messe München",
        },
        {
          id: 3,
          image: industry01,
          name: "Intermat",
          country: "France",
          city: "Paris",
          date: "21–24 April 2027",
          industry: "Construction",
          organizer: "Comexposium",
        },
        {
          id: 4,
          image: construction02,
          name: "The Big 5 Global",
          country: "United Arab Emirates",
          city: "Dubai",
          date: "24–27 November 2026",
          industry: "Construction",
          organizer: "dmg events",
        },
        {
          id: 5,
          image: mining02,
          name: "Expomin",
          country: "Chile",
          city: "Santiago",
          date: "27–30 April 2027",
          industry: "Mining",
          organizer: "Fisa",
        },
        {
          id: 6,
          image: technology01,
          name: "Mining Türkiye",
          country: "Türkiye",
          city: "Istanbul",
          date: "12–15 May 2027",
          industry: "Mining",
          organizer: "HKF Trade Fairs",
        },
        {
          id: 7,
          image: energy01,
          name: "ADIPEC",
          country: "United Arab Emirates",
          city: "Abu Dhabi",
          date: "October 2026",
          industry: "Energy",
          organizer: "ADNEC Group",
        },
        {
          id: 8,
          image: food01,
          name: "Gulfood",
          country: "United Arab Emirates",
          city: "Dubai",
          date: "February 2027",
          industry: "Food",
          organizer: "Dubai World Trade Centre",
        },
        {
          id: 9,
          image: logistics01,
          name: "Transport Logistic",
          country: "Germany",
          city: "Munich",
          date: "May 2027",
          industry: "Logistics",
          organizer: "Messe München",
        },
        {
          id: 10,
          image: business01,
          name: "Hannover Messe",
          country: "Germany",
          city: "Hannover",
          date: "April 2027",
          industry: "Industry",
          organizer: "Deutsche Messe",
        },
      ],
    },

    tr: {
      label: "Fuarları Keşfedin",
      title: "Tüm Fuarlar",
      description:
        "Yeni iş fırsatlarını belirlemek için farklı sektör ve bölgelerdeki uluslararası ticaret fuarlarını keşfedin.",
      country: "Ülke",
      city: "Şehir",
      date: "Tarih",
      organizer: "Organizatör",
      button: "Fuarı İncele",

      exhibitions: [
        {
          id: 1,
          image: mining01,
          name: "MINExpo International",
          country: "Amerika Birleşik Devletleri",
          city: "Las Vegas",
          date: "21–23 Eylül 2026",
          industry: "Madencilik",
          organizer: "National Mining Association",
        },
        {
          id: 2,
          image: construction01,
          name: "bauma",
          country: "Almanya",
          city: "Münih",
          date: "3–9 Nisan 2028",
          industry: "İnşaat",
          organizer: "Messe München",
        },
        {
          id: 3,
          image: industry01,
          name: "Intermat",
          country: "Fransa",
          city: "Paris",
          date: "21–24 Nisan 2027",
          industry: "İnşaat",
          organizer: "Comexposium",
        },
        {
          id: 4,
          image: construction02,
          name: "The Big 5 Global",
          country: "Birleşik Arap Emirlikleri",
          city: "Dubai",
          date: "24–27 Kasım 2026",
          industry: "İnşaat",
          organizer: "dmg events",
        },
        {
          id: 5,
          image: mining02,
          name: "Expomin",
          country: "Şili",
          city: "Santiago",
          date: "27–30 Nisan 2027",
          industry: "Madencilik",
          organizer: "Fisa",
        },
        {
          id: 6,
          image: technology01,
          name: "Mining Türkiye",
          country: "Türkiye",
          city: "İstanbul",
          date: "12–15 Mayıs 2027",
          industry: "Madencilik",
          organizer: "HKF Trade Fairs",
        },
        {
          id: 7,
          image: energy01,
          name: "ADIPEC",
          country: "Birleşik Arap Emirlikleri",
          city: "Abu Dabi",
          date: "Ekim 2026",
          industry: "Enerji",
          organizer: "ADNEC Group",
        },
        {
          id: 8,
          image: food01,
          name: "Gulfood",
          country: "Birleşik Arap Emirlikleri",
          city: "Dubai",
          date: "Şubat 2027",
          industry: "Gıda",
          organizer: "Dubai World Trade Centre",
        },
        {
          id: 9,
          image: logistics01,
          name: "Transport Logistic",
          country: "Almanya",
          city: "Münih",
          date: "Mayıs 2027",
          industry: "Lojistik",
          organizer: "Messe München",
        },
        {
          id: 10,
          image: business01,
          name: "Hannover Messe",
          country: "Almanya",
          city: "Hannover",
          date: "Nisan 2027",
          industry: "Endüstri",
          organizer: "Deutsche Messe",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="all-exhibitions section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="section-label">{t.label}</p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="exhibitions-grid">
          {t.exhibitions.map((exhibition) => (
            <article
              key={exhibition.id}
              className="exhibition-card"
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

export default AllExhibitions;