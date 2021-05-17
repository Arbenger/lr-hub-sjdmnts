import { Box, styled } from "@material-ui/core";

export const Container = styled(Box)(
  ({ theme: { zIndex, breakpoints, transitions } }) => ({
    width: "100%",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    opacity: 0,
    visibility: "hidden",
    backgroundColor: "rgba(0, 0, 0, .4)",
    transition: `${transitions.create("opacity", {
      duration: ".5s",
    })}, ${transitions.create("visibility", { delay: ".5s" })}`,
    zIndex: zIndex.drawer - 1,
    [breakpoints.down("sm")]: {
      "&[data-is-drawer-open='true']": {
        transition: `${transitions.create("opacity", {
          duration: ".5s",
        })}, ${transitions.create("visibility", { delay: "0s" })}`,
        opacity: 1,
        visibility: "visible",
      },
    },
  })
);
