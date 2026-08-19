import { Apple, PlayCircle } from "lucide-react";

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
      availability: "Coming soon on iOS and Android.",
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
      availability: "Yakında iOS ve Android'de.",
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

          <p className="viamate-hero-availability-note">{t.availability}</p>
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
