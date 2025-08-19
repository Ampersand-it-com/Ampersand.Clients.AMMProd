"use client";

import { useTranslations } from "@/i18n";

export function useImportantOptions() {
  const { t } = useTranslations();

  const imageVideoImportantOptions = [
    {
      value: "1.2 scenario",
      label: t("home.calculator.importantOptions.scenario"),
    },
    { value: "1.5 sound", label: t("home.calculator.importantOptions.sound") },
  ];

  const marketVideoImportantOptions = [
    {
      value: "1.2 scenario",
      label: t("home.calculator.importantOptions.scenario"),
    },
    { value: "1.5 sound", label: t("home.calculator.importantOptions.sound") },
    {
      value: "1.2 actors",
      label: t("home.calculator.importantOptions.actors"),
    },
    {
      value: "1.2 location",
      label: t("home.calculator.importantOptions.location"),
    },
    {
      value: "1.2 makeUp",
      label: t("home.calculator.importantOptions.makeUp"),
    },
    {
      value: "1.2 graphics",
      label: t("home.calculator.importantOptions.graphics"),
    },
  ];

  const interviewVideoImportantOptions = [
    { value: "1.1 plan", label: t("home.calculator.importantOptions.plan") },
    {
      value: "1.3 mounting",
      label: t("home.calculator.importantOptions.mounting"),
    },
    {
      value: "1.2 graphics",
      label: t("home.calculator.importantOptions.graphics"),
    },
  ];

  const vector2dAnimationImportantOptions = [
    {
      value: "1.2 scenario",
      label: t("home.calculator.importantOptions.scenario"),
    },
    { value: "1.1 sound", label: t("home.calculator.importantOptions.sound") },
  ];

  const perframe2dAnimationImportantOptions = [
    {
      value: "1.1 scenario",
      label: t("home.calculator.importantOptions.scenario"),
    },
    { value: "1.1 sound", label: t("home.calculator.importantOptions.sound") },
  ];

  const photorealistick3dAnimationImportantOptions = [
    {
      value: "1.1 scenario",
      label: t("home.calculator.importantOptions.scenario"),
    },
    { value: "1.1 sound", label: t("home.calculator.importantOptions.sound") },
    {
      value: "1.4 modeling",
      label: t("home.calculator.importantOptions.modeling"),
    },
  ];

  const cartoon3dAnimationImportantOptions = [
    {
      value: "1.1 scenario",
      label: t("home.calculator.importantOptions.scenario"),
    },
    { value: "1.1 sound", label: t("home.calculator.importantOptions.sound") },
    {
      value: "1.4 modeling",
      label: t("home.calculator.importantOptions.modeling"),
    },
  ];

  const moution2dAnimationImportantOptions = [
    {
      value: "1.4 scenario",
      label: t("home.calculator.importantOptions.scenario"),
    },
    { value: "1.2 sound", label: t("home.calculator.importantOptions.sound") },
  ];

  const moution3dAnimationImportantOptions = [
    {
      value: "1.2 scenario",
      label: t("home.calculator.importantOptions.scenario"),
    },
    { value: "1.2 sound", label: t("home.calculator.importantOptions.sound") },
  ];

  const youtubeVideoImportantOptions = [
    { value: "1.1 plan", label: t("home.calculator.importantOptions.plan") },
    {
      value: "1.5 mounting",
      label: t("home.calculator.importantOptions.mounting"),
    },
    {
      value: "1.7 advMounting",
      label: t("home.calculator.importantOptions.advMounting"),
    },
    {
      value: "1.2 graphics",
      label: t("home.calculator.importantOptions.graphics"),
    },
    {
      value: "1.5 advGraphics",
      label: t("home.calculator.importantOptions.advGraphics"),
    },
  ];

  const tiktokVideoImportantOptions = [
    {
      value: "3.7 advFormat",
      label: t("home.calculator.importantOptions.advFormat"),
    },
    {
      value: "2.5 simpleFormat",
      label: t("home.calculator.importantOptions.simpleFormat"),
    },
  ];

  return {
    tiktokVideo: tiktokVideoImportantOptions,
    youtubeVideo: youtubeVideoImportantOptions,
    motion3dAnimation: moution3dAnimationImportantOptions,
    motion2dAnimation: moution2dAnimationImportantOptions,
    cartoon3dAnimation: cartoon3dAnimationImportantOptions,
    photorealistic3dAnimation: photorealistick3dAnimationImportantOptions,
    perframe2dAnimation: perframe2dAnimationImportantOptions,
    vector2dAnimation: vector2dAnimationImportantOptions,
    imageVideo: imageVideoImportantOptions,
    advertisingVideo: marketVideoImportantOptions,
    interviewsVideo: interviewVideoImportantOptions,
  };
}
