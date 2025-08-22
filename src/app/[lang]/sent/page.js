import { getMetadata } from "@/helpers/getMetadata";
import { getTranslations, LocaleProvider } from "@/i18n";
import ThankYou from "./components/ThankYou";
import PageConainer from "@/helpers/components/PageConainer/PageConainer";
import Footer from "@/components/FooterReworked/FooterReworked";

const pageName = "sent";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return await getMetadata(lang, pageName, pageName, true);
}

export default async function SentPage({ params }) {
  const { lang } = await params;
  const translations = await getTranslations(lang, ["common", pageName]);

  return (
    <LocaleProvider lang={lang} translations={translations}>
      <PageConainer>
        <ThankYou />
        <Footer />
      </PageConainer>
    </LocaleProvider>
  );
}
