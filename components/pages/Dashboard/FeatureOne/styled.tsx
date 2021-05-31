import {
  Box,
  styled,
  Typography,
  Avatar,
  Paper,
  Container as MuiContainer,
} from "@material-ui/core";

export const RootContainer = styled(Box)(({ theme: { appPalette } }) => ({
  color: appPalette[appPalette.current].contrastText,
}));

export const Wrapper = styled(MuiContainer)(({ theme: { spacing } }) => ({
  paddingTop: 70,
  paddingBottom: spacing(2),
}));

export const Title = styled(Typography)(({ theme: { spacing } }) => ({
  marginBottom: spacing(1),
}));

export const ItemContainer = styled(Paper)(
  ({ theme: { spacing, shadows } }) => ({
    padding: spacing(3.5),
    cursor: "pointer",
    userSelect: "none",
    display: "flex",
    alignItems: "strech",
    justifyContent: "center",
    "&:hover": {
      boxShadow: shadows[15],
    },
  })
);

export const ItemCaption = styled(Box)({
  flexGrow: 1,
  "& *": {
    whiteSpace: "nowrap",
  },
});

export const ItemDisplay = styled(Avatar)(
  ({ theme: { spacing, palette, appPalette } }) => ({
    width: spacing(7),
    height: spacing(7),
    color: palette.background.paper,
    backgroundColor: appPalette[appPalette.current].main,
    fontSize: 35,
  })
);
