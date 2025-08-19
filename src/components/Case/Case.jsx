"use client";

import { useState, useEffect } from "react";
import s from "./Case.module.scss";
import PlayIcon from "@/assets/icons/playIcon.svg";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { useTranslations } from "@/i18n";

function Case() {
  const { t } = useTranslations();
  const [isVideoClicked, setIsVideoClicked] = useState(false);
  const [isSecondVideoClicked, setIsSecondVideoClicked] = useState(false);
  const [isThirdVideoClicked, setIsThirdVideoClicked] = useState(false);
  const [isFourthVideoClicked, setIsFourthVideoClicked] = useState(false);
  const { ref: descriptionRef, inView: isDescriptionVisible } = useInView();
  const { ref: titleRef, inView: isTitleVisible } = useInView();
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);
  const [isTitlelShown, setIsTitleShown] = useState(false);

  useEffect(() => {
    if (isDescriptionVisible) {
      setIsDescriptionShown(true);
    }
    if (isTitleVisible) {
      setIsTitleShown(true);
    }
  }, [isDescriptionVisible, isTitleVisible]);

  return (
    <div className={s.root} id="caseStudies">
      <h2
        className={classNames(s.title, { [s.titleAnimation]: isTitlelShown })}
        ref={titleRef}
      >
        {t("home.caseStudies.title")}
      </h2>
      <div
        className={classNames({ [s.descriptionAnimation]: isDescriptionShown })}
        ref={descriptionRef}
      >
        <p className={s.description}>{t("home.caseStudies.description")}</p>
        <a
          href="https://www.youtube.com/channel/UCDpiH6JPPe3-FBqhRZG-96g"
          target="_blanc"
          className={s.link}
        >
          {t("home.caseStudies.link")}
        </a>
      </div>

      <div className={s.card}>
        <div className={s.video} onClick={() => setIsVideoClicked(true)}>
          {isVideoClicked ? (
            <iframe
              src="https://www.youtube.com/embed/XT4jRiyFLoc"
              className={s.preview}
              width={320}
              height={190}
              title="video"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              className={s.preview}
              src="https://i.ytimg.com/vi/XT4jRiyFLoc/hqdefault.jpg"
              alt="video_preview"
            />
          )}
          {!isVideoClicked && (
            <button type="button" className={s.videoBtn} aria-label="play">
              <PlayIcon />
            </button>
          )}
        </div>
        <div>
          <h3 className={s.cardsTitle}>
            {t("home.caseStudies.secondCard.title")}
          </h3>
          <div className={s.subTitle}>{t("home.caseStudies.need")}</div>
          <div className={s.text}>{t("home.caseStudies.fourthCard.need")}</div>
          <div className={s.subTitle}>{t("home.caseStudies.result")}</div>
          <div className={s.text}>
            {t("home.caseStudies.fourthCard.result")}
          </div>
        </div>
      </div>

      <div className={s.card}>
        <div className={s.video} onClick={() => setIsSecondVideoClicked(true)}>
          {isSecondVideoClicked ? (
            <iframe
              src="https://www.youtube.com/embed/7i5gG8rnpcA"
              className={s.preview}
              width={320}
              height={190}
              title="video"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              className={s.preview}
              src="https://i.ytimg.com/vi/7i5gG8rnpcA/hqdefault.jpg"
              alt="video_preview"
            />
          )}
          {!isSecondVideoClicked && (
            <button type="button" className={s.videoBtn} aria-label="play">
              <PlayIcon />
            </button>
          )}
        </div>
        <div>
          <h3 className={s.cardsTitle}>
            {t("home.caseStudies.secondCard.title")}
          </h3>
          <div className={s.subTitle}>{t("home.caseStudies.need")}</div>
          <div className={s.text}>{t("home.caseStudies.secondCard.need")}</div>
          <div className={s.subTitle}>{t("home.caseStudies.result")}</div>
          <div className={s.text}>
            {t("home.caseStudies.secondCard.result")}
          </div>
        </div>
      </div>
      <div className={s.card}>
        <div className={s.video} onClick={() => setIsThirdVideoClicked(true)}>
          {isThirdVideoClicked ? (
            <iframe
              src="https://www.youtube.com/embed/IrVYH1WYgMk"
              className={s.preview}
              width={320}
              height={190}
              title="video"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              className={s.preview}
              src="https://i.ytimg.com/vi/IrVYH1WYgMk/hqdefault.jpg"
              alt="video_preview"
            />
          )}
          {!isThirdVideoClicked && (
            <button type="button" className={s.videoBtn} aria-label="play">
              <PlayIcon />
            </button>
          )}
        </div>
        <div>
          <h3 className={s.cardsTitle}>
            {t("home.caseStudies.thirdCard.title")}
          </h3>
          <div className={s.subTitle}>{t("home.caseStudies.need")}</div>
          <div className={s.text}>{t("home.caseStudies.thirdCard.need")}</div>
          <div className={s.subTitle}>{t("home.caseStudies.result")}</div>
          <div className={s.text}>{t("home.caseStudies.thirdCard.result")}</div>
        </div>
      </div>
    </div>
  );
}

export default Case;
