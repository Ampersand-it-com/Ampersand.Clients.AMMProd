import Layout from "@/helpers/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import { LocaleProvider } from "@/helpers/locale";
import {
  getStaticPathsForLocales,
  getStaticPropsForLocale,
} from "@/helpers/localeServer";

// Генерация статических путей
export async function generateStaticParams() {
  // getStaticPathsForLocales возвращает { paths: [{ params: { lang } }], ... }
  const { paths } = getStaticPathsForLocales();
  return paths.map(({ params }) => ({ lang: params.lang }));
}

// Получение переводов для страницы
export async function getTranslations(lang) {
  // getStaticPropsForLocale возвращает { props: { lang, translations } }
  const { props } = await getStaticPropsForLocale({ params: { lang } }, [
    "common",
  ]);
  return props;
}

export default async function LangPage({ params }) {
  const { lang, translations } = await getTranslations(params.lang);

  return (
    <LocaleProvider lang={lang} t={translations}>
      <Layout>
        <Hero />
      </Layout>
    </LocaleProvider>
  );
}
