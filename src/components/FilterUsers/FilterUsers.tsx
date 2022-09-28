import React from "react";
import { useState, useEffect } from "react";
import { OrganizationUser } from "../../store/reducers/organizationUsersSlice";
import Checkbox from "../CheckBox/CheckBox";
import styles from "./FilterUsers.module.scss";

interface FilterUsersProps {
  users: Array<OrganizationUser>;
  inputCallback?: { (value: string): void };
  applyCallback?: { (users: Array<OrganizationUser>): void };
}

export const FilterUsers = ({ users, inputCallback, applyCallback }: FilterUsersProps) => {
  const [inputValue, setInputValue] = useState("");
  const showLabel = inputValue.length > 0;

  useEffect(() => {
    const handler = setTimeout(() => {
      setInputValue(inputValue);
      if (inputCallback) inputCallback(inputValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.currentTarget.value);
  }

  return (
    <div className={styles.FilterUsers}>
      <input className={styles.filterInput} type="text" onInput={inputHandler} />
      {users.length > 0 ? (
        <div>
          <div className={styles.selectButtons}>
            <button className={[styles.selectButton, styles.selectButton__selectAll].join(" ")}>Выбрать все</button>
            <button className={[styles.selectButton, styles.selectButton__reset].join(" ")}>Сбросить</button>
          </div>
          <div className={styles.filterResult}>
            {users.map((user) => (
              <Checkbox checkboxID={`checkbox_${user.email}`} label={<p style={{ fontWeight: "normal" }}>{user.fio}</p>}></Checkbox>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.buttons}>
        <button className={[styles.button, styles.button__cancel].join(" ")}>Отмена</button>
        <button className={[styles.button, styles.button__apply].join(" ")}>Применить</button>
      </div>
    </div>
  );
};
