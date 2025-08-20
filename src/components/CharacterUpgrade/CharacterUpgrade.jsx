"use client";

import s from "./CharacterUpgrade.module.scss";
import Checkbox from "./components/Checkbox/Checkbox";
import Item from "./components/Item/Item";
import { useEffect, useState } from "react";
import { SCREEN_WIDTH } from "@/styles/variables";
import ItemThumb from "./components/ItemThumb/ItemThumb";
import { useTranslations } from "@/i18n";
import LinearProgress from "./components/LinearProgress/LinearProgress";

import foxOld from "./assets/fox/Foxi_Vector_old-01.svg";
console.log(foxOld);
import foxOldHelmetBack from "./assets/fox/FV_old_HELMET_back._1ai-01.svg";
import foxOldHelmetFront from "./assets/fox/FV_old_HELMET_Front-01_fixed.svg";
import foxOldBody from "./assets/fox/FV_old_Body-01.svg";
import foxOldArmLeft from "./assets/fox/FV_old_ARM_Left-01.svg";
import foxOldArmRight from "./assets/fox/FV_old_ARM_Right-01.svg";
import foxOldForearmLeft from "./assets/fox/FV_old_ForearmARM_Left-01.svg";
import foxOldForearmRight from "./assets/fox/FV_old_ForeARM_Right-01.svg";
import foxOldLegLeft from "./assets/fox/FV_old_LEG_Left-01.svg";
import foxOldLegRight from "./assets/fox/FV_old_LEG_Right-01.svg";

import foxNew from "./assets/fox/Foxi_Vector_new-01.svg";
import foxNewHelmetBack from "./assets/fox/FV_new_Helmet_Face_Back_1-01.svg";
import foxNewHelmetFront from "./assets/fox/FV_new_Helmet_Face_front-01.svg";
import foxNewBody from "./assets/fox/FV_new_Body-01.svg";
import foxNewArmLeft from "./assets/fox/FV_new_Arm_Left-01.svg";
import foxNewArmRight from "./assets/fox/FV_new_Arm_Right-01.svg";
import foxNewForearmLeft from "./assets/fox/FV_new_ForeArm_Left-01.svg";
import foxNewForearmRight from "./assets/fox/FV_new_ForeArm_Right-01.svg";
import foxNewLegLeft from "./assets/fox/FV_new_LEG_Left-01.svg";
import foxNewLegRight from "./assets/fox/FV_new_LEG_Right-01.svg";
import Image from "next/image";

class FoxPart {
  constructor(type, imgs, text = "", number = 0) {
    this.type = type;
    this.imgs = imgs;
    this.text = text;
    this.number = number;
  }
}

