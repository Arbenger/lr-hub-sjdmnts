import { Fragment } from "react";
import { WaveBackground } from "components/designs/styled";
import { Grid } from "@material-ui/core";
import { Container, Title } from "./styled";

import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";

export default function Bookmarks() {
  return (
    <Fragment>
      <WaveBackground />
      <Container maxWidth="lg">
        <Title variant="h4">Bookmarks</Title>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FeatureOne />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FeatureTwo />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
