import ArticleAgencyBody from "@/components/ArticleAgencyBody/ArticleAgencyBody";
import ArticleHero from "@/components/ArticleHero/ArticleHero";
import Footer from "@/components/FooterReworked/FooterReworked";
import Header from "@/components/Header/Header";
import Layout from "@/helpers/components/LayoutReworked/Layout";
import PageConainer from "@/helpers/components/PageConainer/PageConainer";
import { getMetadata } from "@/helpers/getMetadata";
import { getTranslations, LocaleProvider } from "@/i18n";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return await getMetadata(lang, "articleAgency", "blog/agency-1.0");
}

export default async function BlogPage({ params }) {
  const { lang } = await params;
  const translations = await getTranslations(lang, ["common", "articleAgency"]);

  return (
    <LocaleProvider lang={lang} translations={translations}>
      <PageConainer>
        <Layout>
          <Header />
          <ArticleHero />
          <ArticleAgencyBody />
        </Layout>
        <Footer />
      </PageConainer>
    </LocaleProvider>
  );
}
