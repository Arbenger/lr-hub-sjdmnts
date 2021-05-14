import { styled, AppBar as MuiAppBar } from "@material-ui/core";

export const AppBar = styled(MuiAppBar)(({ theme: { appPalette } }) => ({
  color: appPalette[appPalette.current].contrastText,
  backgroundColor: "transparent",
  '&[data-reached-threshold="true"]': {
    backgroundColor: appPalette[appPalette.current].main,
  },
}));
