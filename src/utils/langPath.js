const config = [
  { lang: 'en', path: '/' },
  { lang: 'ua', path: '/ua', alias: 'uk' },
  { lang: 'ru', path: '/ru' },
];

const domain = 'https://ammagency.com.ua';

function getLangFromPath(path) {
  for (let item of config) {
    if (path.endsWith(item.path)) return item.lang;
  }
  return config[0].lang;
}

function getAlternateLinks(path) {
  const lang = getLangFromPath(path);
  const alternateLinks = [];
  for (let item of config) {
    if (item.lang !== lang)
      alternateLinks.push({
        lang: item.alias || item.lang,
        path: domain + item.path,
      });
  }
  return alternateLinks;
}

export { config, getLangFromPath, getAlternateLinks };
