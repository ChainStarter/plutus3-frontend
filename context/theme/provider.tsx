import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider as StyleThemeProvider } from "styled-components";
import { IAppState } from "../../types";
import { THEME_MODE_ENUM } from "../../types";
import { theme } from "./index";

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const { themeMode } = useSelector(
    (state: { AppReducer: IAppState }) => state.AppReducer
  );
  const themeObject = useMemo(
    () => theme(themeMode === THEME_MODE_ENUM.dark),
    [themeMode]
  );

  return (
    <StyleThemeProvider theme={themeObject}>{children}</StyleThemeProvider>
  );
};

export default ThemeProvider;
