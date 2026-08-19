import fairyPoint from "../../assets/images/fairy/fairy-point.png";
import fairyInform from "../../assets/images/fairy/fairy-inform.png";
import fairyCheer from "../../assets/images/fairy/fairy-cheer.png";

// Per-page Fairy appearances. To support a new page, add a key here —
// Fairy.jsx and FairyIntro.jsx never need to change.
const fairyConfig = {
  viawa: {
    pose: fairyPoint,
    gesture: "point",
    delay: 1500,
    hold: 4500,
    poseAlt: {
      en: "Fairy pointing at the VIAWA workspace",
      tr: "Fairy VIAWA çalışma alanını işaret ediyor",
    },
    message: {
      en: "I'm Fairy! With VIAWA you can manage exhibition operations from a single workspace.",
      tr: "Ben Fairy! VIAWA ile fuar operasyonlarını tek çalışma alanından yönetebilirsin.",
    },
  },

  services: {
    pose: fairyInform,
    gesture: "inform",
    delay: 1500,
    hold: 4500,
    poseAlt: {
      en: "Fairy holding a tablet, explaining VIAFA's services",
      tr: "Fairy tablet tutarak VIAFA'nın hizmetlerini anlatıyor",
    },
    message: {
      en: "Hi, I'm Fairy! Let me walk you through how VIAFA supports your exhibition journey.",
      tr: "Merhaba, ben Fairy! VIAFA'nın fuar sürecinde sana nasıl destek olduğunu anlatayım.",
    },
  },

  exhibitions: {
    pose: fairyCheer,
    gesture: "cheer",
    delay: 1500,
    hold: 4500,
    poseAlt: {
      en: "Fairy celebrating VIAFA's growing exhibition portfolio",
      tr: "Fairy VIAFA'nın büyüyen fuar portföyünü kutluyor",
    },
    message: {
      en: "Exciting exhibitions are on the way — our portfolio is growing fast!",
      tr: "Heyecan verici fuarlar yolda — portföyümüz hızla büyüyor!",
    },
  },
};

export default fairyConfig;
