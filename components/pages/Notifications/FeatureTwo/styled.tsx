import { styled, Container as MuiContainer } from "@material-ui/core";

export const Container = styled(MuiContainer)(({ theme: { spacing } }) => ({
  marginBottom: spacing(8),
}));
