import { useTranslation } from "../../../hooks/useTranslation";

import { SECUREX_VIDEOS } from "../../../data/securexSouthAfrica2027";

// Montgomery Group Africa's videos, embedded from YouTube's privacy-enhanced
// domain. No autoplay: the `allow` list leaves it out on purpose, and the
// iframes load only near the viewport.
function SecurexVideos() {
  const { language } = useTranslation();

  const content = {
    en: {
      mainTitle: "Discover SECUREX South Africa 2027",
      previousTitle: "SECUREX – Highlights from a Previous Edition",
    },

    tr: {
      mainTitle: "SECUREX South Africa 2027'yi Keşfedin",
      previousTitle: "SECUREX – Önceki Fuardan Görüntüler",
    },
  };

  const t = content[language];

  const renderFrame = (videoId, title, modifier = "") => (
    <div className={`securex-video-frame${modifier}`}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );

  return (
    <section className="exhibition-products securex-videos section-spacing">
      <div className="container">
        <div className="section-header">
          <h2>{t.mainTitle}</h2>
        </div>

        {renderFrame(SECUREX_VIDEOS.main, t.mainTitle)}

        <h3 className="securex-video-subtitle">
          {t.previousTitle}
        </h3>

        {renderFrame(
          SECUREX_VIDEOS.previous,
          t.previousTitle,
          " securex-video-frame--small",
        )}
      </div>
    </section>
  );
}

export default SecurexVideos;
