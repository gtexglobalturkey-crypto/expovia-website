import { useTranslation } from "../../hooks/useTranslation";

function ServicesProcess() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Our Process",
      title: "A Clear Path from Planning to Participation",
    },

    tr: {
      label: "Süreç",
      title: "Planlamadan Katılıma Uzanan Net Bir Yol",
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
      </div>
    </section>
  );
}

export default ServicesProcess;
