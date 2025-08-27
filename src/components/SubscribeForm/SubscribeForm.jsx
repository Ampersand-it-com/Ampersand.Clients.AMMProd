"use client";

import { useTranslations } from "@/i18n";
import s from "./SubscribeForm.module.scss";
import Select from "react-select";
import cn from "classnames";
import { useRef, useState } from "react";
import Button from "../CharacterUpgrade/components/Button";
import { customStyles } from "@/styles/customStyles";

const niches = [
  { value: "it", label: "IT" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
];

const countries = [
  { value: "us", label: "United States" },
  { value: "de", label: "Germany" },
  { value: "ua", label: "Ukraine" },
  { value: "pl", label: "Poland" },
];

export default function SubscribeForm() {
  const { t } = useTranslations();

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const myForm = useRef();
  const [isSubmited, setIsSubmited] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={s.root}>
      <div className={s.titleBlock}>
        <h2 className={s.title}>{t("blog.subscribe.title")}</h2>
        <p className={s.subtitle}>{t("blog.subscribe.subtitle")}</p>
      </div>
      <form
        className={cn(s.form, isLoading && s.disabled)}
        name="subscribeForm"
        action="/subscribeForm"
        method="POST"
        data-netlify="true"
        ref={myForm}
      >
        <input type="hidden" name="form-name" value="subscribeForm" />
        <label className={s.label}>
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
          <Select
            options={niches}
            placeholder="Выбери нишу..."
            isSearchable={false}
            styles={customStyles}
          />
          <Select
            options={countries}
            placeholder="Выбери страну..."
            isSearchable={true}
            styles={customStyles}
          />
        </div>
        <Button
          className={s.submitBtn}
          type="button"
          onClick={(e) => handleSubmitClick(e)}
        >
          {t("blog.subscribe.button")}
        </Button>
      </form>
    </div>
  );
}
