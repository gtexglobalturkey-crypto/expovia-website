import { useTranslation } from "../../hooks/useTranslation";

import headline from "../../assets/exhibitions/wampex/sponsors-headline.png";
import silver from "../../assets/exhibitions/wampex/sponsors-silver.png";
import bronze from "../../assets/exhibitions/wampex/sponsors-bronze.png";
import event from "../../assets/exhibitions/wampex/sponsors-event.png";
import media from "../../assets/exhibitions/wampex/sponsors-media.png";
import organizers from "../../assets/exhibitions/wampex/sponsors-organizers.png";

function ExhibitionSponsors() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Sponsors & Organization",
      title: "Leading Names of the Industry on the Show Floor",
      description:
        "Official sponsors, partners and media partners of the exhibition.",
      mainTiers: [
        {
          src: headline,
          alt: "Headline & Gold Sponsors: AngloGold Ashanti, Gold Fields, B5Plus Group, Newmont, Sandvik, Dutylex, FLS, Zijin, Solevo, Tata Africa",
        },
        {
          src: silver,
          alt: "Silver Sponsors & Financial Partner: China-Ghana Mining Association, Multi-Tech Services, ChNT, JODI Construction, JODI Drilling Services, Cardinal Namdini, Stanbic Bank, Gekko, Hexagon, Lyon Partner Alliance",
        },
        {
          src: bronze,
          alt: "Bronze Sponsors: Kobelco, Sampec, Storm West Africa, Arridex, Heath Goldfields, HMD, Tuboshu, Power X Equipment, Mac Partners, Riepco",
        },
        {
          src: event,
          alt: "Event Sponsors: Wafor, Dutylex (Gala Dinner Sponsor), Gekko (Conference Catering Sponsor), Rand Refinery & Gold Coast Refinery (Delegate Bag Sponsor), Devtraco Group (VIP Cocktail Sponsor), Travel Desk (Official Travel Partner)",
        },
      ],
      mediaLabel: "Media Partners",
      mediaAlt:
        "Media Partners: Sub-Sahara Mining and Industrial Journal, Creamer Media's Mining Weekly, Mining Review Africa",
      organizersLabel: "Organizing Institutions",
      organizersAlt:
        "Organizing institutions: EPI (Events and Projects International), Ghana Chamber of Mines, dmg events",
      organizersLine:
        "WAMPEX West Africa is organized in partnership with DMG Events, EPI (Extractive Policy Institute) and the Ghana Chamber of Mines.",
    },

    tr: {
      label: "Sponsorlar & Organizasyon",
      title: "Sektörün Önde Gelen İsimleri Sahada",
      description:
        "Fuarın resmi sponsorları, iş ortakları ve medya partnerleri.",
      mainTiers: [
        {
          src: headline,
          alt: "Headline ve Altın Sponsorlar: AngloGold Ashanti, Gold Fields, B5Plus Group, Newmont, Sandvik, Dutylex, FLS, Zijin, Solevo, Tata Africa",
        },
        {
          src: silver,
          alt: "Gümüş Sponsorlar ve Finansal Ortak: China-Ghana Mining Association, Multi-Tech Services, ChNT, JODI Construction, JODI Drilling Services, Cardinal Namdini, Stanbic Bank, Gekko, Hexagon, Lyon Partner Alliance",
        },
        {
          src: bronze,
          alt: "Bronz Sponsorlar: Kobelco, Sampec, Storm West Africa, Arridex, Heath Goldfields, HMD, Tuboshu, Power X Equipment, Mac Partners, Riepco",
        },
        {
          src: event,
          alt: "Etkinlik Sponsorları: Wafor, Dutylex (Gala Yemeği Sponsoru), Gekko (Konferans İkram Sponsoru), Rand Refinery ve Gold Coast Refinery (Delege Çantası Sponsoru), Devtraco Group (VIP Kokteyl Sponsoru), Travel Desk (Resmi Seyahat Ortağı)",
        },
      ],
      mediaLabel: "Medya Partnerleri",
      mediaAlt:
        "Medya Partnerleri: Sub-Sahara Mining and Industrial Journal, Creamer Media's Mining Weekly, Mining Review Africa",
      organizersLabel: "Düzenleyen Kurumlar",
      organizersAlt:
        "Düzenleyen kurumlar: EPI (Events and Projects International), Ghana Chamber of Mines, dmg events",
      organizersLine:
        "WAMPEX West Africa; DMG Events, EPI (Extractive Policy Institute) ve Ghana Chamber of Mines işbirliğiyle düzenlenmektedir.",
    },
  };

  const t = content[language] ?? content.en;

  return (
    <section className="exhibition-sponsors section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="section-label">{t.label}</p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="sponsor-wall">
          {t.mainTiers.map((tier) => (
            <div
              key={tier.alt}
              className="sponsor-row"
            >
              <img
                src={tier.src}
                alt={tier.alt}
              />
            </div>
          ))}
        </div>

        <div className="sponsor-block">
          <span className="tier-label">{t.mediaLabel}</span>

          <div className="sponsor-wall">
            <div className="sponsor-row">
              <img
                src={media}
                alt={t.mediaAlt}
              />
            </div>
          </div>
        </div>

        <div className="sponsor-block">
          <span className="tier-label">{t.organizersLabel}</span>

          <div className="sponsor-wall">
            <div className="sponsor-row">
              <img
                src={organizers}
                alt={t.organizersAlt}
              />
            </div>
          </div>

          <p className="organizers-line">{t.organizersLine}</p>
        </div>
      </div>
    </section>
  );
}

export default ExhibitionSponsors;
