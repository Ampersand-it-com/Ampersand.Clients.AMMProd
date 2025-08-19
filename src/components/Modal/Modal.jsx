"use client";

import s from "./Modal.module.scss";
import CloseIcon from "@/assets/icons/closeIcon.svg";
import pigImage from "@/assets/images/pigImg.png";
import pigImageDesc from "@/assets/images/pigImgDesc.png";
import { useState, useRef } from "react";
import classNames from "classnames";
import { useEffect } from "react";
// import useLocaleNavigate from 'hooks/useLocaleNavigate'; //to do
import { useTranslations } from "@/i18n";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";

function Modal({ isModalOpen, setIsModalOpen }) {
  const { t } = useTranslations();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const myForm = useRef();
  const nodeRef = useRef(null);

  // Navigation

  // const navigateToSent = useLocaleNavigate('/sent'); // to do
  const handleSubmit = () => {
    // navigateToSent();
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setIsDirty(true);
    if (isNameValid && isPhoneValid) {
      const body = {
        emailTo: ["amm.prod1@gmail.com"],
        clientId: "ammagency",
        clientSecret: "SDKJLenv83n&#@nmv98n387Sf",
        contactEmail: email,
        contactFirstName: name,
        contactPhoneNumber: phone,
        includeSystemInfo: true,
      };

      // setup request
      fetch("https://email.ampersand-it.com/sendcontactusform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Form successfully submitted");
            setIsSubmited(true);
            setIsDirty(false);
            handleSubmit();
          } else {
            throw new Error("Failed to submit form");
          }
        })
        .catch((error) => alert(error));
    }
  };

  useEffect(() => {
    name.length > 2 ? setIsNameValid(true) : setIsNameValid(false);
    email.length > 5 && email.includes("@")
      ? setIsEmailValid(true)
      : setIsEmailValid(false);
    phone.toString().length >= 10 && phone.toString().length <= 13
      ? setIsPhoneValid(true)
      : setIsPhoneValid(false);
  }, [name, email, phone]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmited(false);
    setName("");
    setPhone("");
    setEmail("");
    setIsNameValid(false);
    setIsPhoneValid(false);
    setIsEmailValid(false);
    setIsDirty(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {isModalOpen && (
        <div className={s.backdrop} onClick={() => handleCloseModal()}></div>
      )}
      <CSSTransition
        nodeRef={nodeRef}
        in={isModalOpen}
        unmountOnExit
        timeout={250}
        classNames="modal"
      >
        <div
          ref={nodeRef}
          className={classNames(s.contactsModal, {
            [s.successModal]: isSubmited,
          })}
        >
          {/* {isSubmited ?
            <div className={s.successfullForm}>
              <h2 className={s.successTitle}>{t("common.contactModal.successTitle")}</h2>
              <p className={s.successDescription}>{t("common.contactModal.description")}</p>
              <p className={s.phoneContainer}><PhoneIcon className={s.phoneIcon} />{tel}</p>
              <p className={s.successRequest}>{t("common.contactModal.request")}</p>
              <Image src={foxImage} className={s.foxLogo} alt='fox mascot'/>
              <Image src={foxImageDesc} className={s.foxLogoDesc} alt='fox mascot'/>
            </div>
            : */}
          <div className={s.modalContainer}>
            <Image src={pigImage} className={s.pigLogo} alt="pig mascot" />
            <Image
              src={pigImageDesc}
              className={s.pigLogoDesc}
              alt="pig mascot"
            />
            <h2 className={s.modalTitle}>{t("common.contactModal.title")}</h2>
            <form
              className={s.contactForm}
              name="modalForm"
              method="POST"
              ref={myForm}
            >
              <input type="hidden" name="form-name" value="modalForm" />
              <label
                className={classNames({
                  [s.errorState]: !isNameValid && isDirty,
                })}
              >
                <span>{t("common.contactModal.name")}</span>
                <input
                  required
                  type="text"
                  autoComplete="off"
                  className={s.contactInput}
                  placeholder={t("common.contactModal.namePlaceholder")}
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!isNameValid && isDirty && (
                  <span className={s.error}>{t("common.error")}</span>
                )}
              </label>
              <label
                className={classNames({
                  [s.errorState]: !isPhoneValid && isDirty,
                })}
              >
                <span>{t("common.contactModal.phoneNumber")}</span>
                <input
                  required
                  type="tel"
                  autoComplete="off"
                  className={s.contactInput}
                  name="phone"
                  placeholder="+380"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {!isPhoneValid && isDirty && (
                  <span className={s.error}>{t("common.error")}</span>
                )}
              </label>
              <label
                className={classNames({
                  [s.errorState]: !isEmailValid && isDirty,
                })}
              >
                <span>{t("common.contactModal.email")}</span>
                <input
                  required
                  type="email"
                  autoComplete="off"
                  className={s.contactInput}
                  placeholder={t("common.contactModal.emailPlaceholder")}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!isEmailValid && isDirty && (
                  <span className={s.error}>{t("common.error")}</span>
                )}
              </label>
              <button
                className={s.submitBtn}
                type="button"
                onClick={(e) => handleSubmitClick(e)}
              >
                {t("common.contactModal.btn")}
              </button>
            </form>
          </div>
          {/* } */}
          <button
            className={s.modalCloseBtn}
            onClick={() => handleCloseModal()}
          >
            <CloseIcon />
          </button>
        </div>
      </CSSTransition>
    </>
  );
}

export default Modal;
