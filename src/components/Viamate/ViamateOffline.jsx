import { useTranslation } from "../../hooks/useTranslation";

import offlineBadgeEn from "../../assets/images/viamate/illustrations/viamate-offline-badge-en.png";
import offlineBadgeTr from "../../assets/images/viamate/illustrations/viamate-offline-badge-tr.png";

function ViamateOffline() {
  const { language } = useTranslation();

  const content = {
    en: {
      title: "Your internet connection should not decide whether you can work.",
      lead: "VIAMATE is designed",
      leadEmphasis: "offline-first",
      leadTrail: "for field use.",
      paragraph2:
        "Create your Workspace, capture information, and stay organized without depending on a continuous internet connection.",
      paragraph3:
        "Keep working in an exhibition hall, on the road, or anywhere the connection is unreliable.",
    },

    tr: {
      title: "Bağlantı sorunu işinizi engellemesin.",
      lead: "VIAMATE saha kullanımı için",
      leadEmphasis: "offline-first",
      leadTrail: "tasarlandı.",
      paragraph2:
        "Çalışmanızı oluşturmak, sahadaki bilgilerinizi toplamak ve düzenlemek için sürekli internet bağlantısına bağımlı kalmayın.",
      paragraph3:
        "Fuar alanında, seyahatte veya bağlantının güvenilir olmadığı bir yerde de çalışmaya devam edin.",
    },
  };

  const t = content[language];
  const offlineBadge = language === "tr" ? offlineBadgeTr : offlineBadgeEn;

  return (
    <section className="viamate-section viamate-section--alt viamate-offline-section">
      <div className="container viamate-illustration-host">
        <div className="viamate-section-inner">
          <span
            className="viamate-motif-rule"
            aria-hidden="true"
          />

          <h2>{t.title}</h2>

          <p>
            {t.lead}{" "}
            <span className="viamate-inline-emphasis">{t.leadEmphasis}</span>{" "}
            {t.leadTrail}
          </p>

          <p>{t.paragraph2}</p>

          <p>{t.paragraph3}</p>
        </div>

        <img
          src={offlineBadge}
          alt=""
          aria-hidden="true"
          className="viamate-story-illustration viamate-story-illustration--offline-badge viamate-story-illustration--right"
        />
      </div>
    </section>
  );
}

export default ViamateOffline;
