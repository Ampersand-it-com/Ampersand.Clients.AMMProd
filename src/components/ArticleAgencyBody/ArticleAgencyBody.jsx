"use client";

import img from "@/assets/articles/agency1.0/infographics.png";
import imgEn from "@/assets/articles/agency1.0/article_agency_en.jpg";
import imgUa from "@/assets/articles/agency1.0/article_agency_ua.jpg";
import imgRu from "@/assets/articles/agency1.0/article_agency_ru.jpg";
import StarIcon from "@/assets/icons/starIcon.svg";

import { useTranslations } from "@/i18n";
import Image from "next/image";
import cn from "classnames";
import Ellipse from "@/helpers/components/Ellipse/Ellipse";
import s from "./ArticleAgencyBody.module.scss";

const imgSrcMap = {
  en: imgEn,
  ua: imgUa,
  ru: imgRu,
};

export default function ArticleAgencyBody() {
  const { t, lang } = useTranslations();

  return (
    <div className={s.article} id="article-body">
      <section className={s.chapter}>
        <p className={s.featureText}>{t("articleAgency.chapter1.title")}</p>
        <div className={s.cardBordered}>
          <p className={s.p}>{t("articleAgency.chapter1.p1")}</p>
        </div>
        <div className={s.cardFilled}>
          <p className={s.p}>{t("articleAgency.chapter1.p2")}</p>
        </div>
      </section>

      <section className={s.chapter}>
        <Ellipse className={s.topEllipse} />
        <h2 className={s.chapterTitle}>{t("articleAgency.chapter2.title")}</h2>
        <p className={s.p}>{t("articleAgency.chapter2.p1")}</p>
      </section>

      <section className={cn(s.chapter, s.imgBlock)}>
        <div className={s.imgWrapper}>
          <Image src={imgSrcMap[lang]} alt="infographics" />
        </div>
        <div className={s.cardBordered}>
          <h2 className={s.chapterTitle}>
            {t("articleAgency.chapter3.title")}
          </h2>
          <p className={s.p}>{t("articleAgency.chapter3.p1")}</p>
          <ul className={s.list}>
            <li className={s.listItem}>
              <StarIcon className={s.StarIcon} />
              {t("articleAgency.chapter3.list.0")}
            </li>
            <li className={s.listItem}>
              <StarIcon className={s.StarIcon} />
              {t("articleAgency.chapter3.list.1")}
            </li>
            <li className={s.listItem}>
              <StarIcon className={s.StarIcon} />
              {t("articleAgency.chapter3.list.2")}
            </li>
            <li className={s.listItem}>
              <StarIcon className={s.StarIcon} />
              {t("articleAgency.chapter3.list.3")}
            </li>
          </ul>
          <p className={s.p}>{t("articleAgency.chapter3.p2")}</p>
          <p className={cn(s.p, s.bold)}>{t("articleAgency.chapter3.p3")}</p>
          <p className={s.p}>{t("articleAgency.chapter3.p4")}</p>
        </div>
      </section>

      <section className={s.chapter}>
        <Ellipse className={s.bottomEllipse} />
        <div className={s.cardFilled}>
          <p className={s.lead}>{t("articleAgency.chapter4.title")}</p>
        </div>
      </section>
    </div>
  );
}
