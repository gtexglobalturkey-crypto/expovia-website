import "./Insights.css";

import { useTranslation } from "../../hooks/useTranslation";

function Insights() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Insights",
      title: "Practical knowledge for international exhibitors.",
      intro:
        "Articles, market insights and practical guidance to help Turkish companies make better international exhibition decisions.",
      introLink: "Suggest a topic",
      cardLink: "Read insight",
      notice:
        "New articles and market notes will be published as the EXPOVIA knowledge platform continues to grow.",

      insights: [
        {
          id: "01",
          category: "Market Guidance",
          title: "How to choose the right international exhibition",
          description:
            "A practical framework for evaluating sector relevance, visitor quality, target markets and commercial potential.",
        },
        {
          id: "02",
          category: "Participation Planning",
          title: "What companies should prepare before exhibiting abroad",
          description:
            "Preparation guidelines covering stand planning, documentation, marketing materials and internal coordination.",
        },
        {
          id: "03",
          category: "Export Development",
          title: "Turning exhibition participation into long-term growth",
          description:
            "How structured follow-up, customer development and market learning create sustainable export opportunities.",
        },
      ],
    },

    tr: {
      label: "Bilgi Merkezi",
      title: "Uluslararası fuar katılımcıları için pratik bilgiler.",
      intro:
        "Türk firmalarının uluslararası fuar kararlarını daha doğru vermelerine yardımcı olacak makaleler, pazar bilgileri ve uygulamalı rehberler.",
      introLink: "Konu önerin",
      cardLink: "İçeriği incele",
      notice:
        "EXPOVIA bilgi platformu geliştikçe yeni makaleler ve pazar notları yayımlanacaktır.",

      insights: [
        {
          id: "01",
          category: "Pazar Rehberliği",
          title: "Doğru uluslararası fuar nasıl seçilir?",
          description:
            "Sektör uygunluğu, ziyaretçi kalitesi, hedef pazarlar ve ticari potansiyeli değerlendirmek için pratik bir yaklaşım.",
        },
        {
          id: "02",
          category: "Katılım Planlaması",
          title: "Firmalar yurt dışı fuarlar öncesinde ne hazırlamalı?",
          description:
            "Stand planlaması, belgeler, tanıtım materyalleri ve şirket içi koordinasyonu kapsayan hazırlık rehberi.",
        },
        {
          id: "03",
          category: "İhracat Gelişimi",
          title: "Fuar katılımını uzun vadeli büyümeye dönüştürmek",
          description:
            "Planlı takip, müşteri geliştirme ve pazar bilgisinin sürdürülebilir ihracat fırsatları oluşturmadaki rolü.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section
      id="insights"
      className="insights-section section-spacing"
    >
      <div className="container">
        <div className="insights-section__heading">
          <div className="insights-section__heading-content">
            <div className="insights-section__eyebrow">
              <span />

              <p>{t.label}</p>
            </div>

            <h2>{t.title}</h2>
          </div>

          <div className="insights-section__intro">
            <p>{t.intro}</p>

            <a href="#contact">
              {t.introLink}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="insights-section__grid">
          {t.insights.map((insight) => (
            <article
              key={insight.id}
              className="insights-section__card"
            >
              <div className="insights-section__card-top">
                <span className="insights-section__category">
                  {insight.category}
                </span>

                <span className="insights-section__number">
                  {insight.id}
                </span>
              </div>

              <div className="insights-section__card-content">
                <h3>{insight.title}</h3>

                <p>{insight.description}</p>
              </div>

              <a
                href="#contact"
                className="insights-section__link"
              >
                {t.cardLink}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="insights-section__notice">
          <span className="insights-section__notice-line" />

          <p>{t.notice}</p>
        </div>
      </div>
    </section>
  );
}

export default Insights;