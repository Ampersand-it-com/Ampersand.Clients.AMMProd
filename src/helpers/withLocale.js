import { LocaleProvider } from "./locale";

const locales = ["en", "ua", "ru"];

export function withLocale(PageComponent, { namespaces = ["common"] } = {}) {
  const WrappedPage = (props) => (
    <LocaleProvider lang={props.lang} t={props.translations}>
      <PageComponent {...props} />
    </LocaleProvider>
  );

  WrappedPage.getStaticPaths = async () => {
    const paths = locales.map((lang) => ({ params: { lang } }));
    return { paths, fallback: false };
  };

  WrappedPage.getStaticProps = async ({ params }) => {
    const fs = require("fs");
    const path = require("path");

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

    return { props: { lang, translations } };
  };

  return WrappedPage;
}
