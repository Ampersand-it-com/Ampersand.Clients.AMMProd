"use client";
import s from "./Header.module.scss";
import Logo from "@/assets/icons/logoIcon.svg";
import Menu from "@/assets/icons/menuIcon.svg";
import ArrowRightUp from "@/assets/icons/arrowRightUpIcon.svg";
import CloseIcon from "@/assets/icons/closeIcon.svg";
import { useMemo, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { useLocalizedPath, useTranslations } from "@/i18n";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import Modal from "@/components/Modal/Modal";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const { t } = useTranslations();

  // menu

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    document.documentElement.style.overflow = "hidden";
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    document.documentElement.style.overflow = "auto";
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.documentElement.style.overflow = "auto";
  };

  const nodeRef = useRef(null);

  // modal

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.documentElement.style.overflow = "hidden";
  };

  // navigation

  const { toPage } = useLocalizedPath();
  const pathName = usePathname();
  const pathParts = pathName.split("/");

  //

  return (
    <div className={s.root} id="start">
      <Link href={toPage("/")} aria-label="link to the top of the page">
        <Logo className={s.logo} />
      </Link>
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
            <li
              className={classNames(s.menuItem, pathParts[2] == "" && s.active)}
            >
              <Link href={toPage("/")} onClick={() => handleLinkClick()}>
                {t("common.header.agency")}
              </Link>
            </li>
            <li
              className={classNames(
                s.menuItem,
                pathParts[2] == "products" && s.active
              )}
            >
              <Link
                href={toPage("/products/#products")}
                onClick={() => handleLinkClick()}
              >
                {t("common.header.products")}
              </Link>
            </li>
            <li
              className={classNames(
                s.menuItem,
                pathParts[2] == "cases" && s.active
              )}
            >
              <Link
                href={toPage("/cases/#caseStudies")}
                onClick={() => handleLinkClick()}
              >
                {t("common.header.caseStudies")}
              </Link>
            </li>
            <li
              className={classNames(
                s.menuItem,
                pathParts[2] == "blog" && s.active
              )}
            >
              <Link href={toPage("/blog")} onClick={() => handleLinkClick()}>
                {t("common.header.blog")}
              </Link>
            </li>
            <li
              className={classNames(
                s.menuItem,
                pathParts[2] == "clients" && s.active
              )}
            >
              <Link
                href={toPage("/clients/#clients")}
                onClick={() => handleLinkClick()}
              >
                {t("common.header.clients")}
              </Link>
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
          <li
            className={classNames(
              s.desctopMenuItem,
              pathParts[2] == "" && s.active
            )}
          >
            <Link href={toPage("/")} onClick={() => handleLinkClick()}>
              {t("common.header.agency")}
            </Link>
          </li>
          <li
            className={classNames(
              s.desctopMenuItem,
              pathParts[2] == "products" && s.active
            )}
          >
            <Link
              href={toPage("/products/#products")}
              onClick={() => handleLinkClick()}
            >
              {t("common.header.products")}
            </Link>
          </li>
          <li
            className={classNames(
              s.desctopMenuItem,
              pathParts[2] == "cases" && s.active
            )}
          >
            <Link
              href={toPage("/cases/#caseStudies")}
              onClick={() => handleLinkClick()}
            >
              {t("common.header.caseStudies")}
            </Link>
          </li>
          <li
            className={classNames(
              s.desctopMenuItem,
              pathParts[2] == "blog" && s.active
            )}
          >
            <Link href={toPage("/blog")} onClick={() => handleLinkClick()}>
              {t("common.header.blog")}
            </Link>
          </li>
          <li
            className={classNames(
              s.desctopMenuItem,
              pathParts[2] == "clients" && s.active
            )}
          >
            <Link
              href={toPage("/clients/#clients")}
              onClick={() => handleLinkClick()}
            >
              {t("common.header.clients")}
            </Link>
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
