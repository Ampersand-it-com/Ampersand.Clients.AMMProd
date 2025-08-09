import { createContext, useContext } from "react";

const LocaleContext = createContext();

export function LocaleProvider({ lang, t, children }) {
  return (
    <LocaleContext.Provider value={{ lang, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
