import {
  styled,
  Paper,
  Typography,
  Container as MuiContainer,
} from "@material-ui/core";

export const Container = styled(MuiContainer)(
  ({ theme: { palette, spacing } }) => ({
    color: palette.primary.contrastText,
    paddingTop: 70,
    marginBottom: spacing(15),
  })
);

export const Title = styled(Typography)(({ theme: { spacing } }) => ({
  marginBottom: spacing(1),
}));

export const ContentContainer = styled(Paper)(({ theme: { spacing } }) => ({
  width: "fit-content",
  margin: "auto",
  backgroundColor: "rgba(255, 255, 255, .85)",
  "& > div": {
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
  },
}));
