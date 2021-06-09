import { Paper, styled } from "@material-ui/core";

export const ContentContainer = styled(Paper)(({ theme: { spacing } }) => ({
  padding: spacing(2),
}));
