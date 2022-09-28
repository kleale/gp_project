import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React from "react";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import styles from "./Input.module.scss";

interface InputProps {
  id: string;
  labelText: string;
  sliceAction?: ActionCreatorWithPayload<string, string>;
  inputCallback?: { (value: string): void };
  placeholder?: string;
  disabled?: boolean;
}

export const Input = ({ id, labelText, sliceAction, inputCallback, placeholder = labelText, disabled = false }: InputProps) => {
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState("");
  const showLabel = inputValue.length > 0;
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setInputValue(inputValue);
      if (inputCallback) inputCallback(inputValue);
      if (sliceAction) dispatch(sliceAction(inputValue));
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.currentTarget.value);
  }

  return (
    <div className={styles.Input}>
      {showLabel ? (
        <label className={styles.label} htmlFor={id}>
          {labelText}{" "}
        </label>
      ) : (
        <></>
      )}
      <input className={styles.input} value={inputValue} type="text" id={id} placeholder={placeholder} onInput={inputHandler} disabled={disabled} />
    </div>
  );
};

export default Input;
