import { locales, defaultLocale, translationsPath } from "./config";

export async function getTranslations(lang, namespaces = []) {
  if (!locales.includes(lang)) {
    console.warn(`Unknown locale "${lang}", fallback to ${defaultLocale}`);
    lang = defaultLocale;
  }

  const translations = {};

  for (const ns of namespaces) {
    try {
      const file = (await import(`../translations/${lang}/${ns}.json`)).default;
      Object.assign(translations, file);
    } catch (err) {
      if (err) console.error(err);
      else console.error(`Missing translation file: ${lang}/${ns}.json`);
    }
  }

  return translations;
}
