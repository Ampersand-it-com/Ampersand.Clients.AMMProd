"use client";
import s from "./LanguageSwitcher.module.scss";
import { locales, useTranslations } from "@/i18n";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const { lang } = useTranslations();

  return (
    <div className={s.container}>
      {locales.map((locale) => {
        const segments = pathname.split("/");
        segments[1] = locale;
        const newPath = segments.join("/");

        return (
          <React.Fragment key={locale}>
            <Link href={newPath}>
              <button className={s.langBtn}>{locale.toUpperCase()}</button>
            </Link>
            <div className={s.separator}></div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
