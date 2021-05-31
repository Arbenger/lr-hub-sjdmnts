import {
  Container as MuiContainer,
  Box,
  styled,
  Typography,
} from "@material-ui/core";

export const Container = styled(Box)({});

export const Wrapper = styled(MuiContainer)(({ theme: { appPalette } }) => ({
  color: appPalette[appPalette.current].contrastText,
  paddingTop: 70,
}));

export const Title = styled(Typography)(({ theme: { spacing } }) => ({
  marginBottom: spacing(1),
}));
