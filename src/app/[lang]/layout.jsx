import { locales } from "@/i18n/config";
import { LocaleProvider } from "@/i18n/context";
import { getTranslations } from "@/i18n/getTranslations";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({ params, children }) {
  const { lang } = await params;
  const translations = await getTranslations(lang, ["common"]);

  return (
    <LocaleProvider lang={lang} translations={translations}>
      {children}
    </LocaleProvider>
  );
}
