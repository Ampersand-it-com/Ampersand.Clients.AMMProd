"use client";

import foxOld from "../assets/fox/Foxi_Vector_old-01.svg?src";
import foxOldHelmetBack from "../assets/fox/FV_old_HELMET_back._1ai-01.svg?src";
import foxOldHelmetFront from "../assets/fox/FV_old_HELMET_Front-01_fixed.svg?src";
import foxOldBody from "../assets/fox/FV_old_Body-01.svg?src";
import foxOldArmLeft from "../assets/fox/FV_old_ARM_Left-01.svg?src";
import foxOldArmRight from "../assets/fox/FV_old_ARM_Right-01.svg?src";
import foxOldForearmLeft from "../assets/fox/FV_old_ForearmARM_Left-01.svg?src";
import foxOldForearmRight from "../assets/fox/FV_old_ForeARM_Right-01.svg?src";
import foxOldLegLeft from "../assets/fox/FV_old_LEG_Left-01.svg?src";
import foxOldLegRight from "../assets/fox/FV_old_LEG_Right-01.svg?src";

import foxNew from "../assets/fox/Foxi_Vector_new-01.svg?src";
import foxNewHelmetBack from "../assets/fox/FV_new_Helmet_Face_Back_1-01.svg?src";
import foxNewHelmetFront from "../assets/fox/FV_new_Helmet_Face_front-01.svg?src";
import foxNewBody from "../assets/fox/FV_new_Body-01.svg?src";
import foxNewArmLeft from "../assets/fox/FV_new_Arm_Left-01.svg?src";
import foxNewArmRight from "../assets/fox/FV_new_Arm_Right-01.svg?src";
import foxNewForearmLeft from "../assets/fox/FV_new_ForeArm_Left-01.svg?src";
import foxNewForearmRight from "../assets/fox/FV_new_ForeArm_Right-01.svg?src";
import foxNewLegLeft from "../assets/fox/FV_new_LEG_Left-01.svg?src";
import foxNewLegRight from "../assets/fox/FV_new_LEG_Right-01.svg?src";

class FoxPart {
  constructor(type, imgs, text = "", number = 0) {
    this.type = type;
    this.imgs = imgs;
    this.text = text;
    this.number = number;
  }
}

export default {
  oldItems: [
    new FoxPart("base", [foxOld]),
    new FoxPart("helmet", [foxOldHelmetFront, foxOldHelmetBack]),
    new FoxPart("body", [foxOldBody]),
    new FoxPart("armRight", [foxOldArmRight]),
    new FoxPart("armLeft", [foxOldArmLeft]),
    new FoxPart("forearmRight", [foxOldForearmRight]),
    new FoxPart("forearmLeft", [foxOldForearmLeft]),
    new FoxPart("legRight", [foxOldLegRight]),
    new FoxPart("legLeft", [foxOldLegLeft]),
  ],
  newFoxBase: new FoxPart("base", [foxNew]),
  newItems: [
    new FoxPart(
      "helmet",
      [foxNewHelmetFront, foxNewHelmetBack],
      "home.characterUpgrade.items.0",
      Math.floor(Math.random() * 10000)
    ),
    new FoxPart(
      "body",
      [foxNewBody],
      "home.characterUpgrade.items.1",
      Math.floor(Math.random() * 10000)
    ),
    new FoxPart(
      "armRight",
      [foxNewArmRight],
      "home.characterUpgrade.items.2",
      Math.floor(Math.random() * 10000)
    ),
    new FoxPart(
      "armLeft",
      [foxNewArmLeft],
      "home.characterUpgrade.items.3",
      Math.floor(Math.random() * 10000)
    ),
    new FoxPart(
      "forearmRight",
      [foxNewForearmRight],
      "home.characterUpgrade.items.4",
      Math.floor(Math.random() * 10000)
    ),
    new FoxPart(
      "forearmLeft",
      [foxNewForearmLeft],
      "home.characterUpgrade.items.5",
      Math.floor(Math.random() * 10000)
    ),
    new FoxPart(
      "legRight",
      [foxNewLegRight],
      "home.characterUpgrade.items.6",
      Math.floor(Math.random() * 10000)
    ),
    new FoxPart(
      "legLeft",
      [foxNewLegLeft],
      "home.characterUpgrade.items.7",
      Math.floor(Math.random() * 10000)
    ),
  ],
  initialPhrase: "home.characterUpgrade.initialPhrase",
  finalePhrase: "home.characterUpgrade.finalePhrase",
  fillerPhrases: [
    "home.characterUpgrade.fillerPhrases.0",
    "home.characterUpgrade.fillerPhrases.1",
    "home.characterUpgrade.fillerPhrases.2",
    "home.characterUpgrade.fillerPhrases.3",
    "home.characterUpgrade.fillerPhrases.4",
    "home.characterUpgrade.fillerPhrases.5",
    "home.characterUpgrade.fillerPhrases.6",
  ],
};
