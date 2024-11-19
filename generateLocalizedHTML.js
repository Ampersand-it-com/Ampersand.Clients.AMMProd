const fs = require('fs');
const path = require('path');

const config = [
  {
    lang: 'en',
    fileName: 'index.html',
    title: 'AMM/ Video Agency',
    description: 'Animation and video production agency for business – order a custom video',
  },
  {
    lang: 'uk',
    fileName: 'ua/index.html',
    title: 'AMM/ відеоагентство',
    description: 'Анімаційне та відеовиробниче агентство для бізнесу – замовте індивідуальне відео',
  },
  {
    lang: 'ru',
    fileName: 'ru/index.html',
    title: 'AMM/ видеоагентство',
    description: 'Анимационное и видеопроизводственное агентство для бизнеса – закажите индивидуальное видео',
  },
];

const buildDir = path.join(__dirname, 'build');

config.forEach(({ lang, fileName, title, description }) => {
  const filePath = path.join(buildDir, 'index.html');
  const localizedPath = path.join(buildDir, fileName);

  // read index.html
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Ошибка чтения файла ${filePath}:`, err);
      return;
    }

    // mod
    let modifiedData = data.replace('<html lang="en">', `<html lang="${lang}">`);
    modifiedData = modifiedData.replace(/<title>.*<\/title>/, `<title>${title}</title>`);
    modifiedData = modifiedData.replace(
      /<meta name="description" content=".*"\/>/,
      `<meta name="description" content="${description}"/>`
    );

    // write
    fs.mkdir(path.dirname(localizedPath), { recursive: true }, (err) => {
      if (err) {
        console.error(`Ошибка создания директории для ${localizedPath}:`, err);
        return;
      }

      fs.writeFile(localizedPath, modifiedData, 'utf8', (err) => {
        if (err) {
          console.error(`Ошибка записи файла ${localizedPath}:`, err);
        } else {
          console.log(`Создан файл ${localizedPath}`);
        }
      });
    });
  });
});
