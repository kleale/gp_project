import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { feedbackFormSlice } from "../../store/reducers/feedbackFormSlice";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import styles from "./FeedbackForm.module.scss";

export const FeedbackForm = () => {
  const setFio = feedbackFormSlice.actions.setFio;
  const setEmail = feedbackFormSlice.actions.setEmail;
  const setText = feedbackFormSlice.actions.setText;

  const svgs = {
    checkmark: (
      <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.03985 7.91687L1.36495 4.57889L0.0202332 6.05934L5.23487 10.7959L12.9741 1.57268L11.442 0.287109L5.03985 7.91687Z"
          fill="white"
        />
      </svg>
    ),
  };

  return (
    <div className={styles.FeedbackForm}>
      <h2 className={styles.header}>Есть вопросы? Напишите нам</h2>
      <div className={styles.form}>
        <Input id="feedback_fio" labelText="Фамилия Имя Отчество:" sliceAction={setFio}></Input>
        <Input id="feedback_email" labelText="E-mail:" sliceAction={setEmail}></Input>
        <TextArea id="feedback_text" labelText="Вопрос:" sliceAction={setText} height={"159px"}></TextArea>
      </div>
      <div role={"button"} className={styles.button}>
        <span className={styles.button__text}>Отправить</span>
        {svgs.checkmark}
      </div>
    </div>
  );
};

export default FeedbackForm;
