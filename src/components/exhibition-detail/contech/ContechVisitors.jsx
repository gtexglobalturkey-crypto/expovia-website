import { useTranslation } from "../../../hooks/useTranslation";

// The organizer's verified visitor target groups, sorted into three
// readable groups. No visitor numbers are published for 2027.
function ContechVisitors() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Visitor Profile",
      title: "Who You Will Meet",
      description:
        "The organizer's target visitors are professionals and organizations involved in construction, mining and transport infrastructure projects.",

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

  return (
    <section className="exhibition-profiles contech-visitors section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
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
