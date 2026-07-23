import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionSupport() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "EREXPO Support",
      title: "Your Professional Partner Throughout the Entire Journey",
      lead:
        "International exhibition participation requires careful planning, professional coordination and local market knowledge. EREXPO supports every important step from the first consultation to the successful completion of your participation.",
      highlightTitle: "End-to-End Participation Management",
      highlightText:
        "One dedicated partner for planning, coordination and execution.",

      steps: [
        {
          number: "01",
          title: "Strategic Exhibition Consultation",
          description:
            "We evaluate your objectives, products and target markets to determine whether the exhibition matches your international growth strategy.",
        },
        {
          number: "02",
          title: "Stand Selection & Reservation",
          description:
            "EREXPO helps you choose the most suitable stand location, manages reservations and coordinates communication with the organizer.",
        },
        {
          number: "03",
          title: "Participation Preparation",
          description:
            "From documentation and logistics to marketing materials and deadlines, we guide every stage of your exhibition preparation.",
        },
        {
          number: "04",
          title: "Professional Exhibition Support",
          description:
            "Before, during and after the exhibition, our team remains by your side to maximize your participation results and business opportunities.",
        },
      ],
    },

    tr: {
      label: "EREXPO Desteği",
      title: "Tüm Süreç Boyunca Profesyonel İş Ortağınız",
      lead:
        "Uluslararası fuar katılımı dikkatli planlama, profesyonel koordinasyon ve yerel pazar bilgisi gerektirir. EREXPO, ilk danışmanlık görüşmesinden katılımınızın başarıyla tamamlanmasına kadar tüm önemli adımlarda yanınızda olur.",
      highlightTitle: "Uçtan Uca Katılım Yönetimi",
      highlightText:
        "Planlama, koordinasyon ve uygulama için tek ve güvenilir bir iş ortağı.",

      steps: [
        {
          number: "01",
          title: "Stratejik Fuar Danışmanlığı",
          description:
            "Hedeflerinizi, ürünlerinizi ve hedef pazarlarınızı değerlendirerek fuarın uluslararası büyüme stratejinize uygun olup olmadığını belirleriz.",
        },
        {
          number: "02",
          title: "Stant Seçimi ve Rezervasyonu",
          description:
            "EREXPO en uygun stant konumunu seçmenize yardımcı olur, rezervasyon sürecini yönetir ve organizatörle iletişimi koordine eder.",
        },
        {
          number: "03",
          title: "Katılım Hazırlığı",
          description:
            "Belgelerden lojistiğe, pazarlama materyallerinden son teslim tarihlerine kadar fuar hazırlığınızın her aşamasında size rehberlik ederiz.",
        },
        {
          number: "04",
          title: "Profesyonel Fuar Desteği",
          description:
            "Fuar öncesinde, sırasında ve sonrasında ekibimiz katılım sonuçlarınızı ve iş fırsatlarınızı en üst düzeye çıkarmak için yanınızda olur.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="exhibition-support section-spacing">
      <div className="container">
        <div className="support-layout">
          <div className="support-intro">
            <p className="section-label">
              {t.label}
            </p>

            <h2>{t.title}</h2>

            <p className="support-lead">
              {t.lead}
            </p>

            <div className="support-highlight">
              <strong>
                {t.highlightTitle}
              </strong>

              <p>{t.highlightText}</p>
            </div>
          </div>

          <div className="support-timeline">
            {t.steps.map((step) => (
              <article
                key={step.number}
                className="support-card"
              >
                <div className="support-line"></div>

                <span className="support-number">
                  {step.number}
                </span>

                <div className="support-content">
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

export default ExhibitionSupport;