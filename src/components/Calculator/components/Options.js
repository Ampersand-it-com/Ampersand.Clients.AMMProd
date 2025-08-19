"use client";

import { components } from "react-select";
import s from "./Options.module.scss";

export const Option = (props) => {
  return (
    <div className={s.optionContainer}>
      <components.Option {...props}>
        <p className={s.container}>
          {props.label}
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />
          <span className={s.checkmark}></span>
        </p>
      </components.Option>
    </div>
  );
};
