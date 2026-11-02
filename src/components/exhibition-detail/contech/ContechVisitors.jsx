import { useTranslation } from "../../../hooks/useTranslation";

import { CONTECH_IMAGES } from "../../../data/contechVietnam2027";

// The organizer's verified visitor target groups, sorted into three
// readable groups. No visitor numbers are published for 2027. The photo is
// from the previous edition: its banner shows the 2026 dates, so the caption
// must stay.
function ContechVisitors() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Visitor Profile",
      title: "Who You Will Meet",
      description:
        "The organizer's target visitors are professionals and organizations involved in construction, mining and transport infrastructure projects.",
      photoAlt:
        "Visitors and press gathered at the conference room entrance at the Vietnam Exposition Center during the previous CONTECH Vietnam edition",
      photoCaption: "Previous edition, September 2026 · VEC, Hanoi",

      groups: [
        {
          id: "technical",
          badge: "TECHNICAL",
          title: "Design, Engineering & Consulting",
          items: [
            "Architects",
            "Engineers and technical specialists",
            "Consulting and R&D professionals",
            "Project design, supervision and management organizations",
          ],
        },
        {
          id: "projects",
          badge: "PROJECTS",
          title: "Contractors, Projects & Investors",
          items: [
            "Construction contractors",
            "Transport infrastructure contractors",
            "Mining project representatives",
            "Construction and building-material project representatives",
            "Project management organizations",
            "Investors",
          ],
        },
        {
          id: "institutions",
          badge: "INSTITUTIONS",
          title: "Associations & Organizations",
          items: [
            "Industry associations",
            "International organizations",
            "Trade-development organizations",
          ],
        },
      ],
    },

    tr: {
      label: "Ziyaretçi Profili",
      title: "Kimlerle Tanışacaksınız?",
      description:
        "Organizatörün hedef ziyaretçileri; inşaat, madencilik ve ulaştırma altyapısı projelerinde yer alan profesyoneller ve kuruluşlardır.",
      photoAlt:
        "Önceki CONTECH Vietnam edisyonunda Vietnam Exposition Center'daki konferans salonu girişinde toplanan ziyaretçiler ve basın mensupları",
      photoCaption: "Önceki edisyon, Eylül 2026 · VEC, Hanoi",

      groups: [
        {
          id: "technical",
          badge: "TEKNİK",
          title: "Tasarım, Mühendislik ve Danışmanlık",
          items: [
            "Mimarlar",
            "Mühendisler ve teknik uzmanlar",
            "Danışmanlık ve Ar-Ge profesyonelleri",
            "Proje tasarım, denetim ve yönetim kuruluşları",
          ],
        },
        {
          id: "projects",
          badge: "PROJELER",
          title: "Yükleniciler, Projeler ve Yatırımcılar",
          items: [
            "İnşaat yüklenicileri",
            "Ulaştırma altyapısı yüklenicileri",
            "Madencilik projesi temsilcileri",
            "İnşaat ve yapı malzemesi projesi temsilcileri",
            "Proje yönetim kuruluşları",
            "Yatırımcılar",
          ],
        },
        {
          id: "institutions",
          badge: "KURUMLAR",
          title: "Sektör Birlikleri ve Kuruluşlar",
          items: [
            "Sektör birlikleri",
            "Uluslararası kuruluşlar",
            "Ticareti geliştirme kuruluşları",
          ],
        },
      ],
    },
  };

  const t = content[language];
  const photo = CONTECH_IMAGES.visitors;

  return (
    <section className="exhibition-profiles contech-visitors section-spacing">
      <div className="container">
        <div className="contech-visitors-intro">
          <div className="section-header">
            <p className="section-label">
              {t.label}
            </p>

            <h2>{t.title}</h2>

            <p>{t.description}</p>
          </div>

          <figure className="contech-visitors-photo">
            <img
              src={photo.src}
              alt={t.photoAlt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
            />

            <figcaption>{t.photoCaption}</figcaption>
          </figure>
        </div>

        <div className="profiles-grid">
          {t.groups.map((group) => (
            <article
              key={group.id}
              className="profile-card"
            >
              <div className="profile-header">
                <span className="profile-badge">
                  {group.badge}
                </span>

                <h3>{group.title}</h3>
              </div>

              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContechVisitors;
