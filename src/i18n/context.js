"use client";
import { createContext, useContext } from "react";
import getT from "./getT";

const LocaleContext = createContext({
  lang: "",
  translations: {},
  t: (key) => key,
});

export function LocaleProvider({ lang, translations, children }) {
  const t = getT(translations);

  return (
    <LocaleContext.Provider value={{ lang, translations, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useTranslations = () => useContext(LocaleContext);
