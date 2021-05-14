import { AppPalette } from "./types";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    appPalette: AppPalette;
  }
  interface ThemeOptions {
    appPalette: AppPalette;
  }
}
