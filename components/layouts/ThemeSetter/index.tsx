import { Fragment, ReactNode, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { changeAppPalette } from 'services/redux/themeSlice';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { selectTheme } from 'services/redux/selectors';
import { getPalettesObjectOfObjects, getStoredKey } from './utils';

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
               type: 'light',
               primary: {
                  light: palettes[appPalette.current].light,
                  main: palettes[appPalette.current].main,
                  dark: palettes[appPalette.current].dark,
                  contrastText: palettes[appPalette.current].contrastText,
               },
               secondary: {
                  light: '#ffddc1',
                  main: '#ffab91',
                  dark: '#c97b63',
                  contrastText: '#000000',
               },
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
