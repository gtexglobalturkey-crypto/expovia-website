import {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const LanguageContext = createContext(null);

const DEFAULT_LANGUAGE = "en";
const STORAGE_KEY = "erexpo-language";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);

    if (savedLanguage === "tr" || savedLanguage === "en") {
      return savedLanguage;
    }

    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (nextLanguage) => {
    if (nextLanguage !== "en" && nextLanguage !== "tr") {
      return;
    }

    setLanguage(nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      changeLanguage,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}