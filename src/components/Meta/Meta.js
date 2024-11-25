import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'utils/i18next';

const allowedLanguages = ['en', 'ua', 'ru'];
const domain = 'https://ammagency.com.ua';

// Handle correct lang code

function langToBCP47(lang) {
  return lang === 'ua' ? 'uk' : lang;
}

// Alternate links

const generateAlternateLinks = (lang, currentPath) => {
  return allowedLanguages
    .filter((allowedLang) => allowedLang !== lang) //filter current lang
    .map((allowedLang) => {
      const localizedPath = `${domain}/${allowedLang}${currentPath.replace(/^\/(en|ua|ru)/i, '')}`;
      return { lang: langToBCP47(allowedLang), path: localizedPath };
    });
};

// Component Meta

function Meta({ title = 'Untitle page', description = '', noIndex }) {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;

  const lang = i18n.language;
  const alternateLinks = generateAlternateLinks(i18n.language, currentPath);

  return (
    <Helmet>
      <html lang={langToBCP47(lang)} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {alternateLinks.map(({ lang, path }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={path} />
      ))}
    </Helmet>
  );
}

export default Meta;
