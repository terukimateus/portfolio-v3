"use client";

import { useI18n } from "@/providers/i18n-provider";

const languageFlags: Record<string, string> = {
  en: "🇺🇸",
  "pt-br": "🇧🇷",
};

export function LanguageFloatingToggle() {
  const { language, setLanguage, dictionary } = useI18n();
  const nextLanguage = language === "en" ? "pt-br" : "en";
  const currentFlag = languageFlags[language] ?? "🌐";

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      className="fixed right-5 top-4 z-50 items-center justify-center cursor-pointer"
      aria-label={dictionary.language.label}
      title={dictionary.language.label}
    >
      <span className="text-xl" aria-hidden>
        {currentFlag}
      </span>
    </button>
  );
}
