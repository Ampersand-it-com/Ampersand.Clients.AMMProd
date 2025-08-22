"use client";

import cn from "classnames";
import s from "./ThankYou.module.scss";
import { useTranslations } from "@/i18n";
import Ellipse from "@/helpers/components/Ellipse/Ellipse";
import Button from "@/components/CharacterUpgrade/components/Button";
import { tel, telRaw } from "@/helpers/constants";
import PhoneIcon from "@/assets/icons/phoneIcon.svg";

export default function ThankYou() {
  const { t } = useTranslations();

  // Navigation

  // to do
  // const navigateToIndex = useLocaleNavigate('');
  const handleReturn = (e) => {
    //   navigateToIndex();
  };

  return (
    <section className={s.root}>
      <Ellipse className={s.ellipse} />
      <div className={s.textBlock}>
        <h2 className={s.h2}>{t("sent.title")}</h2>
        <p className={s.lead}>{t("sent.description")}</p>
      </div>
      <Button onClick={handleReturn}>{t("sent.returnButton")}</Button>
      <div className={cn(s.textBlock, s.tel)}>
        <a href={"tel:" + telRaw} aria-label="call">
          <PhoneIcon className={s.icon} />
          <span className={s.h3}>{tel}</span>
        </a>
        <p className={s.text}>{t("sent.caption")}</p>
      </div>
    </section>
  );
}
