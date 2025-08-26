import Case from "@/components/Case/Case";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/FooterReworked/FooterReworked";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Layout from "@/helpers/components/Layout/Layout";
import { getMetadata } from "@/helpers/getMetadata";
import { getTranslations, LocaleProvider } from "@/i18n";

const pageName = "cases";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return await getMetadata(lang, pageName, pageName);
}

export default async function CasesPage({ params }) {
  const { lang } = await params;
  const translations = await getTranslations(lang, ["common", "home"]);

  return (
    <LocaleProvider lang={lang} translations={translations}>
      <Layout>
        <Header />
        <Hero />
        <Case />
        <ContactForm />
      </Layout>
      <Footer />
    </LocaleProvider>
  );
}
