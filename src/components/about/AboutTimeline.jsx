import { useTranslation } from "../../hooks/useTranslation";

import photo2018 from "../../assets/images/about/optimized/timeline-2018.jpg";
import photo2021 from "../../assets/images/about/optimized/timeline-2021.jpg";
import photo2024a from "../../assets/images/about/optimized/timeline-2024.jpg";
import photo2024b from "../../assets/images/about/optimized/timeline-2024b.jpg";
import photo2025 from "../../assets/images/about/optimized/timeline-2025.jpg";
import photo2026 from "../../assets/images/about/optimized/timeline-2026.jpg";

function AboutTimeline() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Our Journey",
      title: "15+ Years, One Fair at a Time",
      description:
        "A few frames from the exhibition floors we've worked — the years that led to EXPOVIA.",
      milestones: [
        { caption: "On the exhibition floor" },
        { caption: "Together" },
        { caption: "Hands-on, on site" },
        { caption: "Going international" },
        { caption: "At global scale" },
        { caption: "Today" },
      ],
    },

    tr: {
      label: "Yolculuğumuz",
      title: "15+ Yıl, Fuar Fuar",
      description:
        "Çalıştığımız fuar sahalarından birkaç kare — EXPOVIA'ya uzanan yıllar.",
      milestones: [
        { caption: "Fuar sahasında" },
        { caption: "Birlikte" },
        { caption: "Sahada, bizzat" },
        { caption: "Uluslararası adımlar" },
        { caption: "Küresel ölçekte" },
        { caption: "Bugün" },
      ],
    },
  };

  const t = content[language];
  const photos = [photo2018, photo2021, photo2024a, photo2024b, photo2025, photo2026];

  return (
    <section className="about-timeline">
      <div className="container">
        <div className="about-timeline-heading">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="about-timeline-strip">
          {t.milestones.map((item, index) => (
            <figure
              key={item.caption}
              className="about-timeline-item"
              style={{ backgroundImage: `url(${photos[index]})` }}
            >
              <figcaption>
                <p>{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutTimeline;
