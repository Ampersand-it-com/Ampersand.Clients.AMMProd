import Article3dRealWorldBody from "@/components/Article3dRealWorldBody/Article3dRealWorldBody";
import ArticleHero from "@/components/ArticleHero/ArticleHero";
import Footer from "@/components/FooterReworked/FooterReworked";
import Header from "@/components/Header/Header";
import Layout from "@/helpers/components/LayoutReworked/Layout";
import PageConainer from "@/helpers/components/PageConainer/PageConainer";
import { getMetadata } from "@/helpers/getMetadata";
import { getTranslations, LocaleProvider } from "@/i18n";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return await getMetadata(lang, "article3dRealWorld", "blog/3d-real-world");
}

export default async function BlogPage({ params }) {
  const { lang } = await params;
  const translations = await getTranslations(lang, ["common", "article3dRealWorld"]);

  return (
    <LocaleProvider lang={lang} translations={translations}>
      <PageConainer>
        <Layout>
          <Header />
          <ArticleHero namespace="article3dRealWorld" />
          <Article3dRealWorldBody />
        </Layout>
        <Footer />
      </PageConainer>
    </LocaleProvider>
  );
}




