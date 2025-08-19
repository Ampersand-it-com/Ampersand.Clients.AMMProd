"use client";

import { useState, useEffect } from "react";
import s from "./WhoAreWe.module.scss";
import StarIcon from "@/assets/icons/starIcon.svg";
import PlayIcon from "@/assets/icons/playIcon.svg";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { useTranslations } from "@/i18n";

function WhoAreWe() {
  const { t } = useTranslations();
  const [isVideoClicked, setIsVideoClicked] = useState(false);
  const { ref: labelRef, inView: isLabelVisible } = useInView();
  const { ref: titleRef, inView: isTitleVisible } = useInView();
  const [isLabelShown, setIsLabelShown] = useState(false);
  const [isTitlelShown, setIsTitleShown] = useState(false);

  useEffect(() => {
    if (isLabelVisible) {
      setIsLabelShown(true);
    }
    if (isTitleVisible) {
      setIsTitleShown(true);
    }
  }, [isLabelVisible, isTitleVisible]);

  return (
    <div className={s.root} id="aboutUs">
      <div className={s.desctopContainer}>
        <div className={s.leftBlock}>
          <div className={s.labelContainer}>
            <div
              className={classNames(s.label, {
                [s.labelAnimation]: isLabelShown,
              })}
              ref={labelRef}
            >
              {t("home.whoWeAre.label")}
            </div>
          </div>
        </div>
        <div className={s.rightBlock}>
          <div
            className={classNames(s.title, {
              [s.titleAnimation]: isTitlelShown,
            })}
            ref={titleRef}
          >
            {t("home.whoWeAre.title")}
            <div>{t("home.whoWeAre.description")}</div>
          </div>
          <ul className={s.reasonList}>
            <li className={s.reasonItem}>
              <StarIcon className={s.starIcon} />
              {t("home.whoWeAre.reasonList.firstItem")}
            </li>
            <li className={s.reasonItem}>
              <StarIcon className={s.starIcon} />
              {t("home.whoWeAre.reasonList.secondItem")}
            </li>
            <li className={s.reasonItem}>
              <StarIcon className={s.starIcon} />
              {t("home.whoWeAre.reasonList.thirdItem")}
            </li>
            <li className={s.reasonItem}>
              <StarIcon className={s.starIcon} />
              {t("home.whoWeAre.reasonList.fourthItem")}
            </li>
            <li className={s.reasonItem}>
              <StarIcon className={s.starIcon} />
              {t("home.whoWeAre.reasonList.fifthItem")}
            </li>
          </ul>
        </div>
      </div>
      <div className={s.video} onClick={() => setIsVideoClicked(true)}>
        {isVideoClicked ? (
          <iframe
            src="https://www.youtube.com/embed/eeRd0drLd6Y?si=Q3HhcFJsvhorD3yZ"
            className={s.preview}
            width={320}
            height={190}
            title="video"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            className={s.preview}
            src="https://i3.ytimg.com/vi/eeRd0drLd6Y/maxresdefault.jpg"
            alt="video_preview"
          />
        )}
        {!isVideoClicked && (
          <button type="button" className={s.videoBtn} aria-label="play">
            <PlayIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default WhoAreWe;
