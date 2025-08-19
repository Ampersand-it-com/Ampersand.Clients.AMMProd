import { locales, LocaleProvider, getTranslations } from "@/i18n";
import { getMetadata } from "@/helpers/getMetadata";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({ children }) {
  return children;
}
