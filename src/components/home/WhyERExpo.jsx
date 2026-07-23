import "./WhyERExpo.css";

import { useTranslation } from "../../hooks/useTranslation";

function WhyERExpo() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Why EREXPO",
      title: "A professional partner for international growth.",
      paragraphs: [
        "Participating in an international exhibition requires much more than reserving a stand. Success depends on choosing the right market, the right organizer and preparing every step correctly.",
        "EREXPO combines local market knowledge with international exhibition experience to help Turkish manufacturers and exporters expand confidently into global markets.",
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
            "From the first enquiry to post-exhibition follow-up, EREXPO manages every detail with consistency and care.",
        },
      ],
    },

    tr: {
      label: "Neden EREXPO",
      title: "Uluslararası büyüme için profesyonel bir iş ortağı.",
      paragraphs: [
        "Uluslararası bir fuara katılmak, yalnızca bir stand alanı ayırtmaktan çok daha fazlasını gerektirir. Başarı; doğru pazarın, doğru organizatörün seçilmesine ve her adımın doğru şekilde hazırlanmasına bağlıdır.",
        "EREXPO, yerel pazar bilgisini uluslararası fuarcılık deneyimiyle birleştirerek Türk üretici ve ihracatçıların küresel pazarlara güvenle açılmasına yardımcı olur.",
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
            "İlk bilgi talebinden fuar sonrası takibe kadar EREXPO, sürecin her detayını tutarlı ve özenli şekilde yönetir.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section
      id="about"
      className="why-erexpo"
    >
      <div className="container why-erexpo__layout">
        <div className="why-erexpo__content">
          <div className="why-erexpo__eyebrow">
            <span />

            <p>{t.label}</p>
          </div>

          <h2>{t.title}</h2>

          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="why-erexpo__principles">
          {t.principles.map((principle) => (
            <article
              key={principle.id}
              className="why-erexpo__principle"
            >
              <span className="why-erexpo__number">
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
    </section>
  );
}

export default WhyERExpo;