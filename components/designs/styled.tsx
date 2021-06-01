import { Box, styled } from "@material-ui/core";
import Color from "color";

export const WaveBackground = styled(Box)(({ theme: { appPalette } }) => {
  const main = Color(appPalette[appPalette.current].main).object();
  const dark = Color(appPalette[appPalette.current].dark).object();

  return {
    width: "100%",
    height: 700,
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1000' height='600' preserveAspectRatio='none' viewBox='0 0 1000 600'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3crect width='1000' height='600' x='0' y='0' fill='rgba(${main.r}%2c ${main.g}%2c ${main.b}%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c242 C 50%2c207.4 150%2c58.4 250%2c69 C 350%2c79.6 400%2c284.4 500%2c295 C 600%2c305.6 650%2c125.6 750%2c122 C 850%2c118.4 950%2c246 1000%2c277L1000 600L0 600z' fill='rgba(${dark.r}%2c ${dark.g}%2c ${dark.b}%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c554 C 50%2c513.6 150%2c343 250%2c352 C 350%2c361 400%2c585.2 500%2c599 C 600%2c612.8 650%2c435 750%2c421 C 850%2c407 950%2c507.4 1000%2c529L1000 600L0 600z' fill='rgba(250%2c 250%2c 250%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1000' height='600' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
    backgroundSize: "100vw 700px",
    backgroundPositionY: "bottom",
    backgroundPositionX: "center",
    position: "absolute",
    zIndex: -1,
  };
});
