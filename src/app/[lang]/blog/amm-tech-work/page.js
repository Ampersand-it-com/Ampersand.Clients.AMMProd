import ArticleAmmTechWorkBody from "@/components/ArticleAmmTechWorkBody/ArticleAmmTechWorkBody";
import ArticleHero from "@/components/ArticleHero/ArticleHero";
import Footer from "@/components/FooterReworked/FooterReworked";
import Header from "@/components/Header/Header";
import Layout from "@/helpers/components/LayoutReworked/Layout";
import PageConainer from "@/helpers/components/PageConainer/PageConainer";
import { getMetadata } from "@/helpers/getMetadata";
import { getTranslations, LocaleProvider } from "@/i18n";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return await getMetadata(lang, "articleAmmTechWork", "blog/amm-tech-work");
}

export default async function AmmTechWorkArticlePage({ params }) {
  const { lang } = await params;
  const translations = await getTranslations(lang, ["common", "articleAmmTechWork"]);

  return (
    <LocaleProvider lang={lang} translations={translations}>
      <PageConainer>
        <Layout>
          <Header />
          <ArticleHero namespace="articleAmmTechWork" />
          <ArticleAmmTechWorkBody />
        </Layout>
        <Footer />
      </PageConainer>
    </LocaleProvider>
  );
}

