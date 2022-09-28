import React from "react";
import { useState } from "react";
import styles from "./SelectMonth.module.scss";

interface SelectMonthProps {
  month: number;
  selectCallback: { (newMonth: number): void };
}

export const SelectMonth = ({ month, selectCallback }: SelectMonthProps) => {
  const [showSelect, setShowSelect] = useState(false);


  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  const monthElements = [];
  for (let i = 0; i < months.length; i++) {
    const newElementClasses = i === month ? [styles.month, styles.month__selected].join(" ") : styles.month;
    const newEelement = (
      <div
        key={months[i]}
        className={newElementClasses}
        onClick={(e) => {
          selectCallback(i);
          setShowSelect(!showSelect)
        }}
      >
        {months[i]}
      </div>
    );
    monthElements.push(newEelement);
  }


  return (
    <div className={styles.SelectMonth}>
      <div className={styles.currentMonth} onClick={e => setShowSelect(!showSelect)}>{months[month]}</div>
      {showSelect ? <div className={styles.monthSelect}>{monthElements}</div> : <></>}
    </div>
  );
};

export default SelectMonth;
