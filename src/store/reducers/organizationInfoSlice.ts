import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LegalForm } from "./registrationSlice";

interface OrganizationInfoState {
  companyName: string;
  legalAddress: string;
  legalAddressSameAsPostal: boolean; // Юридический адрес совпадает с почтовым
  legalAddressSameAsActual: boolean; // Юридический адрес совпадает с фактическим
  legalForm: LegalForm;
  inn: string;
  kpp: string;
  ogrn: string;
  okatao: string;
  okpo: string;
  snils: string;
  paymentDetails: string;
  contactPersons: string;
  registrationDateEGR: string;
  numberEGR: string;
  issuedEGR: string;
  comment: string;
  copyOfRegisterEntryCertificateEGR: Array<File>; // Копия свидетельства о внесении ЕГРЮЛ/ЕГРИП
  ofitialNotificationContractorOnPaymentDetails: Array<File>; // Официальное извещение контрагента о реквизитах
  copiesOfConstituentDocuments: Array<File>; // Копии учредительных документво
}

const initialState: OrganizationInfoState = {
  companyName: "",
  legalAddress: "",
  legalAddressSameAsPostal: false,
  legalAddressSameAsActual: false,
  legalForm: LegalForm.UR,
  inn: "",
  kpp: "",
  ogrn: "",
  okatao: "",
  okpo: "",
  snils: "",
  paymentDetails: "",
  contactPersons: "",
  registrationDateEGR: "",
  numberEGR: "",
  issuedEGR: "",
  comment: "",
  copyOfRegisterEntryCertificateEGR: [],
  ofitialNotificationContractorOnPaymentDetails: [],
  copiesOfConstituentDocuments: [],
};

export const organizationInfoSlice = createSlice({
  name: "OrganizationInfo",
  initialState,
  reducers: {
    setCompanyName(state: OrganizationInfoState, action: PayloadAction<string>) {
      state.companyName = action.payload;
    },
    setLegalAddress(state: OrganizationInfoState, action: PayloadAction<string>) {
      state.legalAddress = action.payload;
    },
    setLegalAddressSameAsPostal(state: OrganizationInfoState, action: PayloadAction<boolean>) {
      state.legalAddressSameAsPostal = action.payload;
    },
    setLegalAddressSameAsActual(state: OrganizationInfoState, action: PayloadAction<boolean>) {
      state.legalAddressSameAsActual = action.payload;
    },
    setLegalForm(state: OrganizationInfoState, action: PayloadAction<LegalForm>) {
      state.legalForm = action.payload;
    },
    setInn(state: OrganizationInfoState, action: PayloadAction<string>) {
      state.inn = action.payload;
    },
    setKpp(state: OrganizationInfoState, action: PayloadAction<string>) {
      state.kpp = action.payload;
    },
    setOgrn(state: OrganizationInfoState, action: PayloadAction<string>) {
      state.ogrn = action.payload;
    },
    setOkatao(state: OrganizationInfoState, action: PayloadAction<string>) {
      state.okatao = action.payload;
    },
    setOkpo(state: OrganizationInfoState, action: PayloadAction<string>) {
      state.okpo = action.payload;
    },
    setPaymentDetails(state: OrganizationInfoState, action: PayloadAction<string>) {
      state.paymentDetails = action.payload;
    },
    setContactPersons(state: OrganizationInfoState, action: PayloadAction<string>) {
      state.contactPersons = action.payload;
    },
    setRegistrationDateEGR(state: OrganizationInfoState, action: PayloadAction<string>) {
      state.registrationDateEGR = action.payload;
    },
    setNumberEGR(state: OrganizationInfoState, action: PayloadAction<string>) {
      state.numberEGR = action.payload;
    },
    setIssuedEGR(state: OrganizationInfoState, action: PayloadAction<string>) {
      state.issuedEGR = action.payload;
    },
    setComment(state: OrganizationInfoState, action: PayloadAction<string>) {
      state.comment = action.payload;
    },
    setCopyOfRegisterEntryCertificateEGR(state: OrganizationInfoState, action: PayloadAction<Array<File>>) {
      state.copyOfRegisterEntryCertificateEGR = action.payload;
    },
    setOfitialNotificationContractorOnPaymentDetails(state: OrganizationInfoState, action: PayloadAction<Array<File>>) {
      state.ofitialNotificationContractorOnPaymentDetails = action.payload;
    },
    setCopiesOfConstituentDocuments(state: OrganizationInfoState, action: PayloadAction<Array<File>>) {
      state.copiesOfConstituentDocuments = action.payload;
    },
  },
});

export default organizationInfoSlice.reducer;
