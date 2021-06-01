import { Fragment } from "react";
import { WaveBackground } from "components/designs/styled";
import { Container, Title } from "./styled";
import { Grid } from "@material-ui/core";

import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";

export default function Notifications() {
  return (
    <Fragment>
      <WaveBackground />
      <Container maxWidth="lg">
        <Title variant="h4">Notifications</Title>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={7}>
            <FeatureOne />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <FeatureTwo />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
