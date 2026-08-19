import { Ban, Smartphone } from "lucide-react";

import { useTranslation } from "../../hooks/useTranslation";

import solutionIllustration from "../../assets/images/viamate/illustrations/viamate-illustration-solution.webp";

function ViamateTripOutcome() {
  const { language } = useTranslation();

  const content = {
    en: {
      title:
        "Come back from the trip with organized work — not a bag full of cards.",
      paragraphLead: "A business trip should not leave you with",
      paragraphEmphasis:
        "a bag full of business cards, an overstuffed notebook, and files scattered across your phone.",
      paragraphTrail: "",
      paragraph2:
        "With VIAMATE, collect your business cards, meeting notes, photos, documents, voice recordings, and expenses in an organized way throughout the trip.",
      before: "A bag full of business cards and an overstuffed notebook",
      after: "Just your phone",
      punchlineTitle: "Come back carrying only your phone.",
      punchlineText:
        "Move your files into your working environment and continue where you left off.",
    },

    tr: {
      title: "Seyahatten dağınıklıkla değil, düzenli bir çalışmayla dönün.",
      paragraphLead: "Bir iş seyahatinden geriye",
      paragraphEmphasis:
        "bir torba dolusu kartvizit, şişmiş not defterleri ve telefonun farklı köşelerine dağılmış dosyalar",
      paragraphTrail: " kalmasın.",
      paragraph2:
        "VIAMATE ile kartvizitlerinizi, görüşme notlarınızı, fotoğraflarınızı, belgelerinizi, ses kayıtlarınızı ve harcamalarınızı seyahat boyunca düzenli şekilde toplayın.",
      before: "Bir torba dolusu kartvizit ve şişmiş not defterleri",
      after: "Yalnızca telefonunuz",
      punchlineTitle: "Dönüşte yanınızda yalnızca telefonunuz olsun.",
      punchlineText:
        "Dosyalarınızı çalışma alanınıza taşıyın ve kaldığınız yerden devam edin.",
    },
  };

  const t = content[language];

  return (
    <section className="viamate-section">
      <div className="container viamate-illustration-host">
        <div className="viamate-section-inner viamate-tripoutcome-inner">
          <span
            className="viamate-motif-rule"
            aria-hidden="true"
          />

          <h2>{t.title}</h2>

          <p>
            {t.paragraphLead}{" "}
            <span className="viamate-inline-emphasis">
              {t.paragraphEmphasis}
            </span>
            {t.paragraphTrail}
          </p>

          <p>{t.paragraph2}</p>

          <div className="viamate-contrast-row" aria-hidden="true">
            <div className="viamate-contrast-item viamate-contrast-item--before">
              <Ban size={16} />
              <span>{t.before}</span>
            </div>

            <div className="viamate-contrast-item viamate-contrast-item--after">
              <Smartphone size={16} />
              <span>{t.after}</span>
            </div>
          </div>

          <div className="viamate-punchline-card">
            <h3>{t.punchlineTitle}</h3>

            <p>{t.punchlineText}</p>
          </div>
        </div>

        <img
          src={solutionIllustration}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="viamate-story-illustration viamate-story-illustration--solution viamate-story-illustration--left"
        />
      </div>
    </section>
  );
}

export default ViamateTripOutcome;
