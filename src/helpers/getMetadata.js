import { getTranslations } from "@/i18n";
import { url } from "@/helpers/constants";

export async function getMetadata(lang, namespace, path = "", noIndex) {
  const translations = await getTranslations(lang, [namespace]);
  const meta = translations[namespace].meta;

  const data = {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${url}/${lang}/${path}`,
      languages: {
        en: "/en/" + path,
        ru: "/ru/" + path,
        ua: "/ua/" + path,
        "x-default": "/" + path,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${url}/${lang}/${path}`,
      siteName: meta.title,
      locale: lang,
      type: "website",
    },
  };

  if (noIndex) {
    data.robots = {
      index: false,
      follow: false,
    };
  }

  return data;
}
