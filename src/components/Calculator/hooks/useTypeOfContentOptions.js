"use client";

import { useTranslations } from "@/i18n";
import { subTypeOfContentConst } from "../constants/subTypeOfContent";

export function useTypeOfContentOptions() {
  const { t } = useTranslations();

  const videoSelectOptions = [
    {
      value: subTypeOfContentConst.imageVideo,
      label: t("home.calculator.videoOption.imageVideo"),
    },
    {
      value: subTypeOfContentConst.advertisingVideo,
      label: t("home.calculator.videoOption.advertisingVideo"),
    },
    {
      value: subTypeOfContentConst.interviewsVideo,
      label: t("home.calculator.videoOption.interviewsVideo"),
    },
    {
      value: subTypeOfContentConst.youtubeVideo,
      label: t("home.calculator.videoOption.youtubeVideo"),
    },
    {
      value: subTypeOfContentConst.tiktokVideo,
      label: t("home.calculator.videoOption.tiktokVideo"),
    },
  ];

  const animationSelectOptions = [
    {
      value: subTypeOfContentConst.vector2dAnimation,
      label: t("home.calculator.animationOption.vector2dAnimation"),
    },
    {
      value: subTypeOfContentConst.perframe2dAnimation,
      label: t("home.calculator.animationOption.perframe2dAnimation"),
    },
    {
      value: subTypeOfContentConst.photorealistic3dAnimation,
      label: t("home.calculator.animationOption.photorealistic3dAnimation"),
    },
    {
      value: subTypeOfContentConst.cartoon3dAnimation,
      label: t("home.calculator.animationOption.cartoon3dAnimation"),
    },
    {
      value: subTypeOfContentConst.motion2dAnimation,
      label: t("home.calculator.animationOption.motion2dAnimation"),
    },
    {
      value: subTypeOfContentConst.motion3dAnimation,
      label: t("home.calculator.animationOption.motion3dAnimation"),
    },
  ];

  return { videoSelectOptions, animationSelectOptions };
}
