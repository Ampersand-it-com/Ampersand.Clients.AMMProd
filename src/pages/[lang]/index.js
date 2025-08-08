export default function TestPage({ lang }) {
  return (
    <main>
      <h1>Test page for "{lang}"</h1>
    </main>
  );
}

// Динамические маршруты (SSG)
export const getStaticPaths = async () => {
  return {
    paths: ["ua", "en", "ru"].map((lang) => ({ params: { lang } })),
    fallback: false, // 404 если не найдено
  };
};

// Данные для страницы
export const getStaticProps = async ({ params }) => {
  return {
    props: {
      lang: params?.lang || "ua",
    },
  };
};
