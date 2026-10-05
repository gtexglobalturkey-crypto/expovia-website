import { useTranslation } from "../../../hooks/useTranslation";

import {
  CONTECH_OFFICIAL_NAME,
  CONTECH_ORGANIZER,
} from "../../../data/contechVietnam2027";

// Same layout as SecurexOverview; the right column shows the verified
// official details instead of photography (no approved 2027 imagery yet).
function ContechOverview() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "About the Exhibition",
      title: "One Platform for Construction, Mining and Transport Infrastructure",
      lead:
        "CONTECH Vietnam brings together machinery, equipment, technologies, vehicles and materials serving construction, mining and transport infrastructure.",
      secondary:
        "The 2027 edition takes place on 23–25 June at the Vietnam Exposition Center (VEC) in Hanoi, giving companies from Türkiye a platform to present their products and solutions to contractors, investors, engineers and other professionals in these sectors.",
      factsLabel: "Key Information",
      factsTitle: "Exhibition Details",
      officialNameLabel: "Official Name",
      dateLabel: "Date",
      date: "23–25 June 2027",
      venueLabel: "Venue",
      venue:
        "Vietnam Exposition Center (VEC), Tu Lien Bridge Road, Dong Anh, Hanoi, Vietnam",
      organizerLabel: "Organizer",
    },

    tr: {
      label: "Fuar Hakkında",
      title: "İnşaat, Madencilik ve Ulaştırma Altyapısı İçin Tek Platform",
      lead:
        "CONTECH Vietnam; inşaat, madencilik ve ulaştırma altyapısına hizmet eden makine, ekipman, teknoloji, araç ve malzemeleri bir araya getirir.",
      secondary:
        "2027 edisyonu 23–25 Haziran tarihlerinde Hanoi'deki Vietnam Exposition Center'da (VEC) düzenlenir ve Türkiye'deki firmalara ürün ve çözümlerini bu sektörlerdeki yüklenicilere, yatırımcılara, mühendislere ve diğer profesyonellere sunabilecekleri bir platform sağlar.",
      factsLabel: "Temel Bilgiler",
      factsTitle: "Fuar Detayları",
      officialNameLabel: "Resmî Adı",
      dateLabel: "Tarih",
      date: "23–25 Haziran 2027",
      venueLabel: "Fuar Alanı",
      venue:
        "Vietnam Exposition Center (VEC), Tu Lien Bridge Road, Dong Anh, Hanoi, Vietnam",
      organizerLabel: "Organizatör",
    },
  };

  const t = content[language];

  return (
    <section
      id="overview"
      className="exhibition-overview contech-overview section-spacing"
    >
      <div className="container">
        <div className="overview-layout">
          <div className="overview-intro">
            <p className="section-label">
              {t.label}
            </p>

            <h2>{t.title}</h2>

            <p className="overview-lead">
              {t.lead}
            </p>

            <p className="overview-secondary">
              {t.secondary}
            </p>
          </div>

          <div className="overview-facts-panel">
            <div className="overview-facts-header">
              <p className="section-label">
                {t.factsLabel}
              </p>

              <h3>{t.factsTitle}</h3>
            </div>

            <div className="overview-facts-grid">
              <div className="overview-fact-card contech-fact-wide">
                <span>{t.officialNameLabel}</span>

                <strong lang="en">{CONTECH_OFFICIAL_NAME}</strong>
              </div>

              <div className="overview-fact-card">
                <span>{t.dateLabel}</span>

                <strong>{t.date}</strong>
              </div>

              <div className="overview-fact-card">
                <span>{t.organizerLabel}</span>

                <strong lang="en">{CONTECH_ORGANIZER}</strong>
              </div>

              <div className="overview-fact-card contech-fact-wide">
                <span>{t.venueLabel}</span>

                <strong>{t.venue}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContechOverview;
