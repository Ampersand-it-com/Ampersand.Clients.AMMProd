import ArticleAiAlternativeBody from "@/components/ArticleAiAlternativeBody/ArticleAiAlternativeBody";
import ArticleHero from "@/components/ArticleHero/ArticleHero";
import Footer from "@/components/FooterReworked/FooterReworked";
import Header from "@/components/Header/Header";
import Layout from "@/helpers/components/LayoutReworked/Layout";
import PageConainer from "@/helpers/components/PageConainer/PageConainer";
import { getMetadata } from "@/helpers/getMetadata";
import { getTranslations, LocaleProvider } from "@/i18n";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return await getMetadata(lang, "articleAiAlternative", "blog/ai-alternative");
}

export default async function AiAlternativeArticlePage({ params }) {
  const { lang } = await params;
  const translations = await getTranslations(lang, ["common", "articleAiAlternative"]);

  return (
    <LocaleProvider lang={lang} translations={translations}>
      <PageConainer>
        <Layout>
          <Header />
          <ArticleHero namespace="articleAiAlternative" />
          <ArticleAiAlternativeBody />
        </Layout>
        <Footer />
      </PageConainer>
    </LocaleProvider>
  );
}

