import {
  Container as MuiContainer,
  Box,
  styled,
  Typography,
} from "@material-ui/core";
import Color from "color";

export const Container = styled(Box)(({ theme: { spacing } }) => ({
  marginBottom: spacing(2),
}));

export const BackgroundDesign = styled(Box)(({ theme: { appPalette } }) => {
  const main = Color(appPalette[appPalette.current].main).object();
  const dark = Color(appPalette[appPalette.current].dark).object();
  return {
    width: "100%",
    height: 600,
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1000' height='600' preserveAspectRatio='none' viewBox='0 0 1000 600'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1023%26quot%3b)' fill='none'%3e%3crect width='1000' height='600' x='0' y='0' fill='rgba(${main.r}%2c ${main.g}%2c ${main.b}%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c99 C 50%2c114.2 150%2c181.4 250%2c175 C 350%2c168.6 400%2c64.6 500%2c67 C 600%2c69.4 650%2c196.4 750%2c187 C 850%2c177.6 950%2c53.4 1000%2c20L1000 600L0 600z' fill='rgba(${dark.r}%2c ${dark.g}%2c ${dark.b}%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c591 C 66.8%2c538 200.4%2c345.4 334%2c326 C 467.6%2c306.6 534.8%2c491.2 668%2c494 C 801.2%2c496.8 933.6%2c370.8 1000%2c340L1000 600L0 600z' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1023'%3e%3crect width='1000' height='600' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");`,
    backgroundPositionY: "start",
    backgroundPositionX: "center",
    backgroundSize: "100vw 600px",
    position: "absolute",
    zIndex: -1,
  };
});

export const Wrapper = styled(MuiContainer)(({ theme: { appPalette } }) => ({
  color: appPalette[appPalette.current].contrastText,
  paddingTop: 70,
}));

export const Title = styled(Typography)(({ theme: { spacing } }) => ({
  marginBottom: spacing(1),
}));

export const ToolContainer = styled(Box)(({ theme: { spacing } }) => ({}));