const foxContent = {
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

function CharacterUpgrade() {
  const { t } = useTranslations();

  var lastBubble = foxContent.initialPhrase;
  const [equipedItems, setEquipedItems] = useState(foxContent.oldItems);
  const [appliedItems, setAppliedItems] = useState([]);
  const [bubbleMessage, setBubbleMessage] = useState(
    t(foxContent.initialPhrase)
  );
  const [agencyUpgraded, setAgencyUpgraded] = useState(false);

  // Actions

  function start() {
    setEquipedItems(foxContent.oldItems);
    setAppliedItems([]);
    lastBubble = foxContent.initialPhrase;
    setBubbleMessage(t(lastBubble));
    setAgencyUpgraded(false);
  }

  function finish() {
    setEquipedItems([foxContent.newFoxBase, ...foxContent.newItems]);
    setBubbleMessage(t(foxContent.finalePhrase));
    setAppliedItems(foxContent.newItems.map((el) => el.type));
    setAgencyUpgraded(true);
  }

  // dynamic language change
  // i18n.on("languageChanged", () => {
  //   if (lastBubble) setBubbleMessage(t(lastBubble));
  // });

  function applyItem(item) {
    if (appliedItems.includes(item.type)) {
      if (appliedItems.length >= foxContent.newItems.length)
        setAgencyUpgraded(false);
      setEquipedItems(
        equipedItems.map((el) =>
          el.type === item.type
            ? foxContent.oldItems.find((oldItem) => oldItem.type === item.type)
            : el
        )
      );
      setAppliedItems(appliedItems.filter((el) => el !== item.type));
      setBubbleMessage("");
    } else {
      if (appliedItems.length + 1 >= foxContent.newItems.length) finish();
      else {
        setEquipedItems(
          equipedItems.map((el) => (el.type === item.type ? item : el))
        );
        setAppliedItems([...appliedItems, item.type]);
        lastBubble =
          foxContent.fillerPhrases[
            Math.floor(Math.random() * foxContent.fillerPhrases.length)
          ];
        setBubbleMessage(t(lastBubble));
      }
    }
  }

  // Checkboxes

  function handleCheckboxOnChange(e) {
    if (e.target.checked) {
      if (agencyUpgraded) start();
      else finish();
    }
  }

  // Responsive features

  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < SCREEN_WIDTH.DESKTOP);

    function handleResize() {
      setIsMobile(window.innerWidth < SCREEN_WIDTH.DESKTOP);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Active item

  const [activeItem, setActiveItem] = useState(foxContent.newItems[0]);

  function handleButtonOnCLick(item) {
    applyItem(item);
    const itemIndex = foxContent.newItems.findIndex(
      (el) => el.type === item.type
    );
    if (
      itemIndex + 1 < foxContent.newItems.length &&
      !appliedItems.includes(item.type)
    )
      setActiveItem(foxContent.newItems[itemIndex + 1]);
  }

  // Layout

  return (
    <div className={s.characterUpgrade}>
      <div className={s.header}>
        <div className={s.checkboxWrapper}>
          <Checkbox checked={!agencyUpgraded} onChange={handleCheckboxOnChange}>
            {t("home.characterUpgrade.agency")} 1.0
          </Checkbox>
        </div>
        <LinearProgress
          variant="determinate"
          value={(100 / foxContent.newItems.length) * appliedItems.length}
        />
        <div className={s.checkboxWrapper}>
          <Checkbox checked={agencyUpgraded} onChange={handleCheckboxOnChange}>
            {t("home.characterUpgrade.agency")} 2.0
          </Checkbox>
        </div>
      </div>

      <div className={s.body}>
        <div className={s.items}>
          {foxContent.newItems
            .filter((item, i) => i % 2 === 0)
            .map((item, i) =>
              isMobile ? (
                <ItemThumb
                  className={item.type === activeItem.type ? "active" : ""}
                  key={i}
                  item={item}
                  applied={appliedItems.includes(item.type)}
                  onClick={() => setActiveItem(item)}
                />
              ) : (
                <Item
                  key={i}
                  item={item}
                  applied={appliedItems.includes(item.type)}
                  onClick={() => applyItem(item)}
                />
              )
            )}
        </div>

        <div className={s.characterContainer}>
          {equipedItems.map((item) =>
            item.imgs.map((img, i) => (
              <img
                key={item.type + i}
                src={img}
                className={`${s[item.type]}${i ? " " + s.back : ""}`}
                alt="Fox"
                draggable={false}
              />
            ))
          )}

          {bubbleMessage && <div className={s.bubble}>{bubbleMessage}</div>}
        </div>

        <div className={s.items}>
          {foxContent.newItems
            .filter((item, i) => i % 2 !== 0)
            .map((item, i) =>
              isMobile ? (
                <ItemThumb
                  className={item.type === activeItem.type ? "active" : ""}
                  key={i}
                  item={item}
                  applied={appliedItems.includes(item.type)}
                  onClick={() => setActiveItem(item)}
                />
              ) : (
                <Item
                  key={i}
                  item={item}
                  applied={appliedItems.includes(item.type)}
                  onClick={() => applyItem(item)}
                />
              )
            )}
        </div>
      </div>

      {isMobile && (
        <Item
          item={activeItem}
          applied={appliedItems.includes(activeItem.type)}
          action={() => handleButtonOnCLick(activeItem)}
        />
      )}
    </div>
  );
}

export default CharacterUpgrade;
