import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionsPortfolioNotice() {
  const { language } = useTranslation();

  const content = {
    en: {
      supporting:
        "Companies seeking international exhibition opportunities may contact EREXPO to share their target markets and industries.",
      contact: "Contact EREXPO",
      industries: "Explore Industries",
    },

    tr: {
      supporting:
        "Uluslararası fuar fırsatları arayan firmalar, hedef pazarlarını ve faaliyet gösterdikleri sektörleri paylaşmak üzere EREXPO ile iletişime geçebilir.",
      contact: "EREXPO ile İletişime Geçin",
      industries: "Sektörleri Keşfedin",
    },
  };

  const t = content[language];

  return (
    <section className="exhibitions-status section-spacing">
      <div className="container">
        <div className="exhibitions-status-card">
          <p>{t.supporting}</p>

          <div className="exhibitions-status-actions">
            <Link
              to="/contact"
              className="exhibitions-status-btn exhibitions-status-btn--primary"
            >
              {t.contact}
            </Link>

            <Link
              to="/industries"
              className="exhibitions-status-btn exhibitions-status-btn--outline"
            >
              {t.industries}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExhibitionsPortfolioNotice;
