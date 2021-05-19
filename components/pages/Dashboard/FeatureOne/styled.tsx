import {
  Box,
  styled,
  Typography,
  Container as MuiContainer,
} from "@material-ui/core";
import Color from "color";

export const RootContainer = styled(Box)(({ theme: { appPalette } }) => ({
  color: appPalette[appPalette.current].contrastText,
}));

export const BackgroundDesign = styled(Box)(({ theme: { appPalette } }) => {
  const mainColor = Color(appPalette[appPalette.current].main).object();
  const darkColor = Color(appPalette[appPalette.current].dark).object();

  return {
    width: "100%",
    height: 700,
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1000' height='600' preserveAspectRatio='none' viewBox='0 0 1000 600'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1381%26quot%3b)' fill='none'%3e%3crect width='1000' height='600' x='0' y='0' fill='rgba(${mainColor.r}%2c ${mainColor.g}%2c ${mainColor.b}%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c103 C 50%2c139 150%2c277 250%2c283 C 350%2c289 400%2c143.2 500%2c133 C 600%2c122.8 650%2c250.8 750%2c232 C 850%2c213.2 950%2c77.6 1000%2c39L1000 600L0 600z' fill='rgba(${darkColor.r}%2c ${darkColor.g}%2c ${darkColor.b}%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c413 C 66.8%2c422.8 200.4%2c474.2 334%2c462 C 467.6%2c449.8 534.8%2c340.2 668%2c352 C 801.2%2c363.8 933.6%2c487.2 1000%2c521L1000 600L0 600z' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1381'%3e%3crect width='1000' height='600' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");`,
    backgroundSize: "100vw 700px",
    backgroundPositionY: "bottom",
    backgroundPositionX: "center",
    position: "absolute",
    zIndex: -1,
  };
});

export const Wrapper = styled(MuiContainer)(({ theme: { spacing } }) => ({
  paddingTop: 70,
  paddingBottom: spacing(2),
}));

export const Title = styled(Typography)(({ theme: { spacing } }) => ({
  marginBottom: spacing(1),
}));
