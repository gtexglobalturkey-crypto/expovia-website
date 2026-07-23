import { useTranslation } from "../../hooks/useTranslation";

function Values() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Our Values",
      title: "The Principles Behind Every Partnership",
      description:
        "Our approach is built on trust, professionalism and a long-term commitment to the companies and organizers we represent.",

      values: [
        {
          number: "01",
          title: "Trust",
          description:
            "We build long-term relationships through clear communication, reliable guidance and responsible representation.",
        },
        {
          number: "02",
          title: "Professionalism",
          description:
            "We manage every exhibition process with careful planning, strong coordination and attention to detail.",
        },
        {
          number: "03",
          title: "Transparency",
          description:
            "We provide companies with clear information about exhibitions, participation requirements and every stage of the process.",
        },
        {
          number: "04",
          title: "Global Perspective",
          description:
            "We connect Turkish businesses with international opportunities that support sustainable export growth.",
        },
      ],
    },

    tr: {
      label: "Değerlerimiz",
      title: "Her İş Birliğinin Temelindeki İlkeler",
      description:
        "Yaklaşımımız; güven, profesyonellik ve temsil ettiğimiz şirketler ile organizatörlere karşı uzun vadeli bağlılık üzerine kuruludur.",

      values: [
        {
          number: "01",
          title: "Güven",
          description:
            "Açık iletişim, güvenilir yönlendirme ve sorumlu temsil anlayışıyla uzun vadeli ilişkiler kurarız.",
        },
        {
          number: "02",
          title: "Profesyonellik",
          description:
            "Her fuar sürecini dikkatli planlama, güçlü koordinasyon ve ayrıntılara gösterilen özenle yönetiriz.",
        },
        {
          number: "03",
          title: "Şeffaflık",
          description:
            "Şirketlere fuarlar, katılım koşulları ve sürecin her aşaması hakkında açık ve anlaşılır bilgi sunarız.",
        },
        {
          number: "04",
          title: "Küresel Bakış Açısı",
          description:
            "Türk şirketlerini sürdürülebilir ihracat büyümesini destekleyen uluslararası fırsatlarla buluştururuz.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="about-values section-spacing">
      <div className="container">
        <div className="about-values-heading">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="about-values-grid">
          {t.values.map((value) => (
            <article
              key={value.number}
              className="about-value-card"
            >
              <span>{value.number}</span>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;