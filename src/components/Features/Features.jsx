"use client";

import { useState, useEffect } from "react";
import s from "./Features.module.scss";
import TransferIcon from "@/assets/icons/transferIcon.svg";
import FundsIcon from "@/assets/icons/fundsIcon.svg";
import UsersIcon from "@/assets/icons/usersIcon.svg";
import MovieIcon from "@/assets/icons/movieIcon.svg";
import MusculeIcon from "@/assets/icons/muscleIcon.svg";
import RocketIcon from "@/assets/icons/rocketIcon.svg";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "@/i18n";

function Features() {
  const { t } = useTranslations();
  const { ref: labelRef, inView: isLabelVisible } = useInView();
  const { ref: titleRef, inView: isTitleVisible } = useInView();
  const [isLabelShown, setIsLabelShown] = useState(false);
  const [isTitlelShown, setIsTitleShown] = useState(false);

  useEffect(() => {
    if (isLabelVisible) {
      setIsLabelShown(true);
    }
    if (isTitleVisible) {
      setIsTitleShown(true);
    }
  }, [isLabelVisible, isTitleVisible]);

  return (
    <div className={s.root}>
      <h2
        className={classNames(s.title, { [s.titleAnimation]: isTitlelShown })}
        ref={titleRef}
      >
        {t("home.ourFeatures.title")}
      </h2>
      <div
        className={classNames(s.label, { [s.labelAnimation]: isLabelShown })}
        ref={labelRef}
      >
        {t("home.ourFeatures.label")}
      </div>
      <p
        className={classNames(s.describe, {
          [s.describeAnimation]: isLabelShown,
        })}
      >
        {t("home.ourFeatures.subTitle")}
      </p>
      <ul className={s.featuresList}>
        <li
          className={classNames(s.featuresItem, s.firstCard, {
            [s.featuresItemFirstAnimation]: isLabelShown,
          })}
        >
          <div className={s.featuresIconContainer}>
            <TransferIcon />
          </div>
          <div>
            <h3 className={s.featureTitle}>
              {t("home.ourFeatures.cards.firstItem.title")}
            </h3>
            <p className={s.featureDescription}>
              {t("home.ourFeatures.cards.firstItem.descriptions")}
            </p>
          </div>
        </li>
        <li
          className={classNames(s.featuresItem, s.secondCard, {
            [s.featuresItemFirstAnimation]: isLabelShown,
          })}
        >
          <div className={s.featuresIconContainer}>
            <FundsIcon />
          </div>
          <div>
            <h3 className={s.featureTitle}>
              {t("home.ourFeatures.cards.secondItem.title")}
            </h3>
            <p className={s.featureDescription}>
              {t("home.ourFeatures.cards.secondItem.descriptions")}
            </p>
          </div>
        </li>
        <li
          className={classNames(s.featuresItem, s.thirdCard, {
            [s.featuresItemFirstAnimation]: isLabelShown,
          })}
        >
          <div className={s.featuresIconContainer}>
            <UsersIcon />
          </div>
          <div>
            <h3 className={s.featureTitle}>
              {t("home.ourFeatures.cards.thirdItem.title")}
            </h3>
            <p className={s.featureDescription}>
              {t("home.ourFeatures.cards.thirdItem.descriptions")}
            </p>
          </div>
        </li>
        <li
          className={classNames(s.featuresItem, s.fourthCard, {
            [s.featuresItemSecondAnimation]: isLabelShown,
          })}
        >
          <div className={s.featuresIconContainer}>
            <MovieIcon />
          </div>
          <div>
            <h3 className={s.featureTitle}>
              {t("home.ourFeatures.cards.fourthItem.title")}
            </h3>
            <p className={s.featureDescription}>
              {t("home.ourFeatures.cards.fourthItem.descriptions")}
            </p>
          </div>
        </li>
        <li
          className={classNames(s.featuresItem, s.fifthCard, {
            [s.featuresItemSecondAnimation]: isLabelShown,
          })}
        >
          <div className={s.featuresIconContainer}>
            <MusculeIcon />
          </div>
          <div>
            <h3 className={s.featureTitle}>
              {t("home.ourFeatures.cards.fifthItem.title")}
            </h3>
            <p className={s.featureDescription}>
              {t("home.ourFeatures.cards.fifthItem.descriptions")}
            </p>
          </div>
        </li>
        <li
          className={classNames(s.featuresItem, s.sixthCard, {
            [s.featuresItemSecondAnimation]: isLabelShown,
          })}
        >
          <div className={s.featuresIconContainer}>
            <RocketIcon />
          </div>
          <div>
            <h3 className={s.featureTitle}>
              {t("home.ourFeatures.cards.sixthItem.title")}
            </h3>
            <p className={s.featureDescription}>
              {t("home.ourFeatures.cards.sixthItem.descriptions")}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Features;
