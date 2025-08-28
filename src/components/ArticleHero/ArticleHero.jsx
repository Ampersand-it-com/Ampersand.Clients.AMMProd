"use client";

import Image from "next/image";
import { useTranslations } from "@/i18n";
import heroImg from "@/assets/articles/agency1.0/hero.png";
import Button from "../CharacterUpgrade/components/Button";
import Ellipse from "@/helpers/components/Ellipse/Ellipse";
import s from "./articleHero.module.scss";

export default function ArticleHero() {
  const { t } = useTranslations();

  return (
    <section className={s.hero}>
      <Ellipse className={s.ellipse} />
      <div className={s.content}>
        <h1 className={s.title}>{t("articleAgency.hero.title")}</h1>
        <Button className={s.button}>{t("articleAgency.hero.button")}</Button>
      </div>
      <div className={s.imageWrapper}>
        <Image src={heroImg} alt="Article hero" className={s.image} priority />
      </div>
    </section>
  );
}
