const { getTranslations } = require("./getTranslations");
import { locales, defaultLocale } from "./config";
import { LocaleProvider, useTranslations } from "./context";
import { useLocalizedPath, LocalizedLink } from "./navigation";

export {
  getTranslations,
  locales,
  defaultLocale,
  LocaleProvider,
  useTranslations,
  useLocalizedPath,
  LocalizedLink,
};
