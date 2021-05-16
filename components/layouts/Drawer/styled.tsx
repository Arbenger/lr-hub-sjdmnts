import { styled, Box, Divider as MuiDivider } from "@material-ui/core";

export const Container = styled(Box)(
  ({ theme: { palette, zIndex, transitions, breakpoints } }) => ({
    width: 280,
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: palette.grey[900],
    zIndex: zIndex.drawer,
    userSelect: "none",
    transform: "translateX(-300px)",
    transition: `${transitions.create("width")}, ${transitions.create(
      "transform"
    )}`,
    "&[data-is-open='true']": {
      transform: "translateX(0px)",
    },
    [breakpoints.up("md")]: {
      "&[data-is-open='false']": {
        width: 67.5,
        transform: "translateX(0px)",
        transition: `${transitions.create("width", {
          delay: 200,
        })}, ${transitions.create("transform")}`,
        "& .hide-on-close": {
          display: "none",
        },
        "& .fade-on-close": {
          transition: transitions.create("opacity"),
          opacity: 0,
        },
      },
    },
    "& .fade-on-close": {
      transition: transitions.create("opacity", { delay: 200 }),
    },
  })
);

export const Divider = styled(MuiDivider)({
  background: "rgba(225, 255, 255, .12)",
});
