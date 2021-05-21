import { Fragment, ReactNode, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { changeAppPalette } from "redux/themeSlice";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { selectTheme } from "redux/selectors";
import { getPalettesObjectOfObjects, getStoredKey } from "./utils";
import "./extension";

interface Props {
  children: ReactNode;
}

const ThemeSetter = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const { appPalette } = useAppSelector(selectTheme);

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
        },
        appPalette: {
          current: appPalette.current,
          ...getPalettesObjectOfObjects(),
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
