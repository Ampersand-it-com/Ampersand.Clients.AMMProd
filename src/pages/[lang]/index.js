import Layout from "@/helpers/components/Layout/Layout";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Layout></Layout>
    </>
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
      lang: params?.lang || "en",
    },
  };
};
