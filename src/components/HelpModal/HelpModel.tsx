import React from "react";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import styles from "./HelpModal.module.scss";

interface HelpModalProps {
  toggleModalCallback?: { (): void };
}

export const HelpModal = ({ toggleModalCallback: closeModalCallback }: HelpModalProps) => {
  return (
    <div className={styles.HelpModal}>
      <div className={styles.modal}>
        <h2 className={styles.header}>Помощь</h2>
        <div className={styles.columns}>
          <div className={styles.columnRight}>
            <div className={styles.helpBlock}>
              <h3 className={styles.helpBlock__header}>Заполнение данных контрагента</h3>
              <p className={styles.helpBlock__text}>
                Внимательно заполняйте все обязательные поля. Внимательно заполняйте все обязательные поля. Внимательно заполняйте все обязательные поля.
                Внимательно заполняйте все обязательные поля.
              </p>
            </div>
            <div className={styles.helpBlock}>
              <h3 className={styles.helpBlock__header}>Прикладываемые документы</h3>
              <p className={styles.helpBlock__text}>
                Документы должны быть отсканированны и легкочитаемыми. Фотографии недопускаются. Формат PDF. Размер каждого документа не больше 20Мб.
              </p>
            </div>
            <div className={styles.helpBlock}>
              <h3 className={styles.helpBlock__header}>Пользователи</h3>
              <p className={styles.helpBlock__text}>Добавляйте только тех пользователей, которые допускаются для работы с платформой закупок Газпром.</p>
            </div>
          </div>
          <div className={styles.columnRight}>
            <div className={styles.helpBlock}>
              <h3 className={styles.helpBlock__header}>Реквизиты</h3>
              <p className={styles.helpBlock__text}>Информация по реквизитам. Информация по реквизитам. Информация по реквизитам.</p>
            </div>
            <FeedbackForm></FeedbackForm>
          </div>
        </div>
        <div
          role={"button"}
          className={styles.closeModalButton}
          onClick={(e) => {
            if (closeModalCallback) closeModalCallback();
          }}
        >
          <span className={styles.closeModalButton__text}>Закрыть окно</span>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
