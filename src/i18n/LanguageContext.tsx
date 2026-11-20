"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationKey, Language } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("gmarcondes_lang") as Language | null;
    if (saved && (saved === "pt" || saved === "en")) {
      setLanguageState(saved);
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("en")) {
        setLanguageState("en");
      }
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("gmarcondes_lang", lang);
  };

  const t = (key: TranslationKey): string => {
    const langDict = translations[language] || translations.pt;
    return langDict[key] || translations.pt[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
