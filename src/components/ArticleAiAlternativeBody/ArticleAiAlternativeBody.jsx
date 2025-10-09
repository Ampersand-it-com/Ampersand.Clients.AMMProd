"use client";

import StarIcon from "@/assets/icons/starIcon.svg";
import { useTranslations } from "@/i18n";
import Ellipse from "@/helpers/components/Ellipse/Ellipse";
import s from "../ArticleAgencyBody/ArticleAgencyBody.module.scss";

export default function ArticleAiAlternativeBody() {
  const { t } = useTranslations();

  return (
    <div className={s.article} id="article-body">
      <section className={s.chapter}>
        <p className={s.featureText}>{t("articleAiAlternative.chapter1.title")}</p>
        <div className={s.cardBordered}>
          <p className={s.p}>{t("articleAiAlternative.chapter1.p1")}</p>
        </div>
        <div className={s.cardFilled}>
          <p className={s.p}>{t("articleAiAlternative.chapter1.p2")}</p>
        </div>
      </section>

      <section className={s.chapter}>
        <Ellipse className={s.topEllipse} />
        <h2 className={s.chapterTitle}>{t("articleAiAlternative.chapter2.title")}</h2>
        <p className={s.p}>{t("articleAiAlternative.chapter2.p1")}</p>
        <p className={s.p}>{t("articleAiAlternative.chapter2.p2")}</p>
        <p className={s.p}>{t("articleAiAlternative.chapter2.p3")}</p>
      </section>

      <section className={s.chapter}>
        <h2 className={s.chapterTitle}>{t("articleAiAlternative.chapter3.title")}</h2>
        <p className={s.p}>{t("articleAiAlternative.chapter3.p1")}</p>
        <p className={s.p}>{t("articleAiAlternative.chapter3.p2")}</p>
        <div className={s.cardFilled}>
          <p className={s.lead}>{t("articleAiAlternative.chapter3.p3")}</p>
        </div>
      </section>

      <section className={s.chapter}>
        <h2 className={s.chapterTitle}>{t("articleAiAlternative.chapter4.title")}</h2>
        <p className={s.p}>{t("articleAiAlternative.chapter4.p1")}</p>
        <div className={s.cardBordered}>
          <p className={s.p}>{t("articleAiAlternative.chapter4.p2")}</p>
        </div>
      </section>

      <section className={s.chapter}>
        <h2 className={s.chapterTitle}>{t("articleAiAlternative.chapter5.title")}</h2>
        <p className={s.p}>{t("articleAiAlternative.chapter5.p1")}</p>
        <div className={s.videoWrapper}>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/H1lMTGZVq-w"
            title="AI Alternative Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className={s.chapter}>
        <Ellipse className={s.bottomEllipse} />
        <h2 className={s.chapterTitle}>{t("articleAiAlternative.chapter6.title")}</h2>
        <p className={s.p}>{t("articleAiAlternative.chapter6.p1")}</p>
        <p className={s.p}>{t("articleAiAlternative.chapter6.p2")}</p>
        <p className={s.p}>{t("articleAiAlternative.chapter6.p3")}</p>
      </section>

      <section className={s.chapter}>
        <h2 className={s.chapterTitle}>{t("articleAiAlternative.chapter7.title")}</h2>
        <p className={s.p}>{t("articleAiAlternative.chapter7.p1")}</p>
        <div className={s.cardBordered}>
          <p className={s.p}>{t("articleAiAlternative.chapter7.p2")}</p>
        </div>
      </section>

      <section className={s.chapter}>
        <div className={s.cardFilled}>
          <p className={s.lead}>{t("articleAiAlternative.chapter8.title")}</p>
          <ul className={s.list}>
            <li className={s.listItem}>
              <StarIcon className={s.starIcon} />
              {t("articleAiAlternative.chapter8.list.0")}
            </li>
            <li className={s.listItem}>
              <StarIcon className={s.starIcon} />
              {t("articleAiAlternative.chapter8.list.1")}
            </li>
            <li className={s.listItem}>
              <StarIcon className={s.starIcon} />
              {t("articleAiAlternative.chapter8.list.2")}
            </li>
            <li className={s.listItem}>
              <StarIcon className={s.starIcon} />
              {t("articleAiAlternative.chapter8.list.3")}
            </li>
            <li className={s.listItem}>
              <StarIcon className={s.starIcon} />
              {t("articleAiAlternative.chapter8.list.4")}
            </li>
          </ul>
          <p className={s.p}>{t("articleAiAlternative.chapter8.p1")}</p>
        </div>
      </section>
    </div>
  );
}
