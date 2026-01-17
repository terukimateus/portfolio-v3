"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import en from "@/i18n/en.json";
import ptBr from "@/i18n/pt-br.json";

const dictionaries = {
  en,
  "pt-br": ptBr,
} as const;

export type Language = keyof typeof dictionaries;

export type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  dictionary: typeof en;
  t: (path: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "portfolio-language";

function getValueByPath(source: Record<string, unknown>, path: string) {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, source);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && stored in dictionaries) {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "pt-br" ? "pt-BR" : "en";
    document.cookie = `${STORAGE_KEY}=${language}; path=/; max-age=31536000`;
  }, [language]);

  const dictionary = useMemo(() => dictionaries[language], [language]);

  const t = (path: string) => {
    const value = getValueByPath(dictionary as Record<string, unknown>, path);
    return typeof value === "string" ? value : path;
  };

  const setLanguage = (next: Language) => setLanguageState(next);

  return (
    <I18nContext.Provider value={{ language, setLanguage, dictionary, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
