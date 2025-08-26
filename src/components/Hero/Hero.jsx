"use client";

import { useTranslations } from "@/i18n";
import s from "./Hero.module.scss";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";

function Hero() {
  const { t } = useTranslations();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.documentElement.style.overflow = "hidden";
  };

  return (
    <div className={s.root}>
      <div className={s.eclipseTwo}></div>
      <div className={s.elipse}></div>

      <header className={s.mobileTitleContainer}>
        <h1 className={s.name}>{t("home.title.name")}</h1>
        <p className={s.title}>{t("home.title.title")}</p>
      </header>

      <div className={s.desctopTitle} aria-hidden="true">
        {t("home.title.name")} {t("home.title.title")}
      </div>

      <h2 className={s.subTitle}>{t("home.title.subTitle")}</h2>

      <button className={s.modalBtn} onClick={handleOpenModal}>
        {t("home.title.mainBtn")}
      </button>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default Hero;
