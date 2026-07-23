import { useTranslation } from "../../hooks/useTranslation";

function ServicesProcess() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Our Process",
      title: "A Clear Path from Planning to Participation",

      steps: [
        {
          number: "01",
          title: "Understand Your Objectives",
          description:
            "We evaluate your products, target markets and international growth priorities.",
        },
        {
          number: "02",
          title: "Select the Right Exhibition",
          description:
            "We identify exhibitions aligned with your industry and commercial goals.",
        },
        {
          number: "03",
          title: "Plan and Prepare",
          description:
            "We coordinate participation details, documentation and organizer communication.",
        },
        {
          number: "04",
          title: "Support Your Participation",
          description:
            "We guide your company throughout preparation, exhibition days and follow-up.",
        },
      ],
    },

    tr: {
      label: "Süreç",
      title: "Planlamadan Katılıma Uzanan Net Bir Yol",

      steps: [
        {
          number: "01",
          title: "Hedeflerinizi Anlıyoruz",
          description:
            "Ürünlerinizi, hedef pazarlarınızı ve uluslararası büyüme önceliklerinizi birlikte değerlendiriyoruz.",
        },
        {
          number: "02",
          title: "Doğru Fuarı Seçiyoruz",
          description:
            "Sektörünüze ve ticari hedeflerinize uygun uluslararası fuarları belirliyoruz.",
        },
        {
          number: "03",
          title: "Planlıyor ve Hazırlıyoruz",
          description:
            "Katılım detaylarını, gerekli belgeleri ve organizatör iletişimini koordine ediyoruz.",
        },
        {
          number: "04",
          title: "Katılımınızı Destekliyoruz",
          description:
            "Hazırlık sürecinden fuar günlerine ve sonrasındaki takibe kadar şirketinizin yanında oluyoruz.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="services-process">
      <div className="container">
        <div className="services-process-heading">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>
        </div>

        <div className="services-process-grid">
          {t.steps.map((step) => (
            <article
              className="services-process-step"
              key={step.number}
            >
              <span>{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesProcess;