import { styled, Box } from "@material-ui/core";

export const Container = styled(Box)(({ theme: { spacing } }) => ({
  marginBottom: spacing(8),
}));
