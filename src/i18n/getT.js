export default function getT(translations) {
  const t = (key) => {
    const [ns, ...rest] = key.split(".");
    let current = translations[ns];

    for (const k of rest) {
      if (!current || typeof current !== "object") {
        console.error(`Missing translation for key: ${key}`);
        return key;
      }
      current = current[k];
    }

    return current || key;
  };
  return t;
}
