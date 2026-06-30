"use client";

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import { DICTIONARY, LOCALES, DEFAULT_LOCALE } from "./translations";

const STORAGE_KEY = "gvk.locale";

const I18nContext = createContext(null);

function readStoredLocale() {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v && LOCALES.includes(v)) return v;
  } catch {
    // ignore (storage disabled / private mode)
  }
  return null;
}

function getDictionary(locale) {
  return DICTIONARY[locale] || DICTIONARY[DEFAULT_LOCALE];
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored && stored !== locale) setLocaleState(stored);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (!LOCALES.includes(next)) return;
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const dictionary = useMemo(() => getDictionary(locale), [locale]);
  const fallback = useMemo(() => getDictionary(DEFAULT_LOCALE), []);

  const t = useCallback(
    (key, vars) => {
      const raw =
        (dictionary && dictionary[key]) ??
        (fallback && fallback[key]) ??
        key;
      if (vars && typeof raw === "string") {
        return raw.replace(/\{(\w+)\}/g, (_, name) =>
          vars[name] !== undefined ? String(vars[name]) : `{${name}}`
        );
      }
      return raw;
    },
    [dictionary, fallback]
  );

  const tp = useCallback(
    (triple, localeOverride) => {
      if (!triple) return "";
      const useLocale = localeOverride || locale;
      if (typeof triple === "string") return triple;
      return (
        triple[useLocale] ??
        triple[DEFAULT_LOCALE] ??
        (typeof triple === "object" ? Object.values(triple).find(Boolean) : "") ??
        ""
      );
    },
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, tp, locales: LOCALES, hydrated }),
    [locale, setLocale, t, tp, hydrated]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      t: (k) => k,
      tp: (v) => (typeof v === "string" ? v : ""),
      locales: LOCALES,
      hydrated: false,
    };
  }
  return ctx;
}

export function useT() {
  return useI18n().t;
}

export function useLocale() {
  return useI18n().locale;
}

export function useTp() {
  return useI18n().tp;
}