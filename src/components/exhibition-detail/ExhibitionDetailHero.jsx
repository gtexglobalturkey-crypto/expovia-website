import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

import miningImage from "../../assets/exhibitions/mining-01.png";

function ExhibitionDetailHero() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "International Mining Exhibition",
      title: "Mining Türkiye 2027",
      description:
        "Mining Türkiye is one of the region's leading mining exhibitions, bringing together manufacturers, suppliers, mining companies and international buyers on a single business platform.",
      dateLabel: "Date",
      date: "12–15 May 2027",
      locationLabel: "Location",
      location: "Istanbul Expo Center",
      organizerLabel: "Organizer",
      organizer: "HKF Trade Fairs",
      industryLabel: "Industry",
      industry: "Mining Technologies",
      primary: "Request Participation",
      secondary: "Download Brochure",
      imageAlt: "Mining Türkiye 2027",
    },

    tr: {
      label: "Uluslararası Madencilik Fuarı",
      title: "Mining Türkiye 2027",
      description:
        "Mining Türkiye; üreticileri, tedarikçileri, madencilik şirketlerini ve uluslararası alıcıları tek bir iş platformunda buluşturan bölgenin önde gelen madencilik fuarlarından biridir.",
      dateLabel: "Tarih",
      date: "12–15 Mayıs 2027",
      locationLabel: "Konum",
      location: "İstanbul Fuar Merkezi",
      organizerLabel: "Organizatör",
      organizer: "HKF Trade Fairs",
      industryLabel: "Sektör",
      industry: "Madencilik Teknolojileri",
      primary: "Katılım Talebi Oluştur",
      secondary: "Broşürü İndir",
      imageAlt: "Mining Türkiye 2027",
    },
  };

  const t = content[language];

  return (
    <section className="exhibition-detail-hero">
      <div className="container">
        <div className="detail-hero-grid">
          <div className="detail-hero-content">
            <p className="section-label">
              {t.label}
            </p>

            <h1>{t.title}</h1>

            <p className="detail-hero-description">
              {t.description}
            </p>

            <div className="detail-meta">
              <div>
                <strong>{t.dateLabel}</strong>
                <span>{t.date}</span>
              </div>

              <div>
                <strong>{t.locationLabel}</strong>
                <span>{t.location}</span>
              </div>

              <div>
                <strong>{t.organizerLabel}</strong>
                <span>{t.organizer}</span>
              </div>

              <div>
                <strong>{t.industryLabel}</strong>
                <span>{t.industry}</span>
              </div>
            </div>

            <div className="detail-hero-actions">
              <Link
                to="/contact"
                className="btn btn-primary"
              >
                {t.primary}
              </Link>

              <a
                href="#overview"
                className="btn btn-secondary"
              >
                {t.secondary}
              </a>
            </div>
          </div>

          <div className="detail-hero-image">
            <img
              src={miningImage}
              alt={t.imageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExhibitionDetailHero;