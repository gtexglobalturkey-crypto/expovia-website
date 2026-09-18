import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionDetailCTA() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Ready to Exhibit?",
      title: "Grow Your Business Through International Exhibitions",
      description:
        "VIAFA helps Turkish manufacturers and exporters participate in leading international exhibitions with professional guidance, strategic planning and end-to-end participation management.",
      benefits: [
        "Official Representative Support",
        "Professional Participation Management",
        "International Business Network",
      ],
      secondary: "Contact VIAFA",
    },

    tr: {
      label: "Katılımcı Olmaya Hazır mısınız?",
      title: "Uluslararası Fuarlarla İşinizi Büyütün",
      description:
        "VIAFA, Türk üretici ve ihracatçıların önde gelen uluslararası fuarlara profesyonel danışmanlık, stratejik planlama ve uçtan uca katılım yönetimiyle katılmalarına yardımcı olur.",
      benefits: [
        "Resmî Temsilcilik Desteği",
        "Profesyonel Katılım Yönetimi",
        "Uluslararası İş Ağı",
      ],
      secondary: "VIAFA ile İletişime Geçin",
    },
  };

  const t = content[language];

  return (
    <section className="exhibition-detail-cta section-spacing">
      <div className="container">
        <div className="cta-card">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p className="cta-description">
            {t.description}
          </p>

          <div className="cta-benefits">
            {t.benefits.map((benefit) => (
              <span key={benefit}>
                ✓ {benefit}
              </span>
            ))}
          </div>

          <div className="cta-actions">
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              {t.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExhibitionDetailCTA;