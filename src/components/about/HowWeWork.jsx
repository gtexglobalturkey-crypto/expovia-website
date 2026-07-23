import { useTranslation } from "../../hooks/useTranslation";

function HowWeWork() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "How We Work",
      titleFirst: "A Clear Process.",
      titleSecond: "Professional Support at Every Stage.",
      description:
        "International exhibition participation requires careful planning, reliable communication and consistent follow-up. We manage the process with a structured and transparent approach from the first conversation to the final exhibition day.",

      steps: [
        {
          number: "01",
          title: "Understanding Your Business",
          description:
            "We learn about your products, target markets and international growth objectives.",
        },
        {
          number: "02",
          title: "Selecting the Right Exhibition",
          description:
            "We identify the exhibitions that best match your industry, commercial priorities and export strategy.",
        },
        {
          number: "03",
          title: "Managing the Participation",
          description:
            "We coordinate applications, stand planning, organizer communication and every operational requirement.",
        },
        {
          number: "04",
          title: "Supporting Long-Term Growth",
          description:
            "We help you turn each exhibition into a stronger international network and a lasting business opportunity.",
        },
      ],
    },

    tr: {
      label: "Nasıl Çalışıyoruz?",
      titleFirst: "Net Bir Süreç.",
      titleSecond: "Her Aşamada Profesyonel Destek.",
      description:
        "Uluslararası fuar katılımı dikkatli planlama, güvenilir iletişim ve düzenli takip gerektirir. İlk görüşmeden fuarın son gününe kadar süreci yapılandırılmış ve şeffaf bir yaklaşımla yönetiyoruz.",

      steps: [
        {
          number: "01",
          title: "İşinizi Anlıyoruz",
          description:
            "Ürünlerinizi, hedef pazarlarınızı ve uluslararası büyüme hedeflerinizi öğreniyoruz.",
        },
        {
          number: "02",
          title: "Doğru Fuarı Seçiyoruz",
          description:
            "Sektörünüze, ticari önceliklerinize ve ihracat stratejinize en uygun fuarları belirliyoruz.",
        },
        {
          number: "03",
          title: "Katılım Sürecini Yönetiyoruz",
          description:
            "Başvuruları, stant planlamasını, organizatör iletişimini ve tüm operasyonel gereklilikleri koordine ediyoruz.",
        },
        {
          number: "04",
          title: "Uzun Vadeli Büyümeyi Destekliyoruz",
          description:
            "Her fuarı daha güçlü bir uluslararası iş ağına ve kalıcı bir ticari fırsata dönüştürmenize yardımcı oluyoruz.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="how-we-work section-spacing">
      <div className="container">
        <div className="how-we-work-layout">
          <div className="how-we-work-heading">
            <p className="section-label">
              {t.label}
            </p>

            <h2>
              {t.titleFirst}
              <br />
              {t.titleSecond}
            </h2>

            <p>{t.description}</p>
          </div>

          <div className="how-we-work-steps">
            {t.steps.map((step) => (
              <article
                key={step.number}
                className="how-we-work-step"
              >
                <span className="how-we-work-number">
                  {step.number}
                </span>

                <div className="how-we-work-step-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;