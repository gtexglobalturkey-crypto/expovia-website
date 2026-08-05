import { useTranslation } from "../../hooks/useTranslation";

function WhyEXPOVIA() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Why EXPOVIA",
      title: "Why Companies Choose EXPOVIA",
      description:
        "We combine international exhibition experience with professional representation services to make global participation simpler, faster and more effective.",

      reasons: [
        {
          number: "01",
          title: "Official Representation",
          description:
            "We work directly with international exhibition organizers, ensuring reliable communication and a smooth participation process.",
        },
        {
          number: "02",
          title: "Industry Expertise",
          description:
            "We recommend exhibitions based on your industry, export objectives and target markets instead of offering generic event lists.",
        },
        {
          number: "03",
          title: "Professional Support",
          description:
            "From stand selection to organizer coordination, we manage every important step before, during and after the exhibition.",
        },
        {
          number: "04",
          title: "Long-Term Partnership",
          description:
            "Our objective is not a single exhibition but building sustainable international growth through long-term cooperation.",
        },
      ],
    },

    tr: {
      label: "Neden EXPOVIA?",
      title: "Şirketler Neden EXPOVIA’yu Tercih Ediyor?",
      description:
        "Uluslararası fuar deneyimimizi profesyonel temsilcilik hizmetleriyle birleştirerek küresel katılım sürecini daha kolay, hızlı ve etkili hale getiriyoruz.",

      reasons: [
        {
          number: "01",
          title: "Resmî Temsilcilik",
          description:
            "Uluslararası fuar organizatörleriyle doğrudan çalışarak güvenilir iletişim ve sorunsuz bir katılım süreci sağlıyoruz.",
        },
        {
          number: "02",
          title: "Sektörel Uzmanlık",
          description:
            "Genel fuar listeleri sunmak yerine sektörünüze, ihracat hedeflerinize ve hedef pazarlarınıza uygun fuarları öneriyoruz.",
        },
        {
          number: "03",
          title: "Profesyonel Destek",
          description:
            "Stant seçiminden organizatör koordinasyonuna kadar fuar öncesinde, sırasında ve sonrasındaki tüm önemli adımları yönetiyoruz.",
        },
        {
          number: "04",
          title: "Uzun Vadeli İş Ortaklığı",
          description:
            "Amacımız tek bir fuar katılımı değil, uzun vadeli iş birliğiyle sürdürülebilir uluslararası büyüme sağlamaktır.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="why-expovia section-spacing">
      <div className="container">
        <div className="why-expovia-heading">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="why-expovia-grid">
          {t.reasons.map((item) => (
            <article
              key={item.number}
              className="why-expovia-card"
            >
              <span className="why-expovia-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyEXPOVIA;