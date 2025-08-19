"use client";

import { useState, useEffect } from "react";
import s from "./WorkProcess.module.scss";
import imageOne from "@/assets/images/01.png";
import imageTwo from "@/assets/images/02.png";
import imageThree from "@/assets/images/03.png";
import imageFour from "@/assets/images/04.png";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "@/i18n";
import Image from "next/image";

function WorkProcess() {
  const { t } = useTranslations();
  const { ref: titleRef, inView: isTitleVisible } = useInView();
  const [isTitlelShown, setIsTitleShown] = useState(false);

  useEffect(() => {
    if (isTitleVisible) {
      setIsTitleShown(true);
    }
  }, [isTitleVisible]);

  return (
    <div className={s.root}>
      <h2
        className={classNames(s.title, { [s.titleAnimation]: isTitlelShown })}
        ref={titleRef}
      >
        {t("home.workProcess.title")}
      </h2>
      <div className={s.cardsContainer}>
        <div
          className={classNames(s.cardsItem, {
            [s.cardOneAnimation]: isTitlelShown,
          })}
        >
          <Image
            src={imageOne}
            alt="number one"
            className={s.cardsNumberImage}
          />
          <div className={s.desctopImagePlaceholder}></div>
          <div className={s.cardsList}>
            <h3 className={s.cardsItemTitle}>
              {t("home.workProcess.first.title")}
            </h3>
            <p className={s.cardsListItem}>
              {t("home.workProcess.first.firstItem")}
            </p>
            <p className={s.cardsListItem}>
              {t("home.workProcess.first.secondItem")}
            </p>
          </div>
        </div>
        <div
          className={classNames(s.cardsItem, {
            [s.cardTwoAnimation]: isTitlelShown,
          })}
        >
          <Image
            src={imageTwo}
            alt="number two"
            className={s.cardsNumberImage}
          />
          <div className={s.desctopImagePlaceholderTwo}></div>
          <div className={s.cardsList}>
            <h3 className={s.cardsItemTitle}>
              {t("home.workProcess.second.title")}
            </h3>
            <p className={s.cardsListItem}>
              {t("home.workProcess.second.firstItem")}
            </p>
            <p className={s.cardsListItem}>
              {t("home.workProcess.second.secondItem")}
            </p>
            <p className={s.cardsListItem}>
              {t("home.workProcess.second.thirdItem")}
            </p>
            <p className={s.cardsListItem}>
              {t("home.workProcess.second.fifthItem")}
            </p>
          </div>
        </div>
        <div
          className={classNames(s.cardsItem, {
            [s.cardThreeAnimation]: isTitlelShown,
          })}
        >
          <Image
            src={imageThree}
            alt="number three"
            className={s.cardsNumberImage}
          />
          <div className={s.desctopImagePlaceholderThree}></div>
          <div className={s.cardsList}>
            <h3 className={s.cardsItemTitle}>
              {t("home.workProcess.someTitles.one")}
            </h3>
            <p className={s.cardsListItem}>
              {t("home.workProcess.third.firstItem")}
            </p>
            <p className={s.cardsListItem}>
              {t("home.workProcess.third.secondItem")}
            </p>
          </div>
        </div>
        <div
          className={classNames(s.cardsItem, {
            [s.cardFourAnimation]: isTitlelShown,
          })}
        >
          <Image
            src={imageFour}
            alt="number four"
            className={s.cardsNumberImage}
          />
          <div className={s.desctopImagePlaceholderFour}></div>
          <div className={s.cardsList}>
            <h3 className={s.cardsItemTitle}>
              {t("home.workProcess.someTitles.two")}
            </h3>
            <p className={s.cardsListItem}>
              {t("home.workProcess.fourth.firstItem")}
            </p>
            <p className={s.cardsListItem}>
              {t("home.workProcess.fourth.secondItem")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
