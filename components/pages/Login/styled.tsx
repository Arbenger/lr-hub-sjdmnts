import {
  styled,
  Box,
  Typography,
  Container as MuiContainer,
} from "@material-ui/core";

export const Container = styled(MuiContainer)(
  ({ theme: { palette, spacing } }) => ({
    color: palette.primary.contrastText,
    paddingTop: 70,
    marginBottom: spacing(10),
  })
);

export const Title = styled(Typography)(({ theme: { spacing } }) => ({
  marginBottom: spacing(1),
}));

export const ContentContainer = styled(Box)({
  width: "fit-content",
  margin: "auto",
});
