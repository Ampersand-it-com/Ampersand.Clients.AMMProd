import Clients from "@/components/Clients/Clients";
import Footer from "@/components/FooterReworked/FooterReworked";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Layout from "@/helpers/components/Layout/Layout";
import { getMetadata } from "@/helpers/getMetadata";
import { getTranslations, LocaleProvider } from "@/i18n";

const pageName = "clients";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return await getMetadata(lang, pageName, pageName);
}

export default async function ClientsPage({ params }) {
  const { lang } = await params;
  const translations = await getTranslations(lang, ["common", "home"]);

  return (
    <LocaleProvider lang={lang} translations={translations}>
      <Layout>
        <Header />
        <Hero />
        <Clients />
      </Layout>
      <Footer />
    </LocaleProvider>
  );
}
