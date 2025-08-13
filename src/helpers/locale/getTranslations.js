export async function getTranslations(locale, namespaces = []) {
  let translations = {};

  for (const ns of namespaces) {
    const nsMessages = (await import(`./translations/${locale}/${ns}.json`))
      .default;
    translations = { ...translations, ...nsMessages };
  }

  return translations;
}
