import { useTranslation } from "../../hooks/useTranslation";

import Fairy from "./Fairy";
import fairyConfig from "./fairyConfig";

function FairyIntro({ page }) {
  const { language } = useTranslation();
  const config = fairyConfig[page];

  if (!config) {
    return null;
  }

  return (
    <Fairy
      pose={config.pose}
      alt={config.poseAlt[language] ?? config.poseAlt.en}
      message={config.message[language] ?? config.message.en}
      gesture={config.gesture}
      delay={config.delay}
      hold={config.hold}
      className={`fairy--${page}`}
    />
  );
}

export default FairyIntro;
