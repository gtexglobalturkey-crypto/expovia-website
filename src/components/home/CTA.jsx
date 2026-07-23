import "./CTA.css";

import { useTranslation } from "../../hooks/useTranslation";

import Button from "../ui/Button";

function CTA() {
  const { language } = useTranslation();

  const content = {
    en: {
      title: "Planning to exhibit internationally?",
      description:
        "Tell us about your company, target markets and participation objectives. EREXPO will help you identify the most suitable international exhibition opportunities.",
      primary: "Contact EREXPO",
      footer:
        "Professional international exhibition representation for Turkish manufacturers and exporters.",
      subject: "International Exhibition Inquiry",
    },

    tr: {
      title: "Uluslararası bir fuara katılmayı mı planlıyorsunuz?",
      description:
        "Şirketiniz, hedef pazarlarınız ve fuar katılım hedefleriniz hakkında bize bilgi verin. EREXPO sizin için en uygun uluslararası fuar fırsatlarını belirlemenize yardımcı olsun.",
      primary: "EREXPO ile İletişime Geçin",
      footer:
        "Türk üretici ve ihracatçıları için profesyonel uluslararası fuar temsilciliği.",
      subject: "Uluslararası Fuar Katılım Talebi",
    },
  };

  const t = content[language];

  const handleContact = () => {
    window.location.href = `mailto:info@erexpo.com?subject=${encodeURIComponent(
      t.subject
    )}`;
  };

  return (
    <section
      id="contact"
      className="cta-section"
    >
      <div className="container">
        <div className="cta-section__inner">
          <div className="cta-section__content">
            <h2>{t.title}</h2>

            <p>{t.description}</p>
          </div>

          <div className="cta-section__actions">
            <Button
              variant="primary"
              size="large"
              onClick={handleContact}
            >
              {t.primary}
            </Button>

            <p>{t.footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;