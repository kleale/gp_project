import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum LegalForm {
  UR, // Юр. лицо
  IP, // ИП
  SZ, // СЗ
}

interface RegistrationState {
  legalForm: LegalForm;
  inn: string;
  kpp: string;
  ogrn: string;
  address: string;
  fio: string;
  email: string;
  consentRequriments: boolean;
  consentDataProcessing: boolean;
  contractorFound: boolean;
  contractorFoundName: string;
  copiesOfConstituentDocuments: Array<File>;
}

const initialState: RegistrationState = {
  legalForm: LegalForm.UR,
  inn: "",
  kpp: "",
  ogrn: "",
  address: "",
  fio: "",
  email: "",
  consentRequriments: false,
  consentDataProcessing: false,
  contractorFound: false,
  contractorFoundName: "ООО Московские Телесистемы",
  copiesOfConstituentDocuments: [],
};

export const registrationSlice = createSlice({
  name: "Registration",
  initialState,
  reducers: {
    setLegalForm(state: RegistrationState, action: PayloadAction<LegalForm>) {
      state.legalForm = action.payload;
    },
    setInn(state: RegistrationState, action: PayloadAction<string>) {
      state.inn = action.payload;
    },
    setKpp(state: RegistrationState, action: PayloadAction<string>) {
      state.kpp = action.payload;
    },
    setOgrn(state: RegistrationState, action: PayloadAction<string>) {
      state.ogrn = action.payload;
    },
    setAddress(state: RegistrationState, action: PayloadAction<string>) {
      state.address = action.payload;
    },
    setFio(state: RegistrationState, action: PayloadAction<string>) {
      state.fio = action.payload;
    },
    setEmail(state: RegistrationState, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setConsentRequirements(state: RegistrationState, action: PayloadAction<boolean>) {
      state.consentRequriments = action.payload;
    },
    setConsentDataProcessing(state: RegistrationState, action: PayloadAction<boolean>) {
      state.consentDataProcessing = action.payload;
    },
    setCopiesOfConstituentDocuments(state: RegistrationState, action: PayloadAction<Array<File>>) {
      state.copiesOfConstituentDocuments = action.payload;
    },
  },
});

export default registrationSlice.reducer;
