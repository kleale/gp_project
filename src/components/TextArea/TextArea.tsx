import React from "react"
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import styles from "./TextArea.module.scss"

export const TextArea = ({
  id,
  labelText,
  sliceAction,
  placeholder = labelText,
  disabled = false,
  height
}: {
  id: string;
  labelText: string;
  sliceAction: ActionCreatorWithPayload<string, string>;
  placeholder?: string;
  disabled?: boolean;
  height?: string;
}) => {
  const [inputValue, setInputValue] = useState("");
  const showLabel = inputValue.length > 0;

  const dispatch = useAppDispatch();

  const getHeightStyle = () => {
    return height ? {height: height} : {height: "auto"}
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setInputValue(inputValue);
      dispatch(sliceAction(inputValue));
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  function inputHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(e.currentTarget.value);
  }

  return (
    <div className={styles.TextArea}>
      {showLabel ? (
        <label className={styles.label} htmlFor={id}>
          {labelText}{" "}
        </label>
      ) : (
        <></>
      )}
      <textarea className={styles.input} value={inputValue} id={id} placeholder={placeholder} onInput={inputHandler} disabled={disabled} style={getHeightStyle()}></textarea>
    </div>
  );
}

export default TextArea;