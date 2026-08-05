import { useTranslation } from "../../hooks/useTranslation";

function ContactHero() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Contact EXPOVIA",
      title: "Let's Plan Your Next International Exhibition",
      description:
        "Tell us about your company, products and target markets. Our team will help you identify the right international exhibitions and guide you through every stage of the participation process.",
      footer: [
        "Professional Guidance",
        "International Reach",
        "Founder-Led Support",
      ],
    },

    tr: {
      label: "EXPOVIA ile İletişime Geçin",
      title: "Bir Sonraki Uluslararası Fuarınızı Birlikte Planlayalım",
      description:
        "Şirketiniz, ürünleriniz ve hedef pazarlarınız hakkında bize bilgi verin. Ekibimiz size en uygun uluslararası fuarları belirlemenize yardımcı olacak ve katılım sürecinin her aşamasında yanınızda olacaktır.",
      footer: [
        "Profesyonel Danışmanlık",
        "Uluslararası Erişim",
        "Kurucu Liderliğinde Destek",
      ],
    },
  };

  const t = content[language];

  return (
    <section className="contact-workspace-hero">
      <div
        className="contact-workspace-hero-decoration"
        aria-hidden="true"
      >
        <span className="contact-workspace-orbit contact-workspace-orbit-one" />
        <span className="contact-workspace-orbit contact-workspace-orbit-two" />
        <span className="contact-workspace-point contact-workspace-point-one" />
        <span className="contact-workspace-point contact-workspace-point-two" />
        <span className="contact-workspace-point contact-workspace-point-three" />
      </div>

      <div className="contact-workspace-hero-content">
        <p className="contact-section-label">
          {t.label}
        </p>

        <h1>{t.title}</h1>

        <p className="contact-workspace-description">
          {t.description}
        </p>
      </div>

      <div className="contact-workspace-hero-footer">
        {t.footer.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default ContactHero;