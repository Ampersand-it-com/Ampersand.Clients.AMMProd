"use client";

import s from "./BlogArticles.module.scss";
import { useState, useMemo } from "react";
import PlayIcon from "@/assets/icons/playIcon.svg";
import { useLocalizedPath, useTranslations } from "@/i18n";
import Button from "../CharacterUpgrade/components/Button";
import Link from "next/link";

function BlogArticles() {
  const { t } = useTranslations();
  const { toPage } = useLocalizedPath();

  const content = useMemo(
    () => [
      {
        link: "https://www.youtube.com/embed/XT4jRiyFLoc",
        preview: "https://i.ytimg.com/vi/XT4jRiyFLoc/hqdefault.jpg",
        title: t("blog.articles.0.title"),
        description: t("blog.articles.0.description"),
        page: toPage("/agency-1.0"),
      },
    ],
    []
  );

  const [isVideoClicked, setIsVideoClicked] = useState(
    content.map(() => false)
  );
  function onVideoClick(index) {
    setIsVideoClicked(isVideoClicked.map((v, i) => (i === index ? true : v)));
  }

  return (
    <div className={s.root} id="articles">
      {content.map((article, index) => (
        <div className={s.card} key={index}>
          <div className={s.video} onClick={() => onVideoClick(index)}>
            {isVideoClicked[index] ? (
              <iframe
                src={article.link}
                className={s.preview}
                width={320}
                height={190}
                title="video"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                className={s.preview}
                src={article.preview}
                alt="video_preview"
              />
            )}
            {!isVideoClicked[index] && (
              <button type="button" className={s.videoBtn} aria-label="play">
                <PlayIcon />
              </button>
            )}
          </div>

          <div className={s.textBlock}>
            <Link href={article.page}>
              <Button className={s.cardTitle}>{article.title}</Button>
            </Link>
            <p className={s.cardDescription}>{article.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogArticles;
