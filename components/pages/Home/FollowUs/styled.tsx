import { Paper, styled, Typography } from "@material-ui/core";

export const Container = styled(Paper)(({ theme: { spacing } }) => ({
  padding: spacing(2),
}));

export const Title = styled(Typography)(({ theme: { spacing } }) => ({
  marginBottom: spacing(2),
}));
