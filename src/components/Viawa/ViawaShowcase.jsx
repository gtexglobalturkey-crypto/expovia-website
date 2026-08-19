import { useTranslation } from "../../hooks/useTranslation";

import dashboardImage from "../../assets/images/viawa/viawa-dashboard.png";
import workspaceImage from "../../assets/images/viawa/viawa-workspace.png";

import ViawaScreenshotCard from "./ViawaScreenshotCard";

function ViawaShowcase() {
  const { language } = useTranslation();

  const content = {
    en: {
      dashboard: {
        title: "Daily Summary",
        description:
          "Active tasks, at-risk opportunities, customer responses and VIAWA recommendations are visible in one workspace.",
        imageAlt: "VIAWA daily summary screen",
      },
      workspace: {
        title: "Workspace",
        description:
          "The VIAFA team manages customer meetings, quotations, contracts and exhibition documents through VIAWA.",
        imageAlt: "VIAWA exhibition workspace screen",
      },
    },

    tr: {
      dashboard: {
        title: "Günlük Özet",
        description:
          "Aktif görevler, risk altındaki fırsatlar, müşteri yanıtları ve VIAWA önerileri tek ekranda görünür.",
        imageAlt: "VIAWA günlük özet ekranı",
      },
      workspace: {
        title: "Gerçek Çalışma Alanı",
        description:
          "VIAFA ekibi müşteri görüşmeleri, teklifler, sözleşmeler ve fuar dokümanlarını VIAWA üzerinden yönetir.",
        imageAlt: "VIAWA çalışma alanı ekranı",
      },
    },
  };

  const t = content[language];

  return (
    <section className="viawa-showcase-section">
      <div className="container">
        <ViawaScreenshotCard
          title={t.dashboard.title}
          description={t.dashboard.description}
          image={dashboardImage}
          imageAlt={t.dashboard.imageAlt}
        />

        <ViawaScreenshotCard
          title={t.workspace.title}
          description={t.workspace.description}
          image={workspaceImage}
          imageAlt={t.workspace.imageAlt}
        />
      </div>
    </section>
  );
}

export default ViawaShowcase;
