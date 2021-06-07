import { styled, Box } from "@material-ui/core";

export const Container = styled(Box)(({ theme: { spacing } }) => ({
  paddingTop: spacing(4),
  paddingBottom: spacing(4),
}));
