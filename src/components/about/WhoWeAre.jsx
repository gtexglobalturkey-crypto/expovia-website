import { useTranslation } from "../../hooks/useTranslation";

import sideNotePhoto from "../../assets/images/about/optimized/feature-mining-show.jpg";

function WhoWeAre() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Our Story",
      titleFirst: "Built on Experience.",
      titleSecond: "Founded with Purpose.",
      paragraphs: [
        "VIAFA was established after more than 15 years of hands-on experience in the international exhibition industry. Throughout this journey, we worked closely with exhibition organizers, manufacturers, exporters and business professionals across different markets.",
        "We have experienced every stage of the exhibition process — from planning and stand allocation to exhibitor support, organizer coordination and international business development. This practical experience allows us to understand not only exhibitions, but also the real expectations of companies participating in them.",
        "Today, VIAFA combines that experience with a modern, transparent and client-focused approach, helping Turkish companies participate in international exhibitions with confidence and long-term strategic value.",
      ],
      noteLabel: "15+ YEARS OF EXPERIENCE",
      noteTitle:
        "VIAFA may be a new company, but the experience behind it has been built over more than 15 years.",
      noteDescription:
        "Our goal is simple: to transform years of industry knowledge into reliable international exhibition representation for Turkish companies seeking sustainable global growth.",
    },

    tr: {
      label: "Hikâyemiz",
      titleFirst: "Deneyim Üzerine Kuruldu.",
      titleSecond: "Bir Amaçla Hayata Geçti.",
      paragraphs: [
        "VIAFA, uluslararası fuarcılık sektöründe 15 yılı aşkın saha deneyiminin ardından kurulmuştur. Bu süreç boyunca farklı pazarlarda fuar organizatörleri, üreticiler, ihracatçılar ve iş profesyonelleriyle yakın çalıştık.",
        "Planlama ve stant tahsisinden katılımcı desteğine, organizatör koordinasyonundan uluslararası iş geliştirmeye kadar fuar sürecinin her aşamasını bizzat deneyimledik. Bu sayede yalnızca fuarları değil, fuarlara katılan şirketlerin gerçek beklentilerini de yakından biliyoruz.",
        "Bugün VIAFA, bu deneyimi modern, şeffaf ve müşteri odaklı bir yaklaşımla birleştirerek Türk şirketlerinin uluslararası fuarlara güvenle katılmasına ve uzun vadeli stratejik değer oluşturmasına yardımcı olmaktadır.",
      ],
      noteLabel: "15+ YILLIK DENEYİM",
      noteTitle:
        "VIAFA yeni bir şirket olabilir, ancak arkasındaki deneyim 15 yılı aşkın bir sürede oluşturuldu.",
      noteDescription:
        "Hedefimiz basit: yılların sektör bilgisini, sürdürülebilir küresel büyüme hedefleyen Türk şirketleri için güvenilir uluslararası fuar temsilciliğine dönüştürmek.",
    },
  };

  const t = content[language];

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <p className="section-label">
              {t.label}
            </p>

            <h2>
              {t.titleFirst}
              <br />
              {t.titleSecond}
            </h2>

            {t.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          <div
            className="about-side-note"
            style={{ "--side-note-photo": `url(${sideNotePhoto})` }}
          >
            <span>{t.noteLabel}</span>

            <h3>{t.noteTitle}</h3>

            <p>{t.noteDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;