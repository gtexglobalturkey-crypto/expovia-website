import { Apple } from "lucide-react";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.viafa.viamate";

import { useTranslation } from "../../hooks/useTranslation";

import viamateLogo from "../../assets/images/viamate/viamate-logo.png";
import viamateHomeScreenshotEn from "../../assets/images/viamate/optimized/viamate-home.webp";
import viamateHomeScreenshotTr from "../../assets/images/viamate/optimized/viamate-home-tr.webp";

import ViamatePhoneScreenshot from "./ViamatePhoneScreenshot";

function ViamateHero() {
  const { language } = useTranslation();

  const content = {
    en: {
      eyebrow: "VIAMATE",
      title: "Collect. Process. Transfer.",
      lead: "Organize everything you collect in the field inside one Workspace — and take it with you when the work is done.",
      description: [
        "Across exhibitions, business trips, and field meetings, business cards, contacts, notes, photos, documents, voice recordings, meetings, and expenses should not end up scattered across different places.",
        "VIAMATE brings everything together around the work you are actually doing, keeps it organized, and gives it back to you when the job is complete.",
      ],
      comingSoonOn: "Coming soon on",
      availableOn: "Get it on",
      availability: "Available on Android. Coming soon on iOS.",
      homeScreenshotAlt: "VIAMATE Home screen",
    },

    tr: {
      eyebrow: "VIAMATE",
      title: "Collect. Process. Transfer.",
      lead: "Sahada topladığınız her şeyi tek bir Çalışmada düzenleyin ve işiniz bittiğinde yanınıza alın.",
      description: [
        "Fuarlar, iş seyahatleri ve saha görüşmeleri boyunca kartvizitler, kişiler, notlar, fotoğraflar, belgeler, ses kayıtları, görüşmeler ve harcamalar birbirinden kopmasın.",
        "VIAMATE, sahada topladığınız bilgileri bir çalışma etrafında bir araya getirir, düzenler ve işiniz bittiğinde size teslim eder.",
      ],
      comingSoonOn: "Yakında",
      availableOn: "Şimdi indir",
      availability: "Android'de yayında. iOS yakında.",
      homeScreenshotAlt: "VIAMATE Ana Ekranı",
    },
  };

  const t = content[language];
  const homeScreenshot =
    language === "tr" ? viamateHomeScreenshotTr : viamateHomeScreenshotEn;

  return (
    <section className="viamate-hero">
      <div className="container viamate-hero-layout">
        <div className="viamate-hero-copy">
          <img
            src={viamateLogo}
            alt={t.eyebrow}
            className="viamate-hero-logo"
          />

          <h1>{t.title}</h1>

          <p className="viamate-hero-lead">{t.lead}</p>

          {t.description.map((paragraph) => (
            <p
              key={paragraph}
              className="viamate-hero-description"
            >
              {paragraph}
            </p>
          ))}

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

          <p className="viamate-hero-availability-note"><strong style={{ fontWeight: 800, color: "#7c1737" }}>{language === "tr" ? "Android\u0027de yayında." : "Available on Android."}</strong>{" "}{language === "tr" ? "iOS yakında." : "Coming soon on iOS."}</p>
        </div>

        <div className="viamate-hero-visual">
          <ViamatePhoneScreenshot
            image={homeScreenshot}
            alt={t.homeScreenshotAlt}
            eager
          />
        </div>
      </div>
    </section>
  );
}

export default ViamateHero;
