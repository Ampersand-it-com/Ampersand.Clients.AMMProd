import { getTranslations } from "@/i18n";
import { url } from "@/helpers/constants";

export async function getMetadata(lang, namespace, path = "") {
  const translations = await getTranslations(lang, [namespace]);
  const meta = translations[namespace].meta;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en" + path,
        ru: "/ru" + path,
        ua: "/ua" + path,
        "x-default": "/" + path,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${url}/${lang}${path}`,
      siteName: meta.title,
      locale: lang,
      type: "website",
    },
  };
}
