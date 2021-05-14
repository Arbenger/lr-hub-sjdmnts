import { Container, Paper, styled } from "@material-ui/core";

export const RootContainer = styled(Container)(({ theme: { spacing } }) => ({
  paddingBottom: spacing(2),
  marginBottom: spacing(4),
  overflowX: "auto",
}));

export const LineChartContainer = styled(Paper)({
  minWidth: 600,
  height: 400,
});
