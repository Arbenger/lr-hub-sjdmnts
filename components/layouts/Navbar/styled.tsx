import { styled, AppBar as MuiAppBar } from "@material-ui/core";

export const AppBar = styled(MuiAppBar)(
  ({ theme: { appPalette, transitions, breakpoints } }) => ({
    color: appPalette[appPalette.current].contrastText,
    backgroundColor: "transparent",
    "& .title": {
      opacity: 0,
      transition: transitions.create("opacity"),
    },
    '&[data-reached-threshold="true"]': {
      backgroundColor: appPalette[appPalette.current].main,
      "& .title": {
        opacity: 1,
      },
    },
    transition: transitions.create("padding", { delay: 0 }),
    "&[data-is-drawer-open='false']": {
      transition: transitions.create("padding", { delay: 200 }),
    },
    [breakpoints.up("md")]: {
      "&[data-is-drawer-open='false']": {
        paddingLeft: 67.5,
      },
      "&[data-is-drawer-minimized='true']": {
        paddingLeft: 280,
      },
    },
  })
);
