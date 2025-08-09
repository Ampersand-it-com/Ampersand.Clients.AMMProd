import s from "./Hero.module.scss";
import { useState } from "react";
import { useLocale } from "@/helpers/locale";
// import Modal from "components/Modal/Modal";

function Hero() {
  const { t } = useLocale();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className={s.root}>
      <div className={s.eclipseTwo}></div>
      <div className={s.elipse}></div>

      <header className={s.mobileTitleContainer}>
        <h1 className={s.name}>{t.title.name}</h1>
        <p className={s.title}>{t.title.title}</p>
      </header>

      <div className={s.desctopTitle} aria-hidden="true">
        {t.title.name} {t.title.title}
      </div>

      <h2 className={s.subTitle}>{t.title.subTitle}</h2>

      <button className={s.modalBtn} onClick={handleOpenModal}>
        {t.title.mainBtn}
      </button>

      {/* <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
    </div>
  );
}

export default Hero;
