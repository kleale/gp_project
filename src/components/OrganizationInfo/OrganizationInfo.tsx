import React from "react";
import { useState } from "react";
import styles from "./OrganizationInfo.module.scss";
import AuthentificatedHeader from "../../components/AuthentificatedHeader/AuthentificatedHeader";
import Input from "../Input/Input";
import { useAppSelector } from "../../hooks/redux";
import { organizationInfoSlice } from "../../store/reducers/organizationInfoSlice";
import Checkbox from "../CheckBox/CheckBox";
import LegalForm from "../LegalForm/LegalForm";
import DragAndDrop from "../DradAndDrop/DragAndDrop";

import step1 from "../../assets/images/steps-1.svg";
import step2 from "../../assets/images/steps-2.svg";
import step3 from "../../assets/images/steps-3.svg";
import TextArea from "../TextArea/TextArea";
import DatePicker from "../DatePicker/DatePicker";
import HelpModal from "../HelpModal/HelpModel";
import OrganizationUsers from "../OrganizationUsers/OrganizationUsers";

export const OrganizationInfo = () => {
  const actions = organizationInfoSlice.actions;

  const currentStep = 4;

  const stepBackgrounds = [step1, step2, step3];

  function getStepStyle(step: number) {
    const colorsBorder = {
      active: "#F59E2A",
      inactive: "#9D9D9C",
      passed: "#009245",
    };
    const colorsText = {
      active: "#F59E2A",
      inactive: "#9D9D9C",
      passed: "#FFF",
    };
    const colorsFill = {
      active: "#FFF",
      inactive: "#FFF",
      passed: "#009245",
    };

    // if (step === currentStep) {
    //   return { borderColor: colorsBorder.active, color: colorsText.active, backgroundColor: colorsFill.active };
    // } else if (step < currentStep) {
    //   return { borderColor: colorsBorder.passed, color: colorsText.passed, backgroundColor: colorsFill.passed };
    // } else if (step > currentStep) {
    //   return { borderColor: colorsBorder.inactive, color: colorsText.inactive, backgroundColor: colorsFill.inactive };
    // }

    if (step === currentStep) {
      return { color: colorsText.active };
    } else if (step < currentStep) {
      return { color: colorsText.passed };
    } else if (step > currentStep) {
      return { color: colorsText.inactive };
    }
  }

  function getColumnBorderStyles(step: number) {
    const colorsBorder = {
      active: "#F59E2A",
      inactive: "#9D9D9C",
      passed: "#80BCDE",
    };

    if (step === currentStep) {
      return { borderColor: colorsBorder.active };
    } else if (step < currentStep) {
      return { borderColor: colorsBorder.passed };
    } else if (step > currentStep) {
      return { borderColor: colorsBorder.inactive };
    }
  }

  function getColumnHeaderStyles(step: number) {
    const colorsBorder = {
      active: "#F59E2A",
      inactive: "#9D9D9C",
      passed: "#80BCDE",
    };
    const colorsText = {
      active: "#F59E2A",
      inactive: "#9D9D9C",
      passed: "#002033",
    };
    const fonts = {
      active: "PT-Root-UI-Medium",
      inactive: "PT-Root-UI-Medium",
      passed: "PT-Root-UI-Bold",
    };

    if (step === currentStep) {
      return { borderColor: colorsBorder.active, color: colorsText.active, fontFamily: fonts.active };
    } else if (step < currentStep) {
      return { borderColor: colorsBorder.passed, color: colorsText.passed, fontFamily: fonts.passed };
    } else if (step > currentStep) {
      return { borderColor: colorsBorder.inactive, color: colorsText.inactive, fontFamily: fonts.inactive };
    }
  }

  function checkCurentStep(step: number) {
    return step === currentStep;
  }

  const svgs = {
    checkmark: (
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.18122 12.2554L1.28667 6.47019L0 8.00359L8.42649 15.0743L19.9967 1.28545L18.4647 0L8.18122 12.2554Z"
          fill="white"
        />
      </svg>
    ),
  };

  const [showHelpModal, setShowHelpModal] = useState(false);
  function toggleHelpModal() {
    setShowHelpModal(!showHelpModal);
  }

  return (
    <div className={styles.OrganizationInfo}>
      {showHelpModal ? <HelpModal toggleModalCallback={toggleHelpModal}></HelpModal> : <></>}
      <AuthentificatedHeader toggleModalCallback={toggleHelpModal}></AuthentificatedHeader>
      <div className={styles.OrganizationInfo__form}>
        <div className={styles.steps} style={checkCurentStep(4) ? { backgroundImage: `url(${stepBackgrounds[currentStep - 2]})` }:{ backgroundImage: `url(${stepBackgrounds[currentStep - 1]})` } }>
          <h2 className={styles.step} style={getStepStyle(1)}>
            Общие сведения об организации
          </h2>
          <h2 className={styles.step} style={getStepStyle(2)}>
            Направление деятельности
          </h2>
          <h2 className={styles.step} style={getStepStyle(4)}>
            Пользователи организации
          </h2>
        </div>
        {currentStep < 4 ? <div className={styles.columns}>
          <div className={styles.column} style={getColumnBorderStyles(1)}>
            <h3 className={styles.column__header} style={getColumnHeaderStyles(1)}>
              Информация об организации
            </h3>
            <div className={styles.column__content}>
              <Input id="company_name" labelText="Наименование:" placeholder="Введите наименование" sliceAction={actions.setCompanyName}></Input>
              <Input id="legal_address" labelText="Юридический адрес:" placeholder="Введите юридический адрес" sliceAction={actions.setLegalAddress}></Input>
              <Checkbox checkboxID="legal_as_postal" label={<>Юридический адрес совпадает с почтовым</>}></Checkbox>
              <Checkbox checkboxID="legal_as_actual" label={<>Юридический адрес совпадает с фактическим</>}></Checkbox>
            </div>
            {checkCurentStep(1) ? (
              <button className={styles.button__nextStep}>Далее</button>
            ) : (
              <button className={styles.button__stepDone}>{svgs.checkmark}</button>
            )}
          </div>

          <div className={[styles.column, styles.column__center].join(" ")} style={getColumnBorderStyles(2)}>
            <h3 className={styles.column__header} style={getColumnHeaderStyles(2)}>
              Общие сведения
            </h3>
            <div className={styles.column__content}>
              <div className={styles.centerBlock}>
                <div className={styles.left}>
                  <div className={styles.legalForm}>
                    <span className={styles.legalForm__text}>Правовая форма</span>
                    <LegalForm></LegalForm>
                  </div>
                  <Input id="input_inn" labelText="ИНН:" placeholder="Введите ИНН" sliceAction={actions.setInn}></Input>
                  <Input id="input_kpp" labelText="КПП:" placeholder="Введите КПП" sliceAction={actions.setKpp}></Input>
                  <Input id="input_orgn" labelText="ОГРН:" placeholder="Введите ОГРН" sliceAction={actions.setOgrn}></Input>
                  <Input id="input_okatao" labelText="ОКАТАО:" placeholder="Введите ОКАТАО" sliceAction={actions.setOkatao}></Input>
                  <Input id="input_okpo" labelText="ОКПО:" placeholder="Введите ОКПО" sliceAction={actions.setOkpo}></Input>
                  <TextArea id="textarea_paymentDetaild" labelText="Платежные реквизиты:" sliceAction={actions.setPaymentDetails} height="125px"></TextArea>
                </div>
                <div className={styles.right}>
                  <TextArea id="textarea_contactPersons" labelText="Контактные лица:" sliceAction={actions.setContactPersons} height="160px"></TextArea>
                  <div className={styles.registrationDateEGR__container}>
                    <Input
                      id="input_registrationDateEGR"
                      labelText="Дата ЕГРЮЛ/ЕГРИП:"
                      placeholder="Введите дату ЕГРЮЛ/ЕГРИП"
                      sliceAction={actions.setRegistrationDateEGR}
                    ></Input>
                    <DatePicker id="datepicker_registrationDateEGR" target="input_registrationDateEGR"></DatePicker>
                  </div>
                  <Input id="input_numberEGR" labelText="Номер ЕГРЮЛ/ЕГРИП:" placeholder="Введите номер ЕГРЮЛ/ЕГРИП" sliceAction={actions.setNumberEGR}></Input>
                  <Input
                    id="input_issuedEGR"
                    labelText="Кем выдано ЕГРЮЛ/ЕГРИП:"
                    placeholder="Введите кем выдано ЕГРЮЛ/ЕГРИП"
                    sliceAction={actions.setIssuedEGR}
                  ></Input>
                  <TextArea id="textarea_comment" labelText="Комментарий:" sliceAction={actions.setComment} height="125px"></TextArea>
                </div>
              </div>
            </div>
            {checkCurentStep(2) ? (
              <button className={styles.button__nextStep}>Далее</button>
            ) : (
              <button className={styles.button__stepDone}>{svgs.checkmark}</button>
            )}
          </div>

          <div className={styles.column} style={getColumnBorderStyles(3)}>
            <h3 className={styles.column__header} style={getColumnHeaderStyles(3)}>
              Документы
            </h3>
            <div className={styles.dragAndDrops}>
              <div className={styles.dragAndDrop}>
                {/* <label className={styles.dragAndDrop__label}>Копия свидетельства о внесении ЕГРЮЛ/ЕГРИП</label> */}
                <DragAndDrop
                  id="input_copyOfRegisterEntryCertificateEGR"
                  labelText="Копия свидетельства о внесении ЕГРЮЛ/ЕГРИП"
                  dropCallBack={() => {}}
                ></DragAndDrop>
              </div>
              <div className={styles.dragAndDrop}>
                {/* <label className={styles.dragAndDrop__label}>Официальное извещение контрагента о реквизитах</label> */}
                <DragAndDrop
                  id="input_ofitialNotificationContractorOnPaymentDetails"
                  labelText="Официальное извещение контрагента о реквизитах"
                  dropCallBack={() => {}}
                ></DragAndDrop>
              </div>
              <div className={styles.dragAndDrop}>
                {/* <label className={styles.dragAndDrop__label}>Копии учредительных документов</label> */}
                <DragAndDrop id="input_copiesOfConstituentDocuments" labelText="Копии учредительных документов" dropCallBack={() => {}}></DragAndDrop>
              </div>
            </div>
          </div>
        </div> :
        <OrganizationUsers></OrganizationUsers>
        }
      </div>
    </div>
  );
};

export default OrganizationInfo;
