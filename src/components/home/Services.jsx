import "./Services.css";

import { useTranslation } from "../../hooks/useTranslation";

function Services() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Our Services",
      title: "Structured support at every stage of participation.",
      intro:
        "VIAFA manages international exhibition participation with clear communication, practical guidance and disciplined follow-up from the first enquiry to post-event evaluation.",
      link: "Discuss your participation plans",

      services: [
        {
          id: "01",
          title: "Exhibition Selection",
          description:
            "We help companies identify international exhibitions that match their industry, export goals and target markets.",
        },
        {
          id: "02",
          title: "Participation Planning",
          description:
            "Stand requirements, participation options and preparation activities are managed through a structured process.",
        },
        {
          id: "03",
          title: "Organizer Communication",
          description:
            "VIAFA coordinates communication with international organizers before, during and after participation.",
        },
        {
          id: "04",
          title: "Commercial Guidance",
          description:
            "Clear support on pricing, participation conditions, deadlines and exhibition services.",
        },
        {
          id: "05",
          title: "Pre-Exhibition Support",
          description:
            "Preparation of documents, stand planning and operational coordination before the event begins.",
        },
        {
          id: "06",
          title: "Long-Term Market Development",
          description:
            "Helping companies build a sustainable international exhibition strategy beyond a single event.",
        },
      ],
    },

    tr: {
      label: "Hizmetlerimiz",
      title: "Katılım sürecinin her aşamasında planlı destek.",
      intro:
        "VIAFA, ilk bilgi talebinden fuar sonrası değerlendirmeye kadar uluslararası fuar katılım sürecini açık iletişim, pratik rehberlik ve disiplinli takip anlayışıyla yönetir.",
      link: "Katılım planlarınızı görüşelim",

      services: [
        {
          id: "01",
          title: "Fuar Seçimi",
          description:
            "Şirketlerin sektörlerine, ihracat hedeflerine ve hedef pazarlarına uygun uluslararası fuarları belirlemelerine yardımcı oluyoruz.",
        },
        {
          id: "02",
          title: "Katılım Planlaması",
          description:
            "Stand ihtiyaçları, katılım seçenekleri ve hazırlık süreci planlı bir yaklaşımla yönetilir.",
        },
        {
          id: "03",
          title: "Organizatör İletişimi",
          description:
            "VIAFA, uluslararası organizatörlerle fuar öncesinde, sırasında ve sonrasında tüm iletişimi koordine eder.",
        },
        {
          id: "04",
          title: "Ticari Danışmanlık",
          description:
            "Fiyatlandırma, katılım koşulları, son başvuru tarihleri ve fuar hizmetleri konusunda net destek sunulur.",
        },
        {
          id: "05",
          title: "Fuar Öncesi Destek",
          description:
            "Belgelerin hazırlanması, stand planlaması ve operasyonel koordinasyon fuar başlamadan önce tamamlanır.",
        },
        {
          id: "06",
          title: "Uzun Vadeli Pazar Gelişimi",
          description:
            "Firmaların tek bir fuarın ötesinde sürdürülebilir uluslararası fuar stratejisi oluşturmasına destek veriyoruz.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section
      id="services"
      className="services-section section-spacing"
    >
      <div className="container services-section__layout">
        <div className="services-section__intro">
          <div className="services-section__eyebrow">
            <span />

            <p>{t.label}</p>
          </div>

          <h2>{t.title}</h2>

          <p>{t.intro}</p>

          <a
            className="services-section__link"
            href="#contact"
          >
            {t.link}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="services-section__list">
          {t.services.map((service) => (
            <article
              key={service.id}
              className="services-section__item"
            >
              <span className="services-section__number">
                {service.id}
              </span>

              <div className="services-section__content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <span
                className="services-section__item-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;