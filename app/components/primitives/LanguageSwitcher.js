"use client";
import { useI18n } from "../../lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale, locales } = useI18n();
  const labels = { en: "EN", te: "తె", hi: "हिं" };
  return (
    <div
      role="group"
      aria-label="Switch language"
      className="hidden md:inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-1.5 py-1 backdrop-blur"
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          aria-label={`Switch language to ${code === "en" ? "English" : code === "te" ? "Telugu" : "Hindi"}`}
          className={`px-2.5 py-1 rounded-full text-[12px] font-semibold transition-colors duration-200 ${
            locale === code ? "bg-[#ff0008] text-white" : "text-white/70 hover:text-white"
          }`}
        >
          {labels[code] || code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}