import { styled, Box, Paper, Avatar, Typography } from "@material-ui/core";
import { flexCenter, flexStartCenter } from "../ThemeSetter/mixins";

export const Container = styled(Box)(({ theme: { zIndex } }) => ({
  ...flexCenter,
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: zIndex.drawer + 1,
}));

export const Backdrop = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "absolute",
  cursor: "pointer",
});

export const MenuContainer = styled(Box)(({ theme: { spacing } }) => ({
  width: "100%",
  maxWidth: 800,
  padding: spacing(2),
  position: "absolute",
}));

export const Menu = styled(Paper)(({ theme: { spacing } }) => ({
  width: "100%",
  padding: spacing(2),
  paddingTop: 0,
  backgroundColor: "rgba(255, 255, 255, 0.95)",
}));

export const Header = styled(Box)(({ theme: { spacing } }) => ({
  ...flexStartCenter,
  paddingTop: spacing(1),
  paddingBottom: spacing(1),
}));

export const Title = styled(Typography)({
  ...flexStartCenter,
  flexGrow: 1,
});

export const ItemContainer = styled(Paper)(
  ({ theme: { spacing, appPalette, palette } }) => ({
    ...flexStartCenter,
    padding: spacing(2),
    cursor: "pointer",
    transition: ".1s",
    "&:hover": {
      color: palette.background.paper,
      backgroundColor: appPalette[appPalette.current].main,
      "& .item-icon": {
        backgroundColor: appPalette[appPalette.current].light,
      },
    },
  })
);

export const ItemCaption = styled(Box)({
  ...flexStartCenter,
});

export const ItemIcon = styled(Avatar)(
  ({ theme: { spacing, palette, appPalette } }) => ({
    ...flexCenter,
    width: 50,
    height: 50,
    fontSize: 35,
    color: palette.background.paper,
    backgroundColor: appPalette[appPalette.current].main,
    marginRight: spacing(2),
  })
);
