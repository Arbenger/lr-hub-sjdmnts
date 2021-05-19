import { Box, styled } from "@material-ui/core";

export const Wrapper = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, .3)",
  position: "absolute",
});

export const ImageCarouselCurve = styled(Box)({
  width: "100%",
  height: 150,
  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='500' height='150' preserveAspectRatio='none' viewBox='0 0 500 150'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1253%26quot%3b)' fill='none'%3e%3crect width='500' height='150' x='0' y='0' fill='rgba(33%2c 33%2c 33%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c96 C 25%2c89 75%2c52 125%2c61 C 175%2c70 200%2c141 250%2c141 C 300%2c141 325%2c64.4 375%2c61 C 425%2c57.6 475%2c111.4 500%2c124L500 150L0 150z' fill='rgba(250%2c 250%2c 250%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1253'%3e%3crect width='500' height='150' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");`,
  backgroundSize: "100vw 150px",
  backgroundPositionY: "bottom",
  backgroundPositionX: "center",
});

export const Container = styled("div")(
  ({ theme: { palette, spacing, breakpoints } }) => ({
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
      [breakpoints.only("xs")]: {
        display: "none",
      },
    },
  })
);
