import React from "react";
import styles from "./RadioButton.module.scss";

export const RadioButton = ({ radioButtonID, group, labelText }: { radioButtonID: string; group: string; labelText: string }) => {
  return (
    <label className={styles.RadioButton}>
      {labelText}
      <input type="radio" name={group} id={radioButtonID} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default RadioButton;
