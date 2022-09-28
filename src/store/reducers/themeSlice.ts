import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Themes {
  Dark,
  Light
}

interface ThemeState {
  currentTheme: Themes;
}

const initialState: ThemeState = {
  currentTheme: Themes.Light
}

export const themeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    setTheme(state: ThemeState, action: PayloadAction<Themes>) {
      state.currentTheme = action.payload;
    }
  }
})

export default themeSlice.reducer;