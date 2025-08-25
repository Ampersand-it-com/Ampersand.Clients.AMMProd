"use client";

import s from "./Clients.module.scss";
import client1 from "@/assets/images/client1.jpg";
import client2 from "@/assets/images/client2.jpg";
import client3 from "@/assets/images/client3.jpg";
import client4 from "@/assets/images/client4.jpg";
import client5 from "@/assets/images/client5.jpg";
import client6 from "@/assets/images/client6.jpg";
import client7 from "@/assets/images/client7.jpg";
import client8 from "@/assets/images/client8.jpg";
import client9 from "@/assets/images/client9.png";
import clutch from "@/assets/images/clutch.png";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "@/i18n";
import Image from "next/image";

function Clients() {
  const { t } = useTranslations();

  const { ref: titleRef, inView: isTitleVisible } = useInView();
  const [isTitlelShown, setIsTitleShown] = useState(false);

  useEffect(() => {
    if (isTitleVisible) {
      setIsTitleShown(true);
    }
  }, [isTitleVisible]);

  return (
    <div className={s.root} id="clients">
      <h2
        className={classNames(s.title, { [s.titleAnimation]: isTitlelShown })}
        ref={titleRef}
      >
        {t("home.clients.title")}
      </h2>
      <ul className={s.clientsCardList}>
        <li
          className={classNames(s.clientOne, {
            [s.firstRowAnimation]: setIsTitleShown,
          })}
        >
          <Image
            className={s.clientsImg}
            src={client1}
            alt="client_image-1"
          ></Image>
        </li>
        <li
          className={classNames(s.clientTwo, {
            [s.firstRowAnimation]: setIsTitleShown,
          })}
        >
          <Image
            className={s.clientsImg}
            src={client2}
            alt="client_image-2"
          ></Image>
        </li>
        <li
          className={classNames(s.clientThree, {
            [s.firstRowAnimation]: setIsTitleShown,
          })}
        >
          <Image
            className={s.clientsImg}
            src={client3}
            alt="client_image-3"
          ></Image>
        </li>
        <li
          className={classNames(s.clientFour, {
            [s.firstRowAnimation]: setIsTitleShown,
          })}
        >
          <Image
            className={s.clientsImg}
            src={client4}
            alt="client_image-4"
          ></Image>
        </li>
        <li
          className={classNames(s.clientFive, {
            [s.secondRowAnimation]: setIsTitleShown,
          })}
        >
          <Image
            className={s.clientsImg}
            src={client5}
            alt="client_image-5"
          ></Image>
        </li>
        <li
          className={classNames(s.clientSix, {
            [s.secondRowAnimation]: setIsTitleShown,
          })}
        >
          <Image
            className={s.clientsImg}
            src={client6}
            alt="client_image-6"
          ></Image>
        </li>
        <li
          className={classNames(s.clientSeven, {
            [s.secondRowAnimation]: setIsTitleShown,
          })}
        >
          <Image
            className={s.clientsImg}
            src={client7}
            alt="client_image-7"
          ></Image>
        </li>
        <li
          className={classNames(s.clientEight, {
            [s.secondRowAnimation]: setIsTitleShown,
          })}
        >
          <Image
            className={s.clientsImg}
            src={client8}
            alt="client_image-8"
          ></Image>
        </li>
        <li
          className={classNames(s.clientNine, {
            [s.secondRowAnimation]: setIsTitleShown,
          })}
        >
          <Image
            className={s.clientsImg}
            src={client9}
            alt="client_image-9"
          ></Image>
        </li>
      </ul>
      <p
        className={classNames(s.clutch, { [s.clutchAnimation]: isTitlelShown })}
      >
        {t("home.clients.clutch")}
      </p>
      <a
        href="https://clutch.co/profile/amm#summary"
        target="_blank"
        rel="noreferrer"
        className={classNames(s.clutchLink, {
          [s.clutchAnimation]: isTitlelShown,
        })}
      >
        <Image src={clutch} alt="clutch_link"></Image>
      </a>
    </div>
  );
}

export default Clients;
