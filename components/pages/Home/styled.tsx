import { Box, styled } from "@material-ui/core";
import { flexCenter } from "components/layouts/ThemeSetter/mixins";

export const Container = styled(Box)(({ theme: { breakpoints, palette } }) => ({
  "& .swiper-slide": {
    ...flexCenter,
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [breakpoints.only("xs")]: {
      height: 500,
    },
  },
  "& .swiper-button-next, & .swiper-button-prev": {
    color: palette.common.white,
  },
}));

export const Wrapper = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, .3)",
});
