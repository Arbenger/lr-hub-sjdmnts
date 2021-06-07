import { styled, Box, Divider as MuiDivider } from "@material-ui/core";

export const Container = styled(Box)(({ theme: { spacing } }) => ({
  textAlign: "left",
  backgroundColor: "#212121",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: `${spacing(4)}px ${spacing(1)}px`,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
}));

export const WaveBackground = styled(Box)({
  width: "100%",
  height: 100,
  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='500' height='100' preserveAspectRatio='none' viewBox='0 0 500 100'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1296%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c20 C 25%2c33.8 75%2c93 125%2c89 C 175%2c85 200%2c5 250%2c0 C 300%2c-5 325%2c55.2 375%2c64 C 425%2c72.8 475%2c48 500%2c44L500 100L0 100z' fill='rgba(33%2c 33%2c 33%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1296'%3e%3crect width='500' height='100' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");`,
  backgroundSize: "100vw 100px",
  backgroundPositionY: "bottom",
  backgroundPositionX: "center",
});

export const Divider = styled(MuiDivider)(({ theme: { spacing } }) => ({
  padding: spacing(2),
}));

export const ColumnOneContainer = styled(Box)(({ theme: { breakpoints } }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  [breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const ColumnTwoContainer = styled(Box)(({ theme: { spacing } }) => ({
  paddingTop: spacing(2),
  "& ul": {
    padding: 0,
    listStyle: "none",
    "& li": {
      marginBottom: spacing(1),
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
}));

export const ColumnThreeContainer = ColumnTwoContainer;

export const ColumnFourContainer = styled(Box)(({ theme: { spacing } }) => ({
  paddingTop: spacing(2),
  "& ul": {
    padding: 0,
    listStyle: "none",
    "& li": {
      marginBottom: spacing(1),
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      "& div": {
        minWidth: 40,
        maxWidth: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& svg": {
          fontSize: 22,
        },
      },
    },
  },
}));
