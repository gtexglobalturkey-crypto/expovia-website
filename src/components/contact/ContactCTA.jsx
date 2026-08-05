import { useTranslation } from "../../hooks/useTranslation";

import { CONTACT_EMAIL } from "../../config/site";

function ContactCTA() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Ready to Grow Internationally?",
      title: "Start Your International Exhibition Journey with EXPOVIA",
      description:
        "From selecting the right exhibition to managing every step of your participation, EXPOVIA helps Turkish companies connect with global business opportunities through international trade fairs.",
      primaryButton: "Contact Us",
      secondaryButton: "Explore Exhibitions",
    },

    tr: {
      label: "Uluslararası Büyümeye Hazır mısınız?",
      title: "EXPOVIA ile Uluslararası Fuar Yolculuğunuza Başlayın",
      description:
        "Doğru fuarı seçmekten katılım sürecinizin her aşamasını yönetmeye kadar EXPOVIA, Türk şirketlerinin uluslararası ticaret fuarları aracılığıyla küresel iş fırsatlarına ulaşmasına yardımcı olur.",
      primaryButton: "Bize Ulaşın",
      secondaryButton: "Fuarları Keşfedin",
    },
  };

  const t = content[language];

  return (
    <section className="contact-cta section-spacing">
      <div className="container">
        <div className="contact-cta-card">
          <div className="contact-cta-content">
            <p className="section-label">
              {t.label}
            </p>

            <h2>{t.title}</h2>

            <p>{t.description}</p>
          </div>

          <div className="contact-cta-actions">
            <a
              href={
                CONTACT_EMAIL
                  ? `mailto:${CONTACT_EMAIL}`
                  : undefined
              }
              className="primary-button"
            >
              {t.primaryButton}
            </a>

            <a
              href="/exhibitions"
              className="secondary-button"
            >
              {t.secondaryButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;