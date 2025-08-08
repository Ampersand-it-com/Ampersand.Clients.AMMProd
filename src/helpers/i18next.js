import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationUA from "./locales/ua/translation.json";
import translationRU from "./locales/ru/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    whitelist: ["en", "ua", "ru"],
    debug: false,
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
