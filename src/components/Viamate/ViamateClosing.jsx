import { Apple } from "lucide-react";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.viafa.viamate";

import { useTranslation } from "../../hooks/useTranslation";

import transferSceneEn from "../../assets/images/viamate/illustrations/viamate-closing-transfer-en.webp";
import transferSceneTr from "../../assets/images/viamate/illustrations/viamate-closing-transfer-tr.webp";

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
              className="viamate-store-badge viamate-store-badge--google-play"
              style={{ background: "#111", color: "#fff", border: "1px solid #333" }}
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={language === "tr" ? "VIAMATE'i Google Play'den indir" : "Get VIAMATE on Google Play"}
            >
              <svg width="25" height="27" viewBox="0 0 25 27" aria-hidden="true" focusable="false">
                <path fill="#00D0FF" d="M1 1.3v24.4l12.2-12.2z" />
                <path fill="#00E676" d="M1 1.3 16.5 10l-3.3 3.5z" />
                <path fill="#FF3D00" d="m1 25.7 15.5-8.7-3.3-3.5z" />
                <path fill="#FFCA28" d="m16.5 10 6.5 3.6c1.1.6 1.1 1.2 0 1.8L16.5 19l-3.3-5.5z" />
              </svg>
              <span className="viamate-store-badge-text">
                <span className="viamate-store-badge-label">{t.availableOn}</span>
                <span className="viamate-store-badge-store">Google Play</span>
              </span>
            </a>
          </div>

          <p className="viamate-closing-availability-note">
            <strong style={{ fontWeight: 800, color: "#7c1737" }}>{language === "tr" ? "Android\u0027de yayında." : "Available on Android."}</strong>{" "}{language === "tr" ? "iOS yakında." : "Coming soon on iOS."}
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
