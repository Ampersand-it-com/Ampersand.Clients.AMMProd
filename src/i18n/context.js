"use client";
import { createContext, useCallback, useContext } from "react";
import getT from "./getT";

const LocaleContext = createContext({});

export function LocaleProvider({ lang, translations, children }) {
  const t = useCallback(getT(translations), [translations]);

  return (
    <LocaleContext.Provider value={{ lang, translations, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useTranslations = () => useContext(LocaleContext);
