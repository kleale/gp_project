import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FeedbackFormState {
  fio: string;
  email: string;
  text: string;
}

const initialState: FeedbackFormState = {
  fio: "",
  email: "",
  text: ""
}

export const feedbackFormSlice = createSlice({
  name: "FeedbackForm",
  initialState,
  reducers: {
    setFio(state: FeedbackFormState, action: PayloadAction<string>) {
      state.fio = action.payload;
    },
    setEmail(state: FeedbackFormState, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setText(state: FeedbackFormState, action: PayloadAction<string>) {
      state.text = action.payload;
    }
  }
})

export default feedbackFormSlice.reducer;