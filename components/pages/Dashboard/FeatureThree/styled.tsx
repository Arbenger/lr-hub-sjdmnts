import { Container, styled } from "@material-ui/core";

export const RootContainer = styled(Container)(({ theme: { spacing } }) => ({
  paddingTop: spacing(1),
  paddingBottom: spacing(2),
  marginBottom: spacing(2),
}));
