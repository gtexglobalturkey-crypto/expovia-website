import { useTranslation } from "../../hooks/useTranslation";

function ServicesHero() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Services",
      title: "Professional Exhibition Services for International Success",
      description:
        "EREXPO supports companies throughout every stage of international exhibition participation, from selecting the right event to completing a successful exhibition experience.",
    },

    tr: {
      label: "Hizmetler",
      title:
        "Uluslararası Başarı İçin Profesyonel Fuar Hizmetleri",
      description:
        "EREXPO, doğru fuarın seçilmesinden başarılı bir katılım sürecinin tamamlanmasına kadar uluslararası fuar katılımının her aşamasında şirketlere destek olur.",
    },
  };

  const t = content[language];

  return (
    <section className="services-hero">
      <div className="container services-hero-layout">
        <div className="services-hero-heading">
          <p className="section-label">
            {t.label}
          </p>

          <h1>{t.title}</h1>
        </div>

        <div className="services-hero-intro">
          <p>{t.description}</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;