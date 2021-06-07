import {
  WaveBackground,
  PageContainer,
  PageTitle,
} from "components/layouts/Page/styled";
import { Grid } from "@material-ui/core";
import { Fragment } from "react";
import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";

export default function Notifications() {
  return (
    <Fragment>
      <WaveBackground />
      <PageContainer maxWidth="lg">
        <PageTitle variant="h4">Notifications</PageTitle>
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
      </PageContainer>
    </Fragment>
  );
}
