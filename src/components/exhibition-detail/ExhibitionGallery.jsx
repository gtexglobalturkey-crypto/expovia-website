import { useTranslation } from "../../hooks/useTranslation";

import entranceImage from "../../assets/exhibitions/wampex/gallery-entrance.jpg";
import boothImage from "../../assets/exhibitions/wampex/gallery-booth.jpg";
import aisleImage from "../../assets/exhibitions/wampex/gallery-aisle.jpg";
import teamImage from "../../assets/exhibitions/wampex/gallery-team.jpg";
import bannerImage from "../../assets/exhibitions/wampex/gallery-banner.jpg";

function ExhibitionGallery() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "From the Previous Edition",
      title: "The Energy on the Show Floor",
      images: [
        {
          src: entranceImage,
          alt: "WAMPEX West Africa entrance banner and registration area",
          caption: "Exhibition entrance",
        },
        {
          src: boothImage,
          alt: "Exhibitors and visitors meeting at a WAMPEX West Africa stand",
          caption: "Stand meetings & networking",
        },
        {
          src: aisleImage,
          alt: "Crowded aisle at the WAMPEX West Africa exhibition hall",
          caption: "A moment from the show floor",
        },
        {
          src: teamImage,
          alt: "VIAFA team at the Ege Atlas stand at WAMPEX West Africa",
          caption: "VIAFA team at the exhibitor stand",
        },
        {
          src: bannerImage,
          alt: "VIAFA representatives at the WAMPEX West Africa entrance",
          caption: "VIAFA at WAMPEX West Africa",
          focus: "center 20%",
        },
      ],
    },

    tr: {
      label: "Geçtiğimiz Edisyondan",
      title: "Sahada Yaşanan Enerji",
      images: [
        {
          src: entranceImage,
          alt: "WAMPEX West Africa giriş bannerı ve kayıt alanı",
          caption: "Fuar girişi",
        },
        {
          src: boothImage,
          alt: "WAMPEX West Africa standında katılımcılar ve ziyaretçiler arasında görüşme",
          caption: "Stant görüşmeleri ve networking",
        },
        {
          src: aisleImage,
          alt: "WAMPEX West Africa fuar salonunda kalabalık koridor ve fuar standları",
          caption: "Fuar salonundan bir kare",
        },
        {
          src: teamImage,
          alt: "VIAFA ekibi WAMPEX West Africa'da Ege Atlas standında",
          caption: "VIAFA ekibi katılımcı standında",
        },
        {
          src: bannerImage,
          alt: "VIAFA temsilcileri WAMPEX West Africa girişinde",
          caption: "WAMPEX West Africa'da VIAFA",
          focus: "center 20%",
        },
      ],
    },
  };

  const t = content[language] ?? content.en;

  return (
    <section className="exhibition-gallery section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="section-label">{t.label}</p>

          <h2>{t.title}</h2>
        </div>

        <div className="gallery-grid">
          {t.images.map((item) => (
            <figure
              key={item.caption}
              className="gallery-item"
            >
              <img
                src={item.src}
                alt={item.alt}
                style={item.focus ? { objectPosition: item.focus } : undefined}
              />

              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExhibitionGallery;
