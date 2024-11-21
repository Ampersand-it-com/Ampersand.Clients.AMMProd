const fs = require('fs');
const path = require('path');

const config = [
  {
    lang: 'en',
    fileName: 'index.html',
    title: 'AMM/ video agency v.2.0',
    description: 'Animation and Video Production Agency for Businesses – Order a Custom Video',
  },
  {
    lang: 'uk',
    fileName: 'ua/index.html',
    title: 'AMM/ відео агенція v.2.0',
    description: 'Анімаційна та відеопродакшн агенція для бізнесу - замовити відео ролик',
  },
  {
    lang: 'ru',
    fileName: 'ru/index.html',
    title: 'AMM/ видео агенство v.2.0',
    description: 'Анимационное и видеопродакш агенство для бизнеса — заказать видеоролик',
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
    let modifiedData = data.replace(/<html lang=".*?">/, `<html lang="${lang}">`);
    modifiedData = modifiedData.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
    modifiedData = modifiedData.replace(
      /<meta data-react-helmet="true" name="title" content=".*?"\/>/,
      `<meta data-react-helmet="true" name="title" content="${title}"/>`
    );
    modifiedData = modifiedData.replace(
      /<meta data-react-helmet="true" name="description" content=".*?"\/>/,
      `<meta data-react-helmet="true" name="description" content="${description}"/>`
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
