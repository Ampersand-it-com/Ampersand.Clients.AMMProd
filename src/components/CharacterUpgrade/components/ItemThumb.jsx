"use client";

import Image from "next/image";
import s from "../CharacterUpgrade.module.scss";

export default function ItemThumb({ item, className, applied, ...props }) {
  const classList = [s.itemThumb];
  if (className) classList.push(className);
  if (applied) classList.push(s.applied);

  return (
    <div className={classList.join(" ")} {...props}>
      {item.imgs.map((img, i) => (
        <Image
          key={i}
          className={s[item.type] + (i ? s.back : "")}
          src={img}
          alt="Icon"
          draggable={false}
        />
      ))}
    </div>
  );
}
