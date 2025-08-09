import Hero from "@/components/Hero/Hero";
import Layout from "@/helpers/components/Layout/Layout";
import { LocaleProvider } from "@/helpers/locale";
import fs from "fs";
import path from "path";

export async function getStaticPaths() {
  const locales = ["en", "ua", "ru"];
  const paths = locales.map((lang) => ({
    params: { lang },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { lang } = params;

  // Путь к файлу с переводами
  const filePath = path.join(
    process.cwd(),
    "public",
    "locales",
    lang,
    "common.json"
  );
  const translations = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return {
    props: {
      lang,

      translations,
    },
  };
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
