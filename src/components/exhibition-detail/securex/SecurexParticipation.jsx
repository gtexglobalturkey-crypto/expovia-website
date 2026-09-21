import { useTranslation } from "../../../hooks/useTranslation";

// The three stand categories confirmed in the organizer's 2027 brochure.
// Deliberately no prices, rates, commissions, inclusions or availability —
// those are handled through VIAFA's contact flow, not published here.
function SecurexParticipation() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Participation",
      title: "Participation Options",
      description:
        "The organizer offers three stand categories for 2027. Contact VIAFA to discuss which format suits your company.",

      options: [
        {
          number: "01",
          title: "Floor Space Only",
          description:
            "Exhibition floor space for companies that prefer to design and build their own stand.",
        },
        {
          number: "02",
          title: "Shell Scheme Packages",
          description:
            "Ready-built stand packages for companies looking for a practical, ready-to-exhibit solution.",
        },
        {
          number: "03",
          title: "Customised Solutions",
          description:
            "Tailored participation formats designed around your strategy and objectives.",
        },
      ],
    },

    tr: {
      label: "Katılım",
      title: "Katılım Seçenekleri",
      description:
        "Organizatör 2027 için üç stant kategorisi sunuyor. Şirketinize hangi formatın uygun olduğunu görüşmek için VIAFA ile iletişime geçebilirsiniz.",

      options: [
        {
          number: "01",
          title: "Sadece Boş Alan",
          description:
            "Kendi standını tasarlayıp kurmak isteyen firmalar için boş fuar alanı.",
        },
        {
          number: "02",
          title: "Hazır Stant Paketleri (Shell Scheme)",
          description:
            "Pratik ve katılıma hazır bir çözüm arayan firmalar için hazır kurulu stant paketleri.",
        },
        {
          number: "03",
          title: "Özel Çözümler",
          description:
            "Stratejiniz ve hedeflerinize göre şekillendirilen, firmaya özel katılım formatları.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="exhibition-participation securex-participation">
      <div className="container">
        <div className="section-header">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="participation-grid">
          {t.options.map((item) => (
            <article
              key={item.number}
              className="participation-card"
            >
              <div className="participation-top">
                <span className="participation-number">
                  {item.number}
                </span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecurexParticipation;
