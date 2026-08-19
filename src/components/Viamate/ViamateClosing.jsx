import { Apple, PlayCircle } from "lucide-react";

import { useTranslation } from "../../hooks/useTranslation";

import transferSceneEn from "../../assets/images/viamate/illustrations/viamate-closing-transfer-en.png";
import transferSceneTr from "../../assets/images/viamate/illustrations/viamate-closing-transfer-tr.png";

function ViamateClosing() {
  const { language } = useTranslation();

  const content = {
    en: {
      title:
        "Do not come back from your next trip with only business cards. Come back with your work.",
      text: "Capture your business cards, contacts, meetings, notes, photos, documents, and expenses while you are in the field. Let VIAMATE bring them back with you as an organized Workspace.",
      philosophy: "Collect. Process. Transfer.",
      comingSoonOn: "Coming soon on",
      availability: "Coming soon on iOS and Android.",
    },

    tr: {
      title:
        "Bir sonraki seyahatinizden sadece kartvizitlerle dönmeyin. Çalışmanızla dönün.",
      text: "Kartvizitlerinizi, kişilerinizi, görüşmelerinizi, notlarınızı, fotoğraflarınızı, belgelerinizi ve harcamalarınızı sahada toplayın. VIAMATE onları düzenli bir çalışma halinde sizinle birlikte geri getirsin.",
      philosophy: "Collect. Process. Transfer.",
      comingSoonOn: "Yakında",
      availability: "Yakında iOS ve Android'de.",
    },
  };

  const t = content[language];
  const transferScene = language === "tr" ? transferSceneTr : transferSceneEn;

  return (
    <section className="viamate-closing">
      <div className="container viamate-illustration-host">
        <div className="viamate-closing-card">
          <h2>{t.title}</h2>

          <p>{t.text}</p>

          <p className="viamate-closing-philosophy">{t.philosophy}</p>

          <div className="viamate-store-badges">
            <div className="viamate-store-badge">
              <Apple
                size={22}
                aria-hidden="true"
              />
              <span className="viamate-store-badge-text">
                <span className="viamate-store-badge-label">
                  {t.comingSoonOn}
                </span>
                <span className="viamate-store-badge-store">App Store</span>
              </span>
            </div>

            <div className="viamate-store-badge">
              <PlayCircle
                size={22}
                aria-hidden="true"
              />
              <span className="viamate-store-badge-text">
                <span className="viamate-store-badge-label">
                  {t.comingSoonOn}
                </span>
                <span className="viamate-store-badge-store">Google Play</span>
              </span>
            </div>
          </div>

          <p className="viamate-closing-availability-note">
            {t.availability}
          </p>
        </div>

        <img
          src={transferScene}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="viamate-story-illustration viamate-story-illustration--transfer-scene viamate-story-illustration--right"
        />
      </div>
    </section>
  );
}

export default ViamateClosing;
