import { Fragment, ReactNode, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { changeAppPalette } from "redux/themeSlice";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, CssBaseline, useTheme } from "@material-ui/core";
import { selectTheme } from "redux/selectors";
import { getPalettesObjectOfObjects, getStoredKey } from "./utils";
import "./extension";

interface Props {
  children: ReactNode;
}

const ThemeSetter = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const { appPalette } = useAppSelector(selectTheme);
  const palettes = getPalettesObjectOfObjects();

  useEffect(() => {
    const storedKey = getStoredKey();
    dispatch(changeAppPalette(storedKey));
  }, []);

  const theme = useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: "'Comfortaa', 'Poppins', Verdana",
        },
        palette: {
          type: "light",
          primary: {
            light: palettes[appPalette.current].light,
            main: palettes[appPalette.current].main,
            dark: palettes[appPalette.current].dark,
            contrastText: palettes[appPalette.current].contrastText,
          },
        },
        appPalette: {
          current: appPalette.current,
          ...palettes,
        },
      }),
    [appPalette.current]
  );

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Fragment>
  );
};

export default ThemeSetter;
