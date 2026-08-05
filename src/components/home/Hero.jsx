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
          Grow Your Business
          <br />
          Globally Through
          <br />
          <span>Exhibitions</span>
        </>
      ),
      description:
        "EXPOVIA represents leading international exhibitions and connects Turkish manufacturers and exporters with the right markets, organizers and global business opportunities.",
      primary: "Explore Exhibitions",
      trust: [
        "International Exhibition Expertise",
        "International Organizer Network",
        "End-to-End Participation Support",
      ],
      aria: "Scroll to exhibitions",
      whyLabel: "Why EXPOVIA",
      whyTitle: "A professional partner for international growth.",
      whyParagraphs: [
        "Participating in an international exhibition requires much more than reserving a stand. Success depends on choosing the right market, the right organizer and preparing every step correctly.",
        "EXPOVIA combines local market knowledge with international exhibition experience to help Turkish manufacturers and exporters expand confidently into global markets.",
      ],
      principles: [
        {
          id: "01",
          title: "Clear and reliable communication",
          description:
            "Companies receive direct, timely and transparent communication throughout every stage of the exhibition journey.",
        },
        {
          id: "02",
          title: "Industry-focused guidance",
          description:
            "Every exhibition recommendation is evaluated according to sector relevance, commercial objectives and target markets.",
        },
        {
          id: "03",
          title: "Professional participation management",
          description:
            "From the first enquiry to post-exhibition follow-up, EXPOVIA manages every detail with consistency and care.",
        },
      ],
    },

    tr: {
      label: "Uluslararası Fuar Temsilciliği",
      title: (
        <>
          İşinizi
          <br />
          <span className="premium-hero__title-accent">Uluslararası</span>
          <br />
          <span className="premium-hero__title-accent">Fuarlarla</span>{" "}
          Büyütün
        </>
      ),
      description:
        "EXPOVIA, dünyanın önde gelen uluslararası fuarlarını Türkiye'de temsil eder ve üreticileri ile ihracatçıları doğru pazarlar, organizatörler ve yeni iş fırsatlarıyla buluşturur.",
      primary: "Fuarları İncele",
      trust: [
        "Uluslararası Fuar Uzmanlığı",
        "Uluslararası Organizatör Ağı",
        "Uçtan Uca Katılım Desteği",
      ],
      aria: "Fuarlara git",
      whyLabel: "Neden EXPOVIA",
      whyTitle: "Uluslararası büyüme için profesyonel bir iş ortağı.",
      whyParagraphs: [
        "Uluslararası bir fuara katılmak, yalnızca bir stand alanı ayırtmaktan çok daha fazlasını gerektirir. Başarı; doğru pazarın, doğru organizatörün seçilmesine ve her adımın doğru şekilde hazırlanmasına bağlıdır.",
        "EXPOVIA, yerel pazar bilgisini uluslararası fuarcılık deneyimiyle birleştirerek Türk üretici ve ihracatçıların küresel pazarlara güvenle açılmasına yardımcı olur.",
      ],
      principles: [
        {
          id: "01",
          title: "Açık ve güvenilir iletişim",
          description:
            "Firmalar, fuar katılım sürecinin her aşamasında doğrudan, zamanında ve şeffaf iletişim desteği alır.",
        },
        {
          id: "02",
          title: "Sektör odaklı yönlendirme",
          description:
            "Her fuar önerisi; sektör uygunluğu, ticari hedefler ve hedef pazarlar doğrultusunda değerlendirilir.",
        },
        {
          id: "03",
          title: "Profesyonel katılım yönetimi",
          description:
            "İlk bilgi talebinden fuar sonrası takibe kadar EXPOVIA, sürecin her detayını tutarlı ve özenli şekilde yönetir.",
        },
      ],
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

          <div className="premium-hero__divider" />

          <div
            className="premium-hero__why"
            id="about"
          >
            <div className="premium-hero__why-eyebrow">
              <span />

              <p>{t.whyLabel}</p>
            </div>

            <div
              className={`premium-hero__trust ${
                language === "en" ? "premium-hero__trust--en" : ""
              }`}
            >
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

            <h2 className="premium-hero__why-title">
              {t.whyTitle}
            </h2>

            {t.whyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="premium-hero__principles">
          {t.principles.map((principle) => (
            <article
              key={principle.id}
              className="premium-hero__principle"
            >
              <span className="premium-hero__principle-number">
                {principle.id}
              </span>

              <div>
                <h3>{principle.title}</h3>

                <p>{principle.description}</p>
              </div>
            </article>
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
      </a>
    </section>
  );
}

export default Hero;