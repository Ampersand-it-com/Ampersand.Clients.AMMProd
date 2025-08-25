"use client";

import { useState, useRef, useEffect } from "react";
import s from "./ContactForm.module.scss";
import cn from "classnames";
import { useLocalizedPath, useTranslations } from "@/i18n";
import { useRouter } from "next/navigation";
import Loader from "@/helpers/components/Loader/Loader";

function ContactForm() {
  const { t } = useTranslations();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const myForm = useRef();

  // Navigation

  const router = useRouter();
  const { toPage } = useLocalizedPath();
  const handleSubmit = () => {
    router.push(toPage("/sent"));
  };

  // Handle Form

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setIsDirty(true);
    if (isNameValid && isPhoneValid) {
      setIsLoading(true);
      const body = {
        // prod
        emailTo: ["amm.prod1@gmail.com"],
        clientId: "ammagency",
        clientSecret: "SDKJLenv83n&#@nmv98n387Sf",
        // test
        // emailTo: ["kamazotbrosov@ukr.net"],
        // clientId: "andrewowlgrim",
        // clientSecret: "andrewowlgrim",
        //
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
            setIsSubmited(true);
            setIsDirty(false);
            handleSubmit();
          } else {
            throw new Error("Failed to submit form");
          }
        })
        .catch((error) => alert(error))
        .finally(() => {
          setIsLoading(false);
        });
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

  return (
    <div className={s.root}>
      <div className={s.elipseTwo}></div>
      <div className={s.elispse}></div>
      {/* {isSubmited ?
        <div className={s.submittedContainer}>
          <h2 className={s.successTitle}>{t("common.contactModal.successTitle")}</h2>
          <p className={s.successDescription}>{t("common.contactModal.description")}</p>
          <p className={s.phoneContainer}><PhoneIcon className={s.phoneIcon} />{tel}</p>
          <p className={s.successRequest}>{t("common.contactModal.request")}</p>
          <img src={foxImg} className={s.foxLogo} alt='fox mascot'/>
        </div>
        : */}
      <div className={s.formContainer}>
        <h2 className={s.title}>{t("home.contactForm.title")}</h2>
        <p className={s.description}>{t("home.contactForm.description")}</p>
        {isLoading && <Loader className={s.loader} />}
        <form
          className={cn(s.contactForm, isLoading && s.disabled)}
          name="contactForm"
          action="/contactForm"
          method="POST"
          data-netlify="true"
          ref={myForm}
        >
          <input type="hidden" name="form-name" value="contactForm" />
          <label className={cn({ [s.errorState]: !isNameValid && isDirty })}>
            <span>{t("common.contactModal.name")}</span>
            <input
              required
              type="text"
              className={s.contactInput}
              autoComplete="off"
              placeholder={t("common.contactModal.namePlaceholder")}
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {!isNameValid && isDirty && (
              <span className={s.error}>{t("common.error")}</span>
            )}
          </label>
          <label>
            <span>{t("common.contactModal.phoneNumber")}</span>
            <input
              required
              type="tel"
              className={s.contactInput}
              autoComplete="off"
              name="phone"
              placeholder="+380"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {!isPhoneValid && isDirty && (
              <span className={s.error}>{t("common.error")}</span>
            )}
          </label>
          <label>
            <span>{t("common.contactModal.email")}</span>
            <input
              type="email"
              className={s.contactInput}
              autoComplete="off"
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
    </div>
  );
}

export default ContactForm;
