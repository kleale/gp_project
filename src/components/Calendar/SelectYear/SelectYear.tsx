import React from "react";
import { useState, useEffect, useMemo } from "react";
import styles from "./SelectYear.module.scss";

interface SelectYearProps {
  year: number;
  years: Array<number>;
  maxHeight: string;
  selectCallback: { (newMonth: number): void };
}

export const SelectYear = ({ year, years, maxHeight, selectCallback }: SelectYearProps) => {
  const [showSelect, setShowSelect] = useState(false);

  const yearElements = [];
  for (let i = 0; i < years.length; i++) {
    const newElementClasses = i === years.indexOf(year) ? [styles.year, styles.year__selected].join(" ") : styles.year;
    const newEelement = (
      <div
        key={years[i]}
        className={newElementClasses}
        onClick={(e) => {
          selectCallback(years[i]);
          setShowSelect(!showSelect);
        }}
      >
        {years[i]}
      </div>
    );

    yearElements.push(newEelement);
  }
  years.map((el) => <div key={el}>{el}</div>);

  return (
    <div className={styles.SelectYear} >
      <div className={styles.currentYear} onClick={e => setShowSelect(!showSelect)}>{year}</div>
      {showSelect ? <div className={styles.yearSelect} style={{ maxHeight: maxHeight }}>{yearElements}</div> : <></>}
    </div>
  );
};

export default SelectYear;
