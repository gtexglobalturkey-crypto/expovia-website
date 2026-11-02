import { useTranslation } from "../../../hooks/useTranslation";

import { CONTECH_VIDEO_ID } from "../../../data/contechVietnam2027";

// Embedded from YouTube's privacy-enhanced domain. No autoplay: the `allow` list
// leaves it out on purpose, and the iframe loads only near the viewport.
function ContechVideo() {
  const { language } = useTranslation();

  const content = {
    en: {
      title: "CONTECH Vietnam – Highlights from a Previous Edition",
      frameTitle: "CONTECH Vietnam video by HADIFA",
    },

    tr: {
      title: "CONTECH Vietnam – Önceki Fuardan Görüntüler",
      frameTitle: "HADIFA'nın CONTECH Vietnam videosu",
    },
  };

  const t = content[language];

  return (
    <section className="exhibition-products contech-video section-spacing">
      <div className="container">
        <div className="section-header">
          <h2>{t.title}</h2>
        </div>

        <div className="contech-video-frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${CONTECH_VIDEO_ID}?rel=0`}
            title={t.frameTitle}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default ContechVideo;
