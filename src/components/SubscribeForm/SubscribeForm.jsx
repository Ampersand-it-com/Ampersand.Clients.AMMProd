"use client";

import { useTranslations } from "@/i18n";
import s from "./SubscribeForm.module.scss";
import Select from "react-select";
import cn from "classnames";
import { useRef, useState, useEffect } from "react";
import Button from "../CharacterUpgrade/components/Button";
import { customStyles } from "@/styles/customStyles";
import Loader from "@/helpers/components/Loader/Loader";

export default function SubscribeForm() {
  const { t } = useTranslations();

  const niches = [
    { value: "it", label: t("blog.subscribe.niches.it") },
    { value: "design", label: t("blog.subscribe.niches.design") },
    { value: "marketing", label: t("blog.subscribe.niches.marketing") },
    { value: "media", label: t("blog.subscribe.niches.media") },
    { value: "gaming", label: t("blog.subscribe.niches.gaming") },
    { value: "film", label: t("blog.subscribe.niches.film") },
    { value: "music", label: t("blog.subscribe.niches.music") },
    { value: "fashion", label: t("blog.subscribe.niches.fashion") },
    { value: "education", label: t("blog.subscribe.niches.education") },
    { value: "health", label: t("blog.subscribe.niches.health") },
    { value: "other", label: t("blog.subscribe.niches.other") },
  ];

  const countries = [
    { value: "ua", label: t("blog.subscribe.countries.ua") },
    { value: "us", label: t("blog.subscribe.countries.us") },
    { value: "gb", label: t("blog.subscribe.countries.gb") },
    { value: "ca", label: t("blog.subscribe.countries.ca") },
    { value: "au", label: t("blog.subscribe.countries.au") },
    { value: "de", label: t("blog.subscribe.countries.de") },
    { value: "fr", label: t("blog.subscribe.countries.fr") },
    { value: "it", label: t("blog.subscribe.countries.it") },
    { value: "es", label: t("blog.subscribe.countries.es") },
    { value: "pl", label: t("blog.subscribe.countries.pl") },
    { value: "nl", label: t("blog.subscribe.countries.nl") },
    { value: "other", label: t("blog.subscribe.countries.other") },
  ];

  const [email, setEmail] = useState("");
  const [niche, setNiche] = useState(null);
  const [country, setCountry] = useState(null);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const myForm = useRef();

  useEffect(() => {
    email.length > 5 && email.includes("@")
      ? setIsEmailValid(true)
      : setIsEmailValid(false);
  }, [email]);

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setIsDirty(true);

    if (isEmailValid) {
      setIsLoading(true);

      const body = {
        emailTo: ["kamazotbrosov@ukr.net"],
        clientId: "andrewowlgrim",
        clientSecret: "andrewowlgrim",
        subject: "Нова підписка на розсилку",
        templateName: null,
        htmlTemplate: `
  <table style="width:100%; border-collapse:collapse; font-family:Roboto, sans-serif; font-size:14px; color:#ffffff; background:#000000;">
    <tr>
      <td style="border:1px solid #444; padding:8px; font-weight:bold;">Email</td>
      <td style="border:1px solid #444; padding:8px;">${email}</td>
    </tr>
    <tr>
      <td style="border:1px solid #444; padding:8px; font-weight:bold;">Ніша</td>
      <td style="border:1px solid #444; padding:8px;">${niche?.value || ""}</td>
    </tr>
    <tr>
      <td style="border:1px solid #444; padding:8px; font-weight:bold;">Країна</td>
      <td style="border:1px solid #444; padding:8px;">${
        country?.value || ""
      }</td>
    </tr>
  </table>
`,
      };

      fetch("https://email.ampersand-it.com/requestemail", {
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
          } else {
            throw new Error("Failed to submit form");
          }
        })
        .catch((error) => alert(error))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div className={s.root}>
      {isSubmited ? (
        <div className={s.successBlock}>
          <h2>{t("blog.subscribe.success.title")}</h2>
          <p>{t("blog.subscribe.success.text")}</p>
        </div>
      ) : (
        <>
          <div className={s.titleBlock}>
            <h2 className={s.title}>{t("blog.subscribe.title")}</h2>
            <p className={s.subtitle}>{t("blog.subscribe.subtitle")}</p>
          </div>

          {isLoading && <Loader className={s.loader} />}

          <form
            className={cn(s.form, isLoading && s.disabled)}
            name="subscribeForm"
            action="/subscribeForm"
            method="POST"
            data-netlify="true"
            ref={myForm}
          >
            <input type="hidden" name="form-name" value="subscribeForm" />

            <label
              className={cn(s.label, {
                [s.errorState]: !isEmailValid && isDirty,
              })}
            >
              <span>{t("blog.subscribe.email.label")}</span>
              <input
                type="email"
                className={s.input}
                autoComplete="off"
                placeholder={t("blog.subscribe.email.placeholder")}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!isEmailValid && isDirty && (
                <span className={s.error}>{t("common.error")}</span>
              )}
            </label>

            <div className={s.formRow}>
              <label className={s.label}>
                <span>{t("blog.subscribe.niche.label")}</span>
                <Select
                  options={niches}
                  placeholder={t("blog.subscribe.niche.placeholder")}
                  isSearchable={false}
                  styles={customStyles}
                  onChange={(value) => setNiche(value)}
                />
              </label>
              <label className={s.label}>
                <span>{t("blog.subscribe.country.label")}</span>
                <Select
                  options={countries}
                  placeholder={t("blog.subscribe.country.placeholder")}
                  isSearchable={true}
                  styles={customStyles}
                  onChange={(value) => setCountry(value)}
                />
              </label>
            </div>

            <Button
              className={s.submitBtn}
              type="button"
              onClick={handleSubmitClick}
            >
              {t("blog.subscribe.button")}
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
