import React from "react";
import RadioButton from "../RadioButton/RadioButton";
import styles from "./LegalForm.module.scss";

export const LegalForm = () => {
  return (
    <div className={styles.LegalForm}>
      {/* <span className={styles.text}>Правовая форма</span> */}
      <div className={styles.buttonsContainer}>
        <RadioButton radioButtonID="rb_ur" group="legal_form" labelText="Юр. лицо"></RadioButton>
        <RadioButton radioButtonID="rb_ip" group="legal_form" labelText="ИП"></RadioButton>
        <RadioButton radioButtonID="rb_sz" group="legal_form" labelText="СЗ"></RadioButton>
      </div>
    </div>
  );
};

export default LegalForm;
