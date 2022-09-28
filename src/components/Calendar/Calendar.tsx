import React, { useState, useMemo } from "react";
import styles from "./Calendar.module.scss";
import SelectMonth from "./SelectMonth/SelectMonth";
import SelectYear from "./SelectYear/SelectYear";

interface CalendarProps {
  selectDateCallback: { (newDate: string): void };
}

export const Calendar = ({ selectDateCallback }: CalendarProps) => {
  const [date, setDate] = useState(new Date());
  const year = date.getFullYear();
  const month = date.getMonth();

  const monthsSize = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function isLeapYear(year: number) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  }

  function getFirstDay(year: number, month: number) {
    return new Date(year, month).getDay();
  }

  function getLastDay(year: number, month: number) {
    const monthSize = monthsSize[month] + (isLeapYear(year) && month === 1 ? 1 : 0);
    return new Date(year, month, monthSize).getDay();
  }

  const monthFirstDay = getFirstDay(year, month);
  const monthLastDay = getLastDay(year, month);

  let prevMonth;
  let nextMonth;
  let prevMonthtSize;
  let nextMonthtSize;

  function calcDatesAround() {
    prevMonth = new Date(year, month - 1).getMonth();
    nextMonth = new Date(year, month + 1).getMonth();
    let tmpYear = new Date(year, month - 1).getFullYear();
    prevMonthtSize = monthsSize[prevMonth] + (isLeapYear(tmpYear) && prevMonth === 1 ? 1 : 0);
    tmpYear = new Date(year, month + 1).getFullYear();
    nextMonthtSize = monthsSize[nextMonth] + (isLeapYear(tmpYear) && nextMonth === 1 ? 1 : 0);
  }

  calcDatesAround();

  let weeksCount;
  if (monthFirstDay === 1 && monthLastDay === 7) weeksCount = 4;
  else weeksCount = monthFirstDay - monthLastDay > 0 ? 6 : 5;

  const weeks: Array<Array<any>> = [[], [], [], [], [], []];
  let weekNumber = 0;
  let weekFulleness = 0;

  if (prevMonthtSize) {
    for (let i = 0; i < monthFirstDay - 1; i++) {
      weeks[weekNumber].push(
        <div className={styles.day} style={{ color: "#BDC5CA", userSelect: "none" }}>
          {prevMonthtSize - i}
        </div>
      );
      weekFulleness++;
    }
  }

  weeks[weekNumber].reverse();

  const monthSize = monthsSize[month] + (isLeapYear(year) && month === 1 ? 1 : 0);

  for (let i = 1; i < monthSize + 1; i++) {
    weeks[weekNumber].push(
      <div
        className={[styles.day, styles.selectableDay].join(" ")}
        onClick={() => {
          selectDateCallback(`${i < 10 ? "0" + i.toString() : i}.${month < 10 ? "0" + month.toString() : month}.${year}`);
        }}
      >
        {i}
      </div>
    );
    weekFulleness++;
    if (weekFulleness === 7) {
      weekNumber++;
      weekFulleness = 0;
    }
  }

  // 8 - это 7 дней + 1
  for (let i = 1; i < 8 - monthLastDay; i++) {
    weeks[weekNumber].push(
      <div className={styles.day} style={{ color: "#BDC5CA", userSelect: "none" }}>
        {i}
      </div>
    );
    weekFulleness++;
    if (weekFulleness === 7) {
      break;
    }
  }

  const svgs = {
    leftArrow: (
      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.40705 4.99989L7.70415 1.70279L6.28994 0.288574L0.578613 5.9999L6.28994 11.7112L7.70415 10.297L4.40703 6.99989H12.9999V4.99989H4.40705Z"
          fill="#00395C"
          fillOpacity="0.8"
        />
      </svg>
    ),
    rightArrow: (
      <svg style={{ cursor: "pointer" }} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.5942 4.99989L5.29709 1.70279L6.7113 0.288574L12.4226 5.9999L6.7113 11.7112L5.29709 10.297L8.59421 6.99989H0V4.99989H8.5942Z"
          fill="#00395C"
          fillOpacity="0.8"
        />
      </svg>
    ),
  };

  function monthSelectCallback(newMonth: number) {
    setDate(new Date(year, newMonth));
  }

  function yearSelectCallback(newYear: number) {
    setDate(new Date(newYear, month));
  }

  const [years, setYears] = useState(
    new Array(50).fill(0).map((value, index) => {
      if (index === 0) {
        return year + 1;
      } else if (year === 1) {
        return year;
      } else return year - (index - 1);
    })
  );

  const maxHeight = "250px";

  let keyWeek = 0;

  return (
    <div className={styles.Calendar}>
      <div className={styles.header}>
        <div className={styles.header__monthYear}>
          <div className={styles.leftArrowContainer}>{svgs.leftArrow}</div>
          <div className={styles.monthYearContainer}>
            <SelectMonth month={month} selectCallback={monthSelectCallback}></SelectMonth>
            <SelectYear year={year} years={years} maxHeight={maxHeight} selectCallback={yearSelectCallback}></SelectYear>
          </div>
          <div className={styles.rightArrowContainer}>{svgs.rightArrow}</div>
        </div>
        <div className={styles.weekDays}>
          <div className={styles.weekDay}>пн</div>
          <div className={styles.weekDay}>вт</div>
          <div className={styles.weekDay}>ср</div>
          <div className={styles.weekDay}>чт</div>
          <div className={styles.weekDay}>пт</div>
          <div className={styles.weekDay}>сб</div>
          <div className={styles.weekDay}>вс</div>
        </div>
      </div>
      <div className={styles.month}>
        {weeks.map((week) => (
          <div key={`week${keyWeek++}`} className={styles.week}>
            {week}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
