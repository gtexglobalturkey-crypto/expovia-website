import {
  ClipboardCheck,
  FileCheck,
  Headset,
  MapPinned,
  Search,
  Truck,
} from "lucide-react";

import { useTranslation } from "../../hooks/useTranslation";

function ServicesGrid() {
  const { language } = useTranslation();

  const content = {
    en: {
      services: [
        {
          number: "01",
          title: "Exhibition Selection",
          icon: Search,
          description:
            "Identifying the most suitable international exhibitions based on your industry, products and export objectives.",
        },
        {
          number: "02",
          title: "Participation Planning",
          icon: ClipboardCheck,
          description:
            "Planning your exhibition participation timeline, stand options and preparation process from start to finish.",
        },
        {
          number: "03",
          title: "Stand Reservation",
          icon: MapPinned,
          description:
            "Managing stand applications, location selection and communication with international organizers.",
        },
        {
          number: "04",
          title: "Documentation",
          icon: FileCheck,
          description:
            "Supporting contracts, participation documents and organizer requirements throughout the process.",
        },
        {
          number: "05",
          title: "Logistics Guidance",
          icon: Truck,
          description:
            "Providing guidance for transportation, customs, accommodation and exhibition logistics.",
        },
        {
          number: "06",
          title: "On-site Support",
          icon: Headset,
          description:
            "Helping exhibitors before, during and after the exhibition for a smooth participation experience.",
        },
      ],
    },

    tr: {
      services: [
        {
          number: "01",
          title: "Fuar Seçimi",
          icon: Search,
          description:
            "Sektörünüze, ürünlerinize ve ihracat hedeflerinize en uygun uluslararası fuarların belirlenmesi.",
        },
        {
          number: "02",
          title: "Katılım Planlaması",
          icon: ClipboardCheck,
          description:
            "Fuar katılım takviminizin, stant seçeneklerinizin ve hazırlık sürecinizin baştan sona planlanması.",
        },
        {
          number: "03",
          title: "Stant Rezervasyonu",
          icon: MapPinned,
          description:
            "Stant başvurularının, konum seçiminin ve uluslararası organizatörlerle iletişimin yönetilmesi.",
        },
        {
          number: "04",
          title: "Dokümantasyon",
          icon: FileCheck,
          description:
            "Sözleşmeler, katılım belgeleri ve organizatör gereklilikleri konusunda süreç boyunca destek sağlanması.",
        },
        {
          number: "05",
          title: "Lojistik Danışmanlığı",
          icon: Truck,
          description:
            "Nakliye, gümrük, konaklama ve fuar lojistiği konularında yönlendirme sağlanması.",
        },
        {
          number: "06",
          title: "Fuar Alanında Destek",
          icon: Headset,
          description:
            "Sorunsuz bir katılım deneyimi için katılımcılara fuar öncesinde, sırasında ve sonrasında destek verilmesi.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section
      id="services-grid"
      className="services-grid-section"
    >
      <div className="container">
        <div className="services-grid">
          {t.services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.number}
              >
                <div className="service-card-top">
                  <div className="service-card-icon">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <span className="service-card-number">
                    {service.number}
                  </span>
                </div>

                <div className="service-card-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;