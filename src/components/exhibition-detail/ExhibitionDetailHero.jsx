import { useTranslation } from "../../hooks/useTranslation";

import wampexLogo from "../../assets/exhibitions/wampex/wampex-logo.png";
import heroImage from "../../assets/exhibitions/wampex/gallery-entrance.jpg";

function ExhibitionDetailHero() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "International Mining & Power Exhibition",
      description:
        "WAMPEX West Africa is the region's largest mining and power exhibition, bringing together manufacturers, suppliers, mining companies and international buyers for its 20th anniversary edition in Accra.",
      dateLabel: "Date",
      date: "2–4 June 2027",
      locationLabel: "Location",
      location: "La Palm Royal Beach Hotel, Accra, Ghana",
      organizerLabel: "Organizer",
      organizer: "DMG Events · EPI · Ghana Chamber of Mines",
      industryLabel: "Industry",
      industry: "Mining & Power",
      imageAlt: "WAMPEX West Africa entrance banner",
      logoAlt: "WAMPEX West Africa",
      announcement: "2026 Incentive Amount: 22,983 TRY",
    },

    tr: {
      label: "Uluslararası Madencilik ve Enerji Fuarı",
      description:
        "WAMPEX West Africa, Batı Afrika'nın en büyük madencilik ve enerji fuarı; üreticileri, tedarikçileri, madencilik şirketlerini ve uluslararası alıcıları 20. yıl dönümü edisyonunda Accra'da bir araya getiriyor.",
      dateLabel: "Tarih",
      date: "2–4 Haziran 2027",
      locationLabel: "Konum",
      location: "La Palm Royal Beach Hotel, Accra, Gana",
      organizerLabel: "Organizatör",
      organizer: "DMG Events · EPI · Ghana Chamber of Mines",
      industryLabel: "Sektör",
      industry: "Madencilik & Enerji",
      imageAlt: "WAMPEX West Africa giriş bannerı",
      logoAlt: "WAMPEX West Africa",
      announcement: "2026 Yılı Teşvik Tutarı: 22.983 TL",
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

            <div className="detail-hero-logo-row">
              <img
                src={wampexLogo}
                alt={t.logoAlt}
                className="detail-hero-logo"
              />

              <span className="hero-announcement-badge">
                {t.announcement}
              </span>
            </div>

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
          </div>

          <div className="detail-hero-image">
            <img
              src={heroImage}
              alt={t.imageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExhibitionDetailHero;
