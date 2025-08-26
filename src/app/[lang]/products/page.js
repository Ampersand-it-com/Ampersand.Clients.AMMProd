import Calculator from "@/components/Calculator/Calculator";
import Footer from "@/components/FooterReworked/FooterReworked";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import OurProducts from "@/components/OurProducts/OurProducts";
import WorkProcess from "@/components/WorkProcess/WorkProcess";
import Layout from "@/helpers/components/Layout/Layout";
import { getMetadata } from "@/helpers/getMetadata";
import { getTranslations, LocaleProvider } from "@/i18n";

const pageName = "products";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return await getMetadata(lang, pageName, pageName);
}

export default async function ProductsPage({ params }) {
  const { lang } = await params;
  const translations = await getTranslations(lang, ["common", "home"]);

  return (
    <LocaleProvider lang={lang} translations={translations}>
      <Layout>
        <Header />
        <Hero />
      </Layout>
      <OurProducts />
      <Layout>
        <Calculator />
        <WorkProcess />
      </Layout>
      <Footer />
    </LocaleProvider>
  );
}
