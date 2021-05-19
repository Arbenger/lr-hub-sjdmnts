import { styled } from "@material-ui/core";

export const RootContainer = styled("div")(({ theme: { spacing } }) => ({
  textAlign: "left",
  backgroundColor: "#212121",
  // backgroundImage: "url(/images/cool-background-1.svg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: `${spacing(4)}px ${spacing(1)}px`,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
}));

export const ColumnOneContainer = styled("div")(
  ({ theme: { breakpoints } }) => ({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    [breakpoints.down("md")]: {
      justifyContent: "center",
    },
  })
);

export const ColumnTwoContainer = styled("div")(({ theme: { spacing } }) => ({
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

export const ColumnFourContainer = styled("div")(({ theme: { spacing } }) => ({
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
