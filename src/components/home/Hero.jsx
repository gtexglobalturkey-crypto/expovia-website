import "./Hero.css";

import { useTranslation } from "../../hooks/useTranslation";

import heroImage from "../../assets/images/hero.png";
import Button from "../ui/Button";

function Hero() {
  const { language } = useTranslation();

  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const content = {
    en: {
      label: "International Exhibition Representation",
      title: (
        <>
          Expand Your Business
          <br />
          Through International
          <br />
          <span>Exhibitions</span>
        </>
      ),
      description:
        "EREXPO represents leading international exhibitions and connects Turkish manufacturers and exporters with the right markets, organizers and global business opportunities.",
      primary: "Explore Exhibitions",
      trust: [
        "International Exhibition Expertise",
        "International Organizer Network",
        "End-to-End Participation Support",
      ],
      scroll: "Scroll to explore",
      aria: "Scroll to exhibitions",
    },

    tr: {
      label: "Uluslararası Fuar Temsilciliği",
      title: (
        <>
          İşinizi
          <br />
          Uluslararası
          <br />
          <span>Fuarlarla Büyütün</span>
        </>
      ),
      description:
        "EREXPO, dünyanın önde gelen uluslararası fuarlarını Türkiye'de temsil eder ve üreticileri ile ihracatçıları doğru pazarlar, organizatörler ve yeni iş fırsatlarıyla buluşturur.",
      primary: "Fuarları İncele",
      trust: [
        "Uluslararası Fuar Uzmanlığı",
        "Uluslararası Organizatör Ağı",
        "Uçtan Uca Katılım Desteği",
      ],
      scroll: "Keşfetmek için aşağı kaydır",
      aria: "Fuarlara git",
    },
  };

  const t = content[language];

  return (
    <section
      className="premium-hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="premium-hero__overlay" />

      <div className="container premium-hero__inner">
        <div className="premium-hero__content">
          <div className="premium-hero__eyebrow">
            <span className="premium-hero__eyebrow-line" />

            <p className="premium-hero__label">
              {t.label}
            </p>
          </div>

          <h1 className="premium-hero__title">
            {t.title}
          </h1>

          <p className="premium-hero__description">
            {t.description}
          </p>

          <div className="premium-hero__actions">
            <Button
              variant="primary"
              size="large"
              onClick={() => scrollToSection("exhibitions")}
            >
              {t.primary}
            </Button>
          </div>

          <div className="premium-hero__trust">
            {t.trust.map((item) => (
              <div
                key={item}
                className="premium-hero__trust-item"
              >
                <span aria-hidden="true">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <a
          className="premium-hero__scroll"
          href="#exhibitions"
          aria-label={t.aria}
        >
          <span className="premium-hero__scroll-icon">
            <span />
          </span>

          <span>{t.scroll}</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;