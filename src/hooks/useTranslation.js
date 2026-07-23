import { useContext } from "react";

import { LanguageContext } from "../context/LanguageContext";

import en from "../locales/en";
import tr from "../locales/tr";

export function useTranslation() {
  const { language } = useContext(LanguageContext);

  const translations = language === "tr"
    ? tr
    : en;

  return {
    language,
    t: translations,
  };
}