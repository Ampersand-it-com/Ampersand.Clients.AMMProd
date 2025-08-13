import { locales, defaultLocale } from "@/helpers/locale/config";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function HomeLayout({ children, params }) {
  const { lang } = await params;
  const locale = locales.includes(lang) ? lang : defaultLocale;

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
