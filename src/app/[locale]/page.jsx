import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations();
  return (
    <div>
      <h1>{t("title.name")}</h1>
      <h3>{t("title.title")}</h3>
      <p>{t("title.subTitle")}</p>
    </div>
  );
}
