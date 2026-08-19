import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionsCTA() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Ready to Expand Internationally?",
      title: "Let VIAFA Help You Choose the Right Exhibition",
      description:
        "From selecting the most suitable international exhibition to managing your participation process, VIAFA supports Turkish manufacturers and exporters with professional guidance every step of the way.",
      primary: "Contact VIAFA",
      secondary: "View Our Services",
    },

    tr: {
      label: "Uluslararası Pazarlara Açılmaya Hazır mısınız?",
      title: "Doğru Fuarı Seçmenize VIAFA Yardımcı Olsun",
      description:
        "En uygun uluslararası fuarın seçilmesinden katılım sürecinin yönetilmesine kadar VIAFA, Türk üretici ve ihracatçılara her aşamada profesyonel destek sunar.",
      primary: "VIAFA ile İletişime Geçin",
      secondary: "Hizmetlerimizi İnceleyin",
    },
  };

  const t = content[language];

  return (
    <section className="exhibitions-cta section-spacing">
      <div className="container">
        <div className="cta-card">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>

          <div className="cta-actions">
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              {t.primary}
            </Link>

            <Link
              to="/services"
              className="btn btn-secondary"
            >
              {t.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExhibitionsCTA;