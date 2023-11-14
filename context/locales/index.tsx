import React, {FC} from "react";
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en_US from "./en_US.json";
import zh_CN from "./zh_CN.json";
import {LANGUAGE_ENUM} from "../../types";

export const languageConfig = {
  en_US: {
    translation: en_US,
    local: LANGUAGE_ENUM.en_US,
    title: "English",
  },
  zh_CN: {
    translation: zh_CN,
    local: LANGUAGE_ENUM.zh_CN,
    title: "中文",
  },
};
i18n.use(initReactI18next).init({
  resources: languageConfig,
  lng:
  LANGUAGE_ENUM.en_US,
  interpolation: {
    escapeValue: false,
    prefix: "{",
    suffix: "}",
  },
});
const LanguageProvider: FC<{ children: React.ReactNode }> = ({children}) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
export default LanguageProvider;
