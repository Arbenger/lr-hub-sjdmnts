import { Grid } from "@material-ui/core";
import { Container } from "./styled";
import List from "./components/List";
import Chart from "./components/Chart";

export default function FeatureTwo() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <List />
        </Grid>
        <Grid item xs={12} md={5}>
          <Chart />
        </Grid>
      </Grid>
    </Container>
  );
}
