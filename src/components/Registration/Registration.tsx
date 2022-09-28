import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import styles from "./Registration.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { LegalForm as LegalFormEnum, registrationSlice } from "../../store/reducers/registrationSlice";
import DragAndDrop from "../DradAndDrop/DragAndDrop";
import LegalForm from "../LegalForm/LegalForm";
import Input from "../Input/Input";
import Checkbox from "../CheckBox/CheckBox";
import capcha from "../../assets/images/capcha.png"

const Registration = () => {
  const dispatch = useAppDispatch();
  const registrationStore = useAppSelector((state) => state.registrationReducer);
  const setLegalForm = registrationSlice.actions.setLegalForm;
  const setInn = registrationSlice.actions.setInn;
  const setKpp = registrationSlice.actions.setKpp;
  const setOgrn = registrationSlice.actions.setOgrn;
  const setAddress = registrationSlice.actions.setAddress;
  const setFio = registrationSlice.actions.setFio;
  const setEmail = registrationSlice.actions.setEmail;

  function radioButtonClickHandler(e: React.MouseEvent, legalForm: LegalFormEnum) {
    dispatch(setLegalForm(legalForm));
  }

  const svgs = {
    checkmark: (
      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.79876 8.41721L2.12386 5.07922L0.779144 6.55967L5.99379 11.2962L13.733 2.07302L12.2009 0.787445L5.79876 8.41721Z"
          fill="white"
        />
      </svg>
    ),
    magnifyingGlass: (
      <svg className={styles.magnifyingGlass} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0491 13.9633C10.7873 14.9274 9.21054 15.5 7.5 15.5C3.35786 15.5 0 12.1421 0 8C0 3.85786 3.35786 0.5 7.5 0.5C11.6421 0.5 15 3.85786 15 8C15 9.71053 14.4274 11.2873 13.4633 12.5491L20.0055 19.0913L18.5913 20.5055L12.0491 13.9633ZM13 8C13 11.0376 10.5376 13.5 7.5 13.5C4.46243 13.5 2 11.0376 2 8C2 4.96243 4.46243 2.5 7.5 2.5C10.5376 2.5 13 4.96243 13 8Z"
          fill="#009245"
          fillOpacity="0.8"
        />
      </svg>
    ),
  };

  /* TODO
    пересмотреть имена классов элементов
    удалить лишние правила из стилей
  */

  return (
    <div className={styles.Registration}>
      <Header></Header>
      <div className={styles.content}>
        <div className={styles.RegistrationForm}>
          <h2 className={styles.RegistrationForm__header}>Регистрация нового контрагента или прикрепление к существующему \ пользователя</h2>
          <div className={styles.Info}>
            <div className={[styles.Info__company, styles.InfoColumn].join(" ")}>
              <h3 className={[styles.company__header, styles.InfoColumn__header].join(" ")}>Информация о компании</h3>
              <div className={styles.businessType}>
                <span className={styles.legalForm__text}>Правовая форма</span>
                <LegalForm></LegalForm>
              </div>
              <div className={styles.registerInputs}>
                <Input id="inn_input" labelText="ИНН:" sliceAction={setInn}></Input>
                <Input id="kpp_input" labelText="КПП:" sliceAction={setKpp}></Input>
              </div>
              {registrationStore.contractorFound ? (
                <div>
                  <div className={styles.contractorFound}>
                    {svgs.magnifyingGlass}
                    <div className={styles.contractorFound__info}>
                      <p className={styles.contractorFound__label}>Найден контрагент:</p>
                      <p className={styles.contractorFound__contractorName}>{registrationStore.contractorFoundName}</p>
                    </div>
                  </div>
                  <p className={styles.contractorFound__message}>
                    Регистрируемый пользователь будет
                    <br />
                    прикреплен к данному контрагенту
                  </p>
                </div>
              ) : (
                <div>
                  <div className={styles.registerInputs}>
                    <Input id="orgn_input" labelText="ОГРН:" sliceAction={setOgrn}></Input>
                    <Input id="address_input" labelText="Адрес:" sliceAction={setAddress}></Input>
                  </div>
                  {/* <p className={styles.dragAndDrop__label}>Копии учредительных документов</p> */}
                  <DragAndDrop
                    id="input_copiesOfConstituentDocuments"
                    labelText="Копии учредительных документов"
                    dropCallBack={(files) => {
                      console.log(files);
                    }}
                  ></DragAndDrop>
                </div>
              )}
            </div>
            <div className={[styles.Info__user, styles.InfoColumn].join(" ")}>
              <h3 className={[styles.user__header, styles.InfoColumn__header].join(" ")}>Данные пользователя</h3>
              <div className={styles.userData}>
                <div className={[styles.registerInputs, styles.userData__inputs].join(" ")}>
                  <Input id="fio_input" labelText="Фамилия Имя Отчество:" sliceAction={setFio}></Input>
                  <Input id="email_input" labelText="E-mail:" sliceAction={setEmail}></Input>
                  <div className={styles.capcha}>
                    <Input id="capcha_input" labelText="Код с картики:" placeholder="Введите код с картинки"></Input>
                    <img className={styles.capcha__image} src={capcha} alt="capcha"></img>
                  </div>
                  <Input id="admin_message_input" labelText="Сообщение администратору:" placeholder="Сообщение администратору"></Input>
                </div>
                <div className={styles.consents}>
                  <Checkbox
                    checkboxID="constnt_requirements"
                    label={
                      <span>
                        Согласен с{" "}
                        <a className={styles.constntLink} href="#">
                          требованиями по обеспечению конфиденциальности информации
                        </a>{" "}
                        и{" "}
                        <a className={styles.constntLink} href="#">
                          требованиями по информационной безопасности
                        </a>
                      </span>
                    }
                  ></Checkbox>
                  <Checkbox checkboxID="constnt_requirements" label={<span>Даю согласие на обработку данных</span>}></Checkbox>
                </div>
              </div>
              <div className={styles.registrationButtons}>
                <button className={[styles.registrationButton, styles.registrationButton__cancel].join(" ")}>Отмена</button>
                <button className={[styles.registrationButton, styles.registrationButton__confirm].join(" ")}>
                  {registrationStore.contractorFound ? "Зарегистрировать пользователя" : "Подписать ЭЦП"} {svgs.checkmark}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.emptyFooter}></div>
    </div>
  );
};

export default Registration;
