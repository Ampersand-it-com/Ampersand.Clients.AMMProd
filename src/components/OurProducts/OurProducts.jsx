"use client";

import { useState, useEffect } from "react";
import s from "./OurProducts.module.scss";
import StarIcon from "@/assets/icons/starIcon.svg";
import studioImage from "@/assets/images/studio.png";
import studioDescImage from "@/assets/images/studioDesc.jpg";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "@/i18n";
import Image from "next/image";

function OurProducts() {
  const { t } = useTranslations();
  const { ref: blockRef, inView: isBlockVisible } = useInView();
  const [isBlockShown, setIsBlockShown] = useState(false);

  useEffect(() => {
    if (isBlockVisible) {
      setIsBlockShown(true);
    }
  }, [isBlockVisible]);

  return (
    <div className={s.root} id="products">
      <h2
        className={classNames(s.title, { [s.titleAnimation]: isBlockShown })}
        ref={blockRef}
      >
        {t("home.products.title")}
      </h2>
      <div className={s.cardsContainer}>
        <div
          className={classNames(s.card, {
            [s.firstCardAnimation]: isBlockShown,
          })}
        >
          <Image
            src={studioDescImage}
            alt="studio foto"
            className={s.desctopFoto}
          ></Image>
        </div>
        <div className={s.mobilePlaseholder}></div>
        <div
          className={classNames(s.card, {
            [s.secondaCardAnimation]: isBlockShown,
          })}
        >
          <h3 className={s.cardTitle}>
            <span className={s.line}>/</span>
            {t("home.products.firstCard.title")}
          </h3>
          <ul className={s.carlList}>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.firstCard.firstItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.firstCard.secondItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.firstCard.thirdItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.firstCard.fourthItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.firstCard.fifthItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.firstCard.sixthItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.firstCard.seventhItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.firstCard.eightItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.firstCard.ninthItem")}
            </li>
          </ul>
        </div>
        <div
          className={classNames(s.card, {
            [s.thirdCardAnimation]: isBlockShown,
          })}
        >
          <h3 className={s.cardTitle}>
            <span className={s.line}>/</span>
            {t("home.products.secondCard.title")}
          </h3>
          <ul className={s.carlList}>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.secondCard.firstItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.secondCard.secondItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.secondCard.thirdItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.secondCard.fourthItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.secondCard.fifthItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.secondCard.sixthItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.secondCard.seventhItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.secondCard.eightItem")}
            </li>
          </ul>
        </div>
        <div
          className={classNames(s.card, {
            [s.fourCardAnimation]: isBlockShown,
          })}
        >
          <h3 className={s.cardTitle}>
            <span className={s.line}>/</span>
            {t("home.products.thirdCard.title")}
          </h3>
          <ul className={s.carlList}>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.thirdCard.firstItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.thirdCard.secondItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.thirdCard.thirdItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.thirdCard.fourthItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.thirdCard.fifthItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.thirdCard.sixthItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.thirdCard.seventhItem")}
            </li>
            <li className={s.listItem}>
              <StarIcon />
              {t("home.products.thirdCard.eightItem")}
            </li>
          </ul>
        </div>
        <div className={s.mobilePlaseholder}></div>
      </div>
      <Image
        src={studioImage}
        alt="studio foto"
        className={s.studioFoto}
      ></Image>
    </div>
  );
}

export default OurProducts;
