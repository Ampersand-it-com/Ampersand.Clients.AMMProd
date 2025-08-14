import Layout from "@/helpers/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import { useTranslations } from "next-intl";

export default function LangPage() {
  const t = useTranslations();

  return (
    <>
      <h1>{t("title.name")}</h1>
      <h3>{t("title.title")}</h3>
      <p>{t("title.subTitle")}</p>
    </>
  );
}
