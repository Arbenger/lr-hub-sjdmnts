import {
  Box,
  styled,
  Typography,
  Container as MuiContainer,
} from "@material-ui/core";
import { temple } from "hero-patterns";

export const RootContainer = styled(Box)(({ theme: { appPalette } }) => ({
  color: appPalette[appPalette.current].contrastText,
}));

export const BackgroundDesign = styled(Box)(({ theme: { appPalette } }) => ({
  width: "100%",
  height: 480,
  backgroundColor: appPalette[appPalette.current].main,
  backgroundImage: temple(appPalette[appPalette.current].contrastText, 0.1),
  position: "absolute",
  zIndex: -1,
}));

export const Wrapper = styled(MuiContainer)(({ theme: { spacing } }) => ({
  paddingTop: 70,
  paddingBottom: spacing(2),
}));

export const Title = styled(Typography)(({ theme: { spacing } }) => ({
  marginBottom: spacing(1),
}));
