import { styled, Container as MuiContainer, Box } from "@material-ui/core";

export const Container = styled(Box)(({ theme: { spacing } }) => ({
  paddingTop: spacing(4),
  paddingBottom: spacing(4),
}));

export const Wrapper = styled(MuiContainer)({});
