/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import es from "./es";
import en from "./en";

const dictionaries = { es, en };
const STORAGE_KEY = "portfolio-lang";
const LanguageContext = createContext(null);

const getByPath = (obj, path) =>
  path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);

const interpolate = (value, vars) => {
  if (typeof value !== "string" || !vars) return value;
  return value.replace(/\{(\w+)\}/g, (_, key) =>
    vars[key] == null ? `{${key}}` : String(vars[key])
  );
};

const readStoredLang = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "es" ? stored : "es";
};

const applyDocumentLang = (lang, dict) => {
  document.documentElement.lang = lang;
  const title = dict.meta?.title;
  const description = dict.meta?.description;
  const ogDescription = dict.meta?.ogDescription;
  if (title) document.title = title;
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl && description) descEl.setAttribute("content", description);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && title) ogTitle.setAttribute("content", title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && ogDescription) ogDesc.setAttribute("content", ogDescription);
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute("content", lang === "en" ? "en_US" : "es_AR");
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(readStoredLang);
  const dict = dictionaries[lang] || es;

  useEffect(() => {
    applyDocumentLang(lang, dict);
  }, [lang, dict]);

  const setLang = (next) => {
    const value = next === "en" ? "en" : "es";
    localStorage.setItem(STORAGE_KEY, value);
    setLangState(value);
  };

  const t = (path, vars) => {
    const value = getByPath(dict, path);
    if (value === undefined) return path;
    return interpolate(value, vars);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
