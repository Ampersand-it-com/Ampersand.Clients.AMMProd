import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAlternateLinks } from '../../utils/langPath';

function SEO({ currentLang }) {
  const { t } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;
  const alternateLinks = getAlternateLinks(currentPath);

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{t('header.title')}</title>
      <meta name="description" content={t('header.description')} />
      <meta name="title" content={t('header.title')} />
      <meta name="og:description" content={t('header.description')} />
      <meta name="og:title" content={t('header.title')} />
      {alternateLinks.map(({ lang, path }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={path} />
      ))}
    </Helmet>
  );
}

export default SEO;
