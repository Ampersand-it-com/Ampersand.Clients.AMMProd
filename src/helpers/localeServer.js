import fs from "fs";
import path from "path";

const locales = ["en", "ua", "ru"];

function getStaticPathsForLocales() {
  return {
    paths: locales.map((lang) => ({ params: { lang } })),
    fallback: false,
  };
}

function getStaticPropsForLocale({ params }, namespaces = ["common"]) {
  const { lang } = params;
  let translations = {};

  for (const ns of namespaces) {
    const filePath = path.join(
      process.cwd(),
      "public",
      "locales",
      lang,
      `${ns}.json`
    );
    translations[ns] = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  return {
    props: { lang, translations },
  };
}

export { getStaticPathsForLocales, getStaticPropsForLocale };
