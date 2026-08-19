import { CreditCard, Image, Mic, Receipt } from "lucide-react";

import { useTranslation } from "../../hooks/useTranslation";

import problemIllustration from "../../assets/images/viamate/illustrations/viamate-illustration-problem.webp";

const SCATTER_ICONS = [CreditCard, Image, Mic, Receipt];

function ViamateProblem() {
  const { language } = useTranslation();

  const content = {
    en: {
      title: "Business cards, notes, photos… All somewhere else.",
      paragraphs: [
        "Business cards in your pocket. Photos in your gallery. Notes somewhere else. Meeting recordings, documents, and receipts scattered across your phone.",
        "By the time the trip is over, you are left trying to remember who each item belonged to, where it came from, and why you saved it.",
      ],
      callout:
        "VIAMATE brings everything together around one Workspace.",
    },

    tr: {
      title: "Kartvizitler, notlar, fotoğraflar… Hepsi başka yerde.",
      paragraphs: [
        "Kartvizitler cebinizde. Fotoğraflar galerinizde. Notlar başka yerde. Görüşme kayıtları, belgeler ve fişler telefonunuzun farklı köşelerinde.",
        "Seyahat bittiğinde ise bütün bunları kiminle, nerede ve neden topladığınızı yeniden hatırlamaya çalışırsınız.",
      ],
      callout:
        "VIAMATE, bunların hepsini yaptığınız çalışma etrafında bir araya getirir.",
    },
  };

  const t = content[language];

  return (
    <section className="viamate-section">
      <div className="container viamate-illustration-host">
        <div className="viamate-section-inner viamate-problem-inner">
          <div className="viamate-scatter-icons" aria-hidden="true">
            {SCATTER_ICONS.map((Icon, index) => (
              <span
                className="viamate-scatter-icon"
                key={index}
              >
                <Icon size={18} />
              </span>
            ))}
          </div>

          <span
            className="viamate-motif-rule"
            aria-hidden="true"
          />

          <h2>{t.title}</h2>

          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <p className="viamate-callout">{t.callout}</p>
        </div>

        <img
          src={problemIllustration}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="viamate-story-illustration viamate-story-illustration--problem viamate-story-illustration--left"
        />
      </div>
    </section>
  );
}

export default ViamateProblem;
