import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

function ServicesCTA() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Ready to Participate?",
      title: "Plan Your Next International Exhibition with EREXPO",
      description:
        "Tell us about your company, products and target markets. Our team will help you identify the right exhibition and manage the participation process.",
      button: "Contact EREXPO",
    },

    tr: {
      label: "Katılıma Hazır mısınız?",
      title: "Bir Sonraki Uluslararası Fuarınızı EREXPO ile Planlayın",
      description:
        "Şirketiniz, ürünleriniz ve hedef pazarlarınız hakkında bize bilgi verin. Ekibimiz doğru fuarı belirlemenize ve katılım sürecini yönetmenize yardımcı olsun.",
      button: "EREXPO ile İletişime Geçin",
    },
  };

  const t = content[language];

  return (
    <section className="services-cta">
      <div className="container">
        <div className="services-cta-card">
          <div className="services-cta-left">
            <p className="section-label">
              {t.label}
            </p>

            <h2>{t.title}</h2>
          </div>

          <div className="services-cta-right">
            <p>{t.description}</p>

            <Link
              to="/contact"
              className="services-cta-link"
            >
              {t.button}

              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCTA;