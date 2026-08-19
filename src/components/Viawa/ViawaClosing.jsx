import { useTranslation } from "../../hooks/useTranslation";

import Button from "../ui/Button";

function ViawaClosing({ onOpenLogin }) {
  const { language } = useTranslation();

  const content = {
    en: {
      heading: "Built by VIAFA. Used by VIAFA.",
      text: "VIAWA is not a commercially offered software product. It is the internal work platform developed by VIAFA for its international exhibition operations.",
      cta: "Sign in to VIAWA",
    },

    tr: {
      heading: "VIAFA tarafından geliştirildi, VIAFA tarafından kullanılıyor.",
      text: "VIAWA ticari olarak sunulan bir yazılım değildir. VIAFA'nın uluslararası fuar operasyonları için geliştirdiği dahili çalışma platformudur.",
      cta: "VIAWA'ya Giriş Yap",
    },
  };

  const t = content[language];

  return (
    <section className="viawa-closing">
      <div className="container">
        <div className="viawa-closing-card">
          <h2>{t.heading}</h2>

          <p>{t.text}</p>

          <Button
            variant="primary"
            size="medium"
            className="viawa-closing-cta"
            onClick={onOpenLogin}
          >
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ViawaClosing;
