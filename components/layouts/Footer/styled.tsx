import { Box, styled } from "@material-ui/core";
import { flexCenter } from "../ThemeSetter/mixins";
import Color from "color";

export const RootContainer = styled(Box)(({ theme: { appPalette } }) => ({
  color: appPalette[appPalette.current].contrastText,
  backgroundColor: "transparent",
}));

export const Curve = styled(Box)({
  width: "100%",
  height: 100,
  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='500' height='100' preserveAspectRatio='none' viewBox='0 0 500 100'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1296%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c20 C 25%2c33.8 75%2c93 125%2c89 C 175%2c85 200%2c5 250%2c0 C 300%2c-5 325%2c55.2 375%2c64 C 425%2c72.8 475%2c48 500%2c44L500 100L0 100z' fill='rgba(33%2c 33%2c 33%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1296'%3e%3crect width='500' height='100' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");`,
  backgroundSize: "100vw 100px",
  backgroundPositionY: "bottom",
  backgroundPositionX: "center",
});

export const FeatureTwoCurve = styled(Box)(({ theme: { appPalette } }) => {
  const color = Color(appPalette[appPalette.current].dark);
  const rgb = color.object();
  return {
    width: "100%",
    height: 50,
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='500' height='50' preserveAspectRatio='none' viewBox='0 0 500 50'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1127%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c17 C 25%2c19.4 75%2c29.2 125%2c29 C 175%2c28.8 200%2c15.6 250%2c16 C 300%2c16.4 325%2c33.8 375%2c31 C 425%2c28.2 475%2c7.8 500%2c2L500 50L0 50z' fill='rgba(${rgb.r}%2c ${rgb.g}%2c ${rgb.b}%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1127'%3e%3crect width='500' height='50' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");`,
    backgroundSize: "100vw 50px",
    backgroundPositionY: "bottom",
    backgroundPositionX: "center",
    backgroundColor: appPalette.black.main,
  };
});

export const FeatureTwoContainer = styled(Box)(
  ({ theme: { appPalette, spacing } }) => ({
    ...flexCenter,
    paddingBottom: spacing(3),
    textAlign: "center",
    backgroundColor: appPalette[appPalette.current].dark,
  })
);
