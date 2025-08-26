import Footer from "@/components/FooterReworked/FooterReworked";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Layout from "@/helpers/components/LayoutReworked/Layout";
import { getMetadata } from "@/helpers/getMetadata";
import { getTranslations, LocaleProvider } from "@/i18n";

const pageName = "blog";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return await getMetadata(lang, pageName, pageName);
}

export default async function BlogPage({ params }) {
  const { lang } = await params;
  const translations = await getTranslations(lang, ["common", pageName]);

  return (
    <LocaleProvider lang={lang} translations={translations}>
      <PageConainer>
        <Layout>
          <Header />
          <Hero />
        </Layout>
        <Footer />
      </PageConainer>
    </LocaleProvider>
  );
}
