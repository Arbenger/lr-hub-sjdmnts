import { Container as MuiContainer, styled } from "@material-ui/core";

export const Container = styled(MuiContainer)(({ theme: { spacing } }) => ({
  paddingLeft: spacing(2),
  paddingRight: spacing(2),
  paddingTop: spacing(6),
  paddingBottom: spacing(6),
}));
