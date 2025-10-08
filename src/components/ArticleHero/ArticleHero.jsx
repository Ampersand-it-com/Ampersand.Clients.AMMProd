"use client";

// import Image from "next/image";
// import heroImg from "@/assets/articles/agency1.0/hero.png";
import { useTranslations } from "@/i18n";
import Button from "../CharacterUpgrade/components/Button";
import Ellipse from "@/helpers/components/Ellipse/Ellipse";
import s from "./articleHero.module.scss";
import { useRouter } from "next/navigation";

export default function ArticleHero({ namespace = "articleAgency" }) {
  const { t } = useTranslations();
  const router = useRouter();

  const onButtonClick = () => {
    router.push("#article-body");
  };

  return (
    <section className={s.hero}>
      <Ellipse className={s.ellipse} />
      <div className={s.content}>
        <h1 className={s.title}>{t(`${namespace}.hero.title`)}</h1>
        <Button className={s.button} onClick={onButtonClick}>
          {t(`${namespace}.hero.button`)}
        </Button>
      </div>
      {/* <div className={s.imageWrapper}>
        <Image src={heroImg} alt="Article hero" className={s.image} priority />
      </div> */}
    </section>
  );
}
