import {
  styled,
  Typography,
  Paper,
  Container as MuiContainer,
} from "@material-ui/core";

export const Container = styled(MuiContainer)(
  ({ theme: { appPalette, spacing, breakpoints } }) => ({
    color: appPalette[appPalette.current].contrastText,
    paddingTop: 70,
    marginBottom: spacing(50),
    [breakpoints.only("xs")]: {
      marginBottom: spacing(10),
    },
  })
);

export const Title = styled(Typography)(({ theme: { spacing } }) => ({
  marginBottom: spacing(1),
}));

export const ContentContainer = styled(Paper)(
  ({ theme: { spacing, breakpoints } }) => ({
    padding: spacing(4),
    [breakpoints.only("xs")]: {
      padding: spacing(2),
    },
  })
);

export const ContentText = styled(Typography)(({ theme: { spacing } }) => ({
  textIndent: spacing(4),
}));
