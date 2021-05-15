import { Container, Paper, styled } from "@material-ui/core";

export const RootContainer = styled(Container)(({ theme: { spacing } }) => ({
  paddingBottom: spacing(1),
  overflowX: "auto",
}));

export const StatisticsContainer = styled(Paper)({
  minWidth: 600,
  height: 400,
});
