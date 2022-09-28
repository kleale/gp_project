import React from "react";
import { useState } from "react";
import styles from "./Select.module.scss";

interface Option {
  value: any;
  name: string;
}

interface SelectProps {
  id: string;
  labelText: string;
  changeCallback?: { (value: string): void };
  options: Array<Option>;
}

export const Select = ({ id, labelText, changeCallback, options }: SelectProps) => {
  function optionClickHandler(event: React.MouseEvent, option: Option) {
    setSelectedOption(option.name);
    if (changeCallback) changeCallback(option.value);
  }

  function selectClickHandler(event: React.MouseEvent) {
    setShowOptions(!showOptions);
  }

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("none");

  const svgs = {
    selectArrow: (
      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 0L5 5L9.5 0H0.5Z" fill="#002033" fillOpacity="0.35" />
      </svg>
    ),
  };

  let selectOptionKey = 0;

  return (
    <div className={styles.Select}>
      {selectedOption === "none" && !showOptions ? (
        <></>
      ) : (
        <label className={styles.label} htmlFor={id}>
          {labelText}{" "}
        </label>
      )}
      <div className={styles.select} onClick={selectClickHandler} style={selectedOption === "none" ? { color: "#667985" } : { color: "#000" }}>
        {selectedOption === "none" ? labelText : selectedOption}
        {svgs.selectArrow}
        {showOptions ? (
          <div className={styles.selectOptions}>
            {options.map((option) => (
              <p
                className={selectedOption === option.name ? [styles.selectOption, styles.selectOption__selected].join(" ") : styles.selectOption}
                key={`role_option_${selectOptionKey++}`}
                onClick={(e) => {
                  optionClickHandler(e, option);
                }}
              >
                {option.name}
              </p>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Select;
