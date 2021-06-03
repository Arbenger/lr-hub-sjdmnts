import {
  styled,
  Typography,
  Container as MuiContainer,
} from "@material-ui/core";

export const Container = styled(MuiContainer)(
  ({ theme: { appPalette, spacing } }) => ({
    color: appPalette[appPalette.current].contrastText,
    paddingTop: 70,
    marginBottom: spacing(10),
  })
);

export const Title = styled(Typography)(({ theme: { spacing } }) => ({
  marginBottom: spacing(1),
}));
