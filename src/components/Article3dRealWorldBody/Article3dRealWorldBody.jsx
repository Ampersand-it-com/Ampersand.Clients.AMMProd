"use client";

import StarIcon from "@/assets/icons/starIcon.svg";
import { useTranslations } from "@/i18n";
import Ellipse from "@/helpers/components/Ellipse/Ellipse";
import s from "../ArticleAgencyBody/ArticleAgencyBody.module.scss";

export default function Article3dRealWorldBody() {
  const { t } = useTranslations();

  return (
    <div className={s.article} id="article-body">
      <section className={s.chapter}>
        <p className={s.featureText}>{t("article3dRealWorld.chapter1.title")}</p>
        <div className={s.cardBordered}>
          <p className={s.p}>{t("article3dRealWorld.chapter1.p1")}</p>
        </div>
        <div className={s.cardFilled}>
          <p className={s.p}>{t("article3dRealWorld.chapter1.p2")}</p>
        </div>
      </section>

      <section className={s.chapter}>
        <Ellipse className={s.topEllipse} />
        <h2 className={s.chapterTitle}>{t("article3dRealWorld.chapter2.title")}</h2>
        <p className={s.p}>{t("article3dRealWorld.chapter2.p1")}</p>
        <p className={s.p}>{t("article3dRealWorld.chapter2.p2")}</p>
        <p className={s.p}>{t("article3dRealWorld.chapter2.p3")}</p>
        <p className={s.p}>{t("article3dRealWorld.chapter2.p4")}</p>
      </section>

      <section className={s.chapter}>
        <h2 className={s.chapterTitle}>{t("article3dRealWorld.chapter3.title")}</h2>
        <p className={s.p}>{t("article3dRealWorld.chapter3.p1")}</p>
        <div className={s.cardFilled}>
          <p className={s.lead}>{t("article3dRealWorld.chapter3.p2")}</p>
        </div>
        <p className={s.p}>{t("article3dRealWorld.chapter3.p3")}</p>
      </section>

      <section className={s.chapter}>
        <h2 className={s.chapterTitle}>{t("article3dRealWorld.chapter4.title")}</h2>
        <p className={s.p}>{t("article3dRealWorld.chapter4.p1")}</p>
        <div className={s.videoWrapper}>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/panmKr1Gtro"
            title="3D Real World Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className={s.p}>{t("article3dRealWorld.chapter4.p2")}</p>
        <p className={s.p}>{t("article3dRealWorld.chapter4.p3")}</p>
        <p className={s.p}>{t("article3dRealWorld.chapter4.p4")}</p>
      </section>

      <section className={s.chapter}>
        <h2 className={s.chapterTitle}>{t("article3dRealWorld.chapter5.title")}</h2>
        <p className={s.p}>{t("article3dRealWorld.chapter5.p1")}</p>
        <p className={s.p}>{t("article3dRealWorld.chapter5.p2")}</p>
        <p className={s.p}>{t("article3dRealWorld.chapter5.p3")}</p>
      </section>

      <section className={s.chapter}>
        <Ellipse className={s.bottomEllipse} />
        <h2 className={s.chapterTitle}>{t("article3dRealWorld.chapter6.title")}</h2>
        <p className={s.p}>{t("article3dRealWorld.chapter6.p1")}</p>
        <ul className={s.list}>
          <li className={s.listItem}>
            <StarIcon className={s.starIcon} />
            {t("article3dRealWorld.chapter6.list.0")}
          </li>
          <li className={s.listItem}>
            <StarIcon className={s.starIcon} />
            {t("article3dRealWorld.chapter6.list.1")}
          </li>
          <li className={s.listItem}>
            <StarIcon className={s.starIcon} />
            {t("article3dRealWorld.chapter6.list.2")}
          </li>
          <li className={s.listItem}>
            <StarIcon className={s.starIcon} />
            {t("article3dRealWorld.chapter6.list.3")}
          </li>
          <li className={s.listItem}>
            <StarIcon className={s.starIcon} />
            {t("article3dRealWorld.chapter6.list.4")}
          </li>
        </ul>
      </section>

      <section className={s.chapter}>
        <div className={s.cardFilled}>
          <p className={s.lead}>{t("article3dRealWorld.chapter7.title")}</p>
          <ul className={s.list}>
            <li className={s.listItem}>
              <StarIcon className={s.starIcon} />
              {t("article3dRealWorld.chapter7.list.0")}
            </li>
            <li className={s.listItem}>
              <StarIcon className={s.starIcon} />
              {t("article3dRealWorld.chapter7.list.1")}
            </li>
            <li className={s.listItem}>
              <StarIcon className={s.starIcon} />
              {t("article3dRealWorld.chapter7.list.2")}
            </li>
            <li className={s.listItem}>
              <StarIcon className={s.starIcon} />
              {t("article3dRealWorld.chapter7.list.3")}
            </li>
            <li className={s.listItem}>
              <StarIcon className={s.starIcon} />
              {t("article3dRealWorld.chapter7.list.4")}
            </li>
          </ul>
          <p className={s.p}>{t("article3dRealWorld.chapter7.p1")}</p>
        </div>
      </section>

      <section className={s.chapter}>
        <div className={s.cardFilled}>
          <p className={s.lead}>{t("article3dRealWorld.chapter8.title")}</p>
          <p className={s.p}>{t("article3dRealWorld.chapter8.p1")}</p>
        </div>
      </section>
    </div>
  );
}

