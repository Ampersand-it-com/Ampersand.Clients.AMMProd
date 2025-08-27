"use client";

import { useTranslations } from "@/i18n";
import s from "./BlogHero.module.scss";
import Ellipse from "@/helpers/components/Ellipse/Ellipse";
import Marquee from "react-fast-marquee";
import cn from "classnames";

function BlogHero() {
  const { t } = useTranslations();

  return (
    <div className={s.root}>
      <Ellipse />

      <div className={s.titleContainer}>
        <h1 className={s.title}>{t("blog.hero.title")}</h1>
        <p className={s.subtitle}>{t("blog.hero.subtitle")}</p>
      </div>

      <div className={s.marqueeContainer}>
        <Marquee
          autoFill
          direction="right"
          speed={12}
          className={cn(s.marquee, s.white)}
        >
          {t("blog.hero.marquee")}
        </Marquee>
        <Marquee autoFill speed={12} className={cn(s.marquee, s.black)}>
          {t("blog.hero.marquee")}
        </Marquee>
      </div>
    </div>
  );
}

export default BlogHero;
