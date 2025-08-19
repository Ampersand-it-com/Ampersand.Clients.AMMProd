"use client";
import s from "./Header.module.scss";
import Logo from "@/assets/icons/logoIcon.svg";
import Menu from "@/assets/icons/menuIcon.svg";
import ArrowRightUp from "@/assets/icons/arrowRightUpIcon.svg";
import CloseIcon from "@/assets/icons/closeIcon.svg";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { useTranslations } from "@/i18n";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import Modal from "@/components/Modal/Modal";

function Header() {
  const { t } = useTranslations();

  // menu

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const nodeRef = useRef(null);

  // modal

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  //

  return (
    <div className={s.root} id="start">
      <a href="#root" aria-label="link to the top of the page">
        <Logo className={s.logo} />
      </a>
      <button className={s.menuBtn} onClick={handleOpenMenu} aria-label="menu">
        <Menu />
      </button>
      <CSSTransition
        nodeRef={nodeRef}
        in={isMenuOpen}
        unmountOnExit
        timeout={250}
        classNames="menu"
      >
        <div ref={nodeRef} className={classNames(s.mobileMenu)}>
          <ul className={s.menuList}>
            <li className={s.menuItem}>
              <a href="#aboutUs" onClick={() => handleLinkClick()}>
                {t("common.header.aboutUs")}
              </a>
            </li>
            <li className={s.menuItem}>
              <a href="#priceCalculator" onClick={() => handleLinkClick()}>
                {t("common.header.priceCalculator")}
              </a>
            </li>
            <li className={s.menuItem}>
              <a href="#caseStudies" onClick={() => handleLinkClick()}>
                {t("common.header.caseStudies")}
              </a>
            </li>
            <li className={s.menuItem}>
              <a href="#conacts" onClick={() => handleLinkClick()}>
                {t("common.header.conacts")}
              </a>
            </li>
          </ul>
          <button className={s.contactBtn} onClick={() => setIsModalOpen(true)}>
            {t("common.header.contactUs")}
            <ArrowRightUp />
          </button>
          <LanguageSwitcher />
          <button className={s.closeBtn} onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
        </div>
      </CSSTransition>
      <div className={s.desctopMenu}>
        <ul className={s.desctopMenuList}>
          <li className={s.desctopMenuItem}>
            <a href="#aboutUs" onClick={() => handleLinkClick()}>
              {t("common.header.aboutUs")}
            </a>
          </li>
          <li className={s.desctopMenuItem}>
            <a href="#priceCalculator" onClick={() => handleLinkClick()}>
              {t("common.header.priceCalculator")}
            </a>
          </li>
          <li className={s.desctopMenuItem}>
            <a href="#caseStudies" onClick={() => handleLinkClick()}>
              {t("common.header.caseStudies")}
            </a>
          </li>
          <li className={s.desctopMenuItem}>
            <a href="#conacts" onClick={() => handleLinkClick()}>
              {t("common.header.conacts")}
            </a>
          </li>
        </ul>
        <LanguageSwitcher />
        <button className={s.contactBtn} onClick={handleOpenModal}>
          {t("common.header.contactUs")}
          <ArrowRightUp />
        </button>
      </div>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default Header;
