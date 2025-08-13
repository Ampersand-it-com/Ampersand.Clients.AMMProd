import Layout from "@/helpers/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "@/helpers/locale/getTranslations";

export default async function LangPage({ params }) {
  const { lang } = await params;
  const translations = getTranslations(lang, ["common"]);

  return (
    <NextIntlClientProvider locale={lang} messages={translations}>
      <Layout>
        <Hero />
      </Layout>
    </NextIntlClientProvider>
  );
}
