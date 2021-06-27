import { ReactNode, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { changePalette } from 'services/redux/slices/theme';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { selectTheme } from 'services/redux/selectors';
import { getPalettesObjectOfObjects, getStoredKey } from './utils';

interface Props {
   children: ReactNode;
}

const ThemeWrapper = ({ children }: Props) => {
   const dispatch = useAppDispatch();
   const themeRedux = useAppSelector(selectTheme);
   const palettes = getPalettesObjectOfObjects();

   useEffect(() => {
      const storedKey = getStoredKey();
      dispatch(changePalette(storedKey));
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
                  light: palettes[themeRedux.current].light,
                  main: palettes[themeRedux.current].main,
                  dark: palettes[themeRedux.current].dark,
                  contrastText: palettes[themeRedux.current].contrastText,
               },
               secondary: {
                  light: '#ffddc1',
                  main: '#ffab91',
                  dark: '#c97b63',
                  contrastText: '#000000',
               },
            },
         }),
      [themeRedux.current]
   );

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         {children}
      </ThemeProvider>
   );
};

export default ThemeWrapper;
