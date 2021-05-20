import { Box, styled } from "@material-ui/core";

export const LayoutContainer = styled(Box)(
  ({ theme: { breakpoints, transitions } }) => ({
    transition: transitions.create("padding", { delay: 0 }),
    "&[data-is-drawer-open='false']": {
      transition: transitions.create("padding", { delay: 200 }),
    },
    [breakpoints.up("md")]: {
      "&[data-is-drawer-open='false']": {
        paddingLeft: 67.5,
      },
      "&[data-is-drawer-open='true']": {
        paddingLeft: 280,
      },
    },
  })
);
