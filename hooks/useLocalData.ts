import {useEffect} from "react";
import {LANGUAGE_ENUM, THEME_MODE_ENUM} from "../types";
import {LANG_LOCAL_KEY, THEME_LOCAL_KEY} from "../types/constant";
import {useDispatch} from "react-redux";
import {setLanguage, setThemeMode} from "../context/store/app";

export default function useLocalData(){
  const dispatch = useDispatch()
  useEffect(() => {
    if (typeof window !== "undefined"){
      const defLanguage: LANGUAGE_ENUM =
        window.localStorage.getItem(LANG_LOCAL_KEY) === LANGUAGE_ENUM.zh_CN
          ? LANGUAGE_ENUM.zh_CN
          : LANGUAGE_ENUM.en_US;

      const defTheme: THEME_MODE_ENUM =
        window.localStorage.getItem(THEME_LOCAL_KEY) === THEME_MODE_ENUM.light
          ? THEME_MODE_ENUM.light
          : THEME_MODE_ENUM.dark;
      dispatch(setThemeMode(defTheme))
      dispatch(setLanguage(defLanguage))
    }
  },[])
}
