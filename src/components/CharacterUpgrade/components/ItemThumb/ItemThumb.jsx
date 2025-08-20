"use client";

import Image from "next/image";
import s from "./ItemThumb.module.scss";

export default function ItemThumb({ item, className, applied, ...props }) {
  const classList = [s.itemThumb];
  if (className) classList.push(className);
  if (applied) classList.push("applied");

  return (
    <div className={classList.join(" ")} {...props}>
      {item.imgs.map((img, i) => (
        <Image
          key={i}
          className={s[item.type] + (i ? " back" : "")}
          src={img}
          alt="Icon"
          draggable={false}
        />
      ))}
    </div>
  );
}
