import { useTranslation } from "../../hooks/useTranslation";

import remas from "../../assets/exhibitions/wampex/tr-logos/remas.png";
import atcovi from "../../assets/exhibitions/wampex/tr-logos/atcovi.png";
import hidroport from "../../assets/exhibitions/wampex/tr-logos/hidroport.png";
import generalMakina from "../../assets/exhibitions/wampex/tr-logos/general-makina.png";
import isikCelik from "../../assets/exhibitions/wampex/tr-logos/isik-celik.png";
import nevon from "../../assets/exhibitions/wampex/tr-logos/nevon.png";
import besson from "../../assets/exhibitions/wampex/tr-logos/besson.png";
import cskSondaj from "../../assets/exhibitions/wampex/tr-logos/csk-sondaj.png";
import kirlioglu from "../../assets/exhibitions/wampex/tr-logos/kirlioglu.png";
import ersel from "../../assets/exhibitions/wampex/tr-logos/ersel.png";
import tiga from "../../assets/exhibitions/wampex/tr-logos/tiga.png";
import apspompa from "../../assets/exhibitions/wampex/tr-logos/apspompa.png";
import aksa from "../../assets/exhibitions/wampex/tr-logos/aksa.png";
import ypt from "../../assets/exhibitions/wampex/tr-logos/ypt.png";
import fabo from "../../assets/exhibitions/wampex/tr-logos/fabo.png";

const logos = [
  { name: "REMAS", src: remas },
  { name: "ATCOVI", src: atcovi },
  { name: "Hidroport Mühendislik", src: hidroport },
  { name: "General Makina", src: generalMakina },
  { name: "Işık Çelik", src: isikCelik },
  { name: "Nevon", src: nevon },
  { name: "Besson", src: besson },
  { name: "CSK Sondaj", src: cskSondaj },
  { name: "Kırlıoğlu", src: kirlioglu },
  { name: "Ersel", src: ersel },
  { name: "Tiga", src: tiga },
  { name: "APS Pompa", src: apspompa },
  { name: "Aksa Jeneratör", src: aksa },
  { name: "YPT Yılmaz Proses Teknolojileri", src: ypt },
  { name: "FABO", src: fabo },
];

function ExhibitionParticipants() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "From Previous Editions",
      title: "Turkish Participant Companies",
      description:
        "A selection of companies from Türkiye that took part in previous WAMPEX West Africa editions.",
    },

    tr: {
      label: "Geçmiş Dönemlerden",
      title: "Türkiye'den Katılımcı Firmalar",
      description:
        "Önceki WAMPEX West Africa edisyonlarına Türkiye'den katılan firmalardan bazıları.",
    },
  };

  const t = content[language] ?? content.en;

  return (
    <section className="exhibition-participants section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="section-label">{t.label}</p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="logo-grid">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="logo-tile"
            >
              <img
                src={logo.src}
                alt={logo.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExhibitionParticipants;
