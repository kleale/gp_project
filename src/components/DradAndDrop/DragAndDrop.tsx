import React, { useState, useRef } from "react";
import FileView from "../FileView/FileView";
import styles from "./DragAndDrop.module.scss";

export const DragAndDrop = ({ id, labelText, dropCallBack }: { id: string; labelText: string; dropCallBack: { (files: Array<any>): void } }) => {
  const [drag, setDrag] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState(Array<File>);

  const dradAndDropRef = useRef(null);

  const allowedFileTypes = ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"];

  function dragStartHandler(e: any) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e: any) {
    e.preventDefault();
    setDrag(false);
  }

  function dropHandler(e: any) {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    files = files.filter((file) => allowedFileTypes.includes(file.type));
    setAttachedFiles(files);
    dropCallBack(files);
    setDrag(false);
  }

  function filesUploadHandler(e: any) {
    dropCallBack(e.currentTarget.files);
    let files = [...e.currentTarget.files];
    files = files.filter((file) => allowedFileTypes.includes(file.type));
    setAttachedFiles(files);
  }

  const svgs = {
    paperclip: (
      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4345 2.29436C10.044 1.90383 9.41082 1.90383 9.0203 2.29436L3.50483 7.80983C2.52852 8.78614 2.52852 10.369 3.50483 11.3454C4.48114 12.3217 6.06405 12.3217 7.04036 11.3454L11.6366 6.74917L13.0508 8.16338L8.45458 12.7596C6.69722 14.5169 3.84798 14.5169 2.09062 12.7596C0.333258 11.0022 0.333259 8.15297 2.09062 6.39561L7.60609 0.880144C8.77766 -0.291429 10.6772 -0.291428 11.8487 0.880145C13.0203 2.05172 13.0203 3.95121 11.8487 5.12279L6.68681 10.2847L5.2726 8.87049L10.4345 3.70857C10.825 3.31805 10.825 2.68488 10.4345 2.29436Z"
          fill="#00395C"
          fillOpacity="0.8"
        />
      </svg>
    ),
  };

  function attachClickHandler(e: any) {
    const fileInput = document.querySelector(`#${id}`) as HTMLInputElement;
    if (fileInput) fileInput.click();
  }

  return (
    <div ref={dradAndDropRef} className={styles.DragAndDrop}>
      <div className={styles.header}>
        <label className={styles.label}>{labelText}</label>
        {attachedFiles.length > 1 ? (
          <div className={styles.attach} onClick={attachClickHandler}>
            {svgs.paperclip}Выбрать
          </div>
        ) : (
          <></>
        )}
      </div>
      <input id={id} className={styles.fileInput} type="file" multiple onInput={(e) => filesUploadHandler(e)} />
      {attachedFiles.length < 1 ? (
        <div
          className={styles.dropArea}
          onDragEnter={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => dropHandler(e)}
          style={drag ? { borderColor: "#0078d2" } : { borderColor: "#b8cad5" }}
        >
          <p className={styles.text}>
            Перетащите файлы или{" "}
            <label className={styles.inputLabel} htmlFor={id}>
              загрузите
            </label>
          </p>
          <p className={styles.formats}>Поддерживаемые форматы: DOC, DOCX, PDF</p>
        </div>
      ) : (
        <div className={styles.fileViews}>
          {attachedFiles.map((file) => (
            <FileView file={file}></FileView>
          ))}
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
