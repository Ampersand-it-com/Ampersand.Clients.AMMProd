import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Layout from "@/helpers/components/Layout/Layout";
import { getMetadata } from "@/helpers/getMetadata";
import { getTranslations, LocaleProvider } from "@/i18n";

const pageName = "home";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return await getMetadata(lang, pageName);
}

export default async function BlogPage({ params }) {
  const { lang } = await params;
  const translations = await getTranslations(lang, ["common", pageName]);

  return (
    <LocaleProvider lang={lang} translations={translations}>
      <Layout>
        <Header />
        <Hero />
      </Layout>
      <Footer />
    </LocaleProvider>
  );
}
