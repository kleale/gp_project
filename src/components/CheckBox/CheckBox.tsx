import React from "react";
import { useState } from "react";
import styles from "./CheckBox.module.scss";

interface CheckboxProps {
  checkboxID?: string;
  label: any;
  checkedChangeCallback?: { (isChecked: boolean): void };
}

export const Checkbox = ({ checkboxID, label, checkedChangeCallback }: CheckboxProps) => {
  const svgs = {
    checked: (
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="1" width="15" height="15" rx="3.5" fill="#0078D2" stroke="#0078D2" />
        <rect x="3.15955" y="9.54248" width="10" height="5.5" transform="rotate(-50 3.15955 9.54248)" fill="#ffffff" />
        <rect x="2.91309" y="7.72461" width="8.15" height="4.5" transform="rotate(-50 2.91309 6.72461)" fill="#0078D2" />
      </svg>
    ),
    unchecked: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" rx="4" fill="white" />
        <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#004269" strokeOpacity="0.28" />
      </svg>
    ),
  };

  const [checked, setChecked] = useState(false);

  return (
    <div
      className={styles.Checkbox}
      onClick={(e) => {
        setChecked(!checked);
        if (checkedChangeCallback) checkedChangeCallback(checked);
      }}
    >
      {checked ? svgs.checked : svgs.unchecked}
      {label}
    </div>
  );
};

export default Checkbox;
