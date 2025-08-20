import Calculator from "@/components/Calculator/Calculator";
import Case from "@/components/Case/Case";
import CharacterUpgrade from "@/components/CharacterUpgrade/CharacterUpgrade";
import Clients from "@/components/Clients/Clients";
import ContactForm from "@/components/ContactForm/ContactForm";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import OurProducts from "@/components/OurProducts/OurProducts";
import WhoAreWe from "@/components/WhoAreWe/WhoAreWe";
import WorkProcess from "@/components/WorkProcess/WorkProcess";
import Layout from "@/helpers/components/Layout/Layout";
import { getMetadata } from "@/helpers/getMetadata";
import { getTranslations, LocaleProvider } from "@/i18n";

const pageName = "home";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return await getMetadata(lang, pageName);
}

export default async function HomePage({ params }) {
  const { lang } = await params;
  const translations = await getTranslations(lang, ["common", pageName]);

  return (
    <LocaleProvider lang={lang} translations={translations}>
      <Layout>
        <Header />
        <Hero />
        <CharacterUpgrade />
        <WhoAreWe />
        <Features />
      </Layout>
      <OurProducts />
      <Layout>
        <Calculator />
        <WorkProcess />
        <Case />
        <ContactForm />
        <Clients />
      </Layout>
      <Footer />
    </LocaleProvider>
  );
}
