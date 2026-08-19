import { useTranslation } from "../../hooks/useTranslation";

import Button from "../ui/Button";

import workspaceImage from "../../assets/images/viawa/viawa-workspace.png";

function ViawaHero({ onOpenLogin }) {
  const { language } = useTranslation();

  const content = {
    en: {
      eyebrow: "VIAFA Internal Work Assistant",
      title: "The digital workspace behind VIAFA operations",
      description:
        "VIAWA is VIAFA's internal platform for managing international exhibition operations.",
      highlights: [
        "Runs the full exhibition process from a single screen",
        "Surfaces at-risk opportunities and pending tasks first",
        "Keeps team communication and documents in one place",
      ],
      cta: "Sign in to VIAWA",
      note: "For authorized VIAFA team members only.",
    },

    tr: {
      eyebrow: "VIAFA İç Operasyon Asistanı",
      title: "VIAFA operasyonlarının dijital çalışma alanı",
      description:
        "VIAWA, VIAFA'nın uluslararası fuar operasyonlarını yönettiği dahili çalışma platformudur.",
      highlights: [
        "Fuar sürecini uçtan uca tek ekranda yönetir",
        "Riskli fırsatları ve bekleyen görevleri öne çıkarır",
        "Ekip içi iletişimi ve belgeleri tek merkezde toplar",
      ],
      cta: "VIAWA'ya Giriş Yap",
      note: "Yalnızca yetkili VIAFA ekip üyeleri içindir.",
    },
  };

  const t = content[language];

  return (
    <section className="viawa-hero">
      <div className="container viawa-hero-layout">
        <div className="viawa-hero-copy">
          <p className="section-label">{t.eyebrow}</p>

          <h1>{t.title}</h1>

          <p className="viawa-hero-description">{t.description}</p>

          <ul className="viawa-hero-highlights">
            {t.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="viawa-hero-actions">
            <Button
              variant="primary"
              size="medium"
              onClick={onOpenLogin}
            >
              {t.cta}
            </Button>

            <p className="viawa-hero-note">{t.note}</p>
          </div>
        </div>

        <div className="viawa-hero-visual">
          <div className="viawa-hero-visual-frame">
            <div className="viawa-hero-visual-bar">
              <span />
              <span />
              <span />
            </div>

            <img
              src={workspaceImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViawaHero;
