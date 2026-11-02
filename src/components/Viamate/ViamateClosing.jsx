import { Apple, PlayCircle } from "lucide-react";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.viafa.viamate";

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
      availableOn: "Get it on",
      availability: "Available on Android. Coming soon on iOS.",
    },

    tr: {
      title:
        "Bir sonraki seyahatinizden sadece kartvizitlerle dönmeyin. Çalışmanızla dönün.",
      text: "Kartvizitlerinizi, kişilerinizi, görüşmelerinizi, notlarınızı, fotoğraflarınızı, belgelerinizi ve harcamalarınızı sahada toplayın. VIAMATE onları düzenli bir çalışma halinde sizinle birlikte geri getirsin.",
      philosophy: "Collect. Process. Transfer.",
      comingSoonOn: "Yakında",
      availableOn: "Şimdi indir",
      availability: "Android'de yayında. iOS yakında.",
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

            <a
              className="viamate-store-badge"
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={language === "tr" ? "VIAMATE'i Google Play'den indir" : "Get VIAMATE on Google Play"}
            >
              <PlayCircle size={22} aria-hidden="true" />
              <span className="viamate-store-badge-text">
                <span className="viamate-store-badge-label">{t.availableOn}</span>
                <span className="viamate-store-badge-store">Google Play</span>
              </span>
            </a>
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
