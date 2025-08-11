import { LocaleProvider } from "@/helpers/locale";
import {
  getStaticPathsForLocales,
  getStaticPropsForLocale,
} from "@/helpers/localeServer";
import Layout from "@/helpers/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";

export const getStaticPaths = getStaticPathsForLocales;

export async function getStaticProps(ctx) {
  return getStaticPropsForLocale(ctx, ["common"]);
}

export default function Home({ lang, translations }) {
  return (
    <LocaleProvider lang={lang} t={translations}>
      <Layout>
        <Hero />
      </Layout>
    </LocaleProvider>
  );
}
