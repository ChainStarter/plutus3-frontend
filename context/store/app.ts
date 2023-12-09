import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../../types";
import { LANGUAGE_ENUM, THEME_MODE_ENUM } from "../../types";
import { LANG_LOCAL_KEY, THEME_LOCAL_KEY } from "../../types/constant";
import i18next from "i18next";

const initialState: IAppState = {
  themeMode: THEME_MODE_ENUM.dark,
  language: LANGUAGE_ENUM.en_US,
  showConnectModal: false
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<THEME_MODE_ENUM>) => {
      localStorage.setItem(THEME_LOCAL_KEY, action.payload);
      state.themeMode = action.payload;
    },
    setLanguage: (state, action: PayloadAction<LANGUAGE_ENUM>) => {
      localStorage.setItem(LANG_LOCAL_KEY, action.payload);
      state.language = action.payload;
      i18next.changeLanguage(action.payload)
    },
    setShowConnectModal: (state, action: PayloadAction<boolean>) => {
      state.showConnectModal = action.payload;
    }
  },
});
export const {
  setThemeMode,
  setLanguage,
  setShowConnectModal
} = AppSlice.actions;
export default AppSlice.reducer;
