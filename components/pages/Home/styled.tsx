import { Box, styled } from "@material-ui/core";

export const Wrapper = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, .3)",
  position: "absolute",
});

export const Container = styled("div")(({ theme: { palette, spacing } }) => ({
  backgroundColor: palette.grey[900],
  paddingBottom: spacing(1),
  "& .swiper-main": {
    height: "calc(100vh - 150px - 16px)",
    marginBottom: spacing(1),
  },
  "& .swiper-sub": {
    height: 150,
    "& .swiper-slide": {
      opacity: 0.4,
    },
    "& .swiper-slide-thumb-active": {
      opacity: 1,
    },
  },
  "& .swiper-button-next, & .swiper-button-prev": {
    color: palette.common.white,
  },
}));
