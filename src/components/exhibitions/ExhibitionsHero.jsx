import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionsHero() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "International Exhibitions",
      title: "Our International Exhibition Portfolio",
      description:
        "VIAFA is building its international exhibition portfolio and establishing partnerships with leading international exhibition organizers. Confirmed exhibitions and participation opportunities are published below as agreements are finalized.",
    },

    tr: {
      label: "Uluslararası Fuarlar",
      title: "Uluslararası Fuar Portföyümüz",
      description:
        "VIAFA, uluslararası fuar portföyünü oluşturmakta ve önde gelen uluslararası fuar organizatörleriyle iş birlikleri kurmaktadır. Anlaşmalar tamamlandıkça onaylanmış fuarlar ve katılım fırsatları aşağıda yayımlanmaktadır.",
    },
  };

  const t = content[language];

  return (
    <section className="exhibitions-hero section-spacing">
      <div className="container exhibitions-hero-container">
        <p className="section-label">
          {t.label}
        </p>

        <h1>{t.title}</h1>

        <p className="hero-description">
          {t.description}
        </p>
      </div>
    </section>
  );
}

export default ExhibitionsHero;