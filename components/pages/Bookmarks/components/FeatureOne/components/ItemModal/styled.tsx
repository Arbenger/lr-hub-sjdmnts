import {
  styled,
  Box,
  Paper,
  Button as MuiButton,
  Typography,
} from "@material-ui/core";
import { flexCenter } from "components/layouts/ThemeSetter/mixins";

export const Container = styled(Box)(({ theme: { zIndex } }) => ({
  ...flexCenter,
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: zIndex.drawer,
}));

export const ContentContainer = styled(Box)(({ theme: { spacing } }) => ({
  width: "100%",
  maxWidth: 700,
  padding: spacing(2),
  position: "absolute",
  zIndex: 1,
}));

export const Content = styled(Paper)(({ theme: { spacing } }) => ({
  width: "100%",
  padding: spacing(2),
}));

export const ContentImage = styled(Box)(({ theme: { breakpoints } }) => ({
  "& img": {
    width: "100%",
    height: 250,
    [breakpoints.only("xs")]: {
      height: 150,
    },
  },
}));

export const ContentChips = styled(Box)(({ theme: { spacing } }) => ({
  marginTop: spacing(3),
}));

export const ContentChipsTitle = styled(Typography)(
  ({ theme: { spacing } }) => ({
    marginBottom: spacing(1),
  })
);

export const Button = styled(MuiButton)(
  ({ theme: { spacing, appPalette } }) => ({
    color: appPalette[appPalette.current].main,
    borderColor: appPalette[appPalette.current].main,
    marginTop: spacing(1),
  })
);
