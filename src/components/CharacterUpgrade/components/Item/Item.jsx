"use client";

import s from "./Item.module.scss";
import Button from "../Button/Button";
import ItemThumb from "../ItemThumb/ItemThumb";
import { useTranslations } from "@/i18n";

export default function Item({ item, applied, action, ...props }) {
  const classList = [s.item];
  if (applied) classList.push("applied");

  const { t } = useTranslations();

  return (
    <div className={classList.join(" ")} {...props}>
      <ItemThumb item={item} />
      <div className={s.itemDetails}>
        <h6 suppressHydrationWarning>{"Upgrade #" + item.number}</h6>
        <p>{t(item.text)}</p>
        {action && (
          <Button onClick={action}>
            {applied
              ? t("home.characterUpgrade.actionButton.applied")
              : t("home.characterUpgrade.actionButton.default")}
          </Button>
        )}
      </div>
    </div>
  );
}
