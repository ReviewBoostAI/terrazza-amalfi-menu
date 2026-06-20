import { createContext, useContext, useEffect, useState } from "react";

import translations from "../data/translations.json";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {

  const [language, setLanguage] = useState(() => {

    return localStorage.getItem("language") || "it";

  });

  useEffect(() => {

    localStorage.setItem("language", language);

  }, [language]);

  const t = translations[language];

  return (

    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t
      }}
    >

      {children}

    </LanguageContext.Provider>

  );

}

export function useLanguage() {

  return useContext(LanguageContext);

}