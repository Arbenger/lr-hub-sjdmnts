import {
  PageContainer,
  PageTitle,
  WaveBackground,
} from "components/layouts/Page/styled";
import { Grid } from "@material-ui/core";
import { Fragment } from "react";
import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";

export default function Library() {
  return (
    <Fragment>
      <WaveBackground />
      <PageContainer maxWidth="lg">
        <PageTitle variant="h4">Library</PageTitle>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FeatureOne />
          </Grid>
          <Grid item xs={12}>
            <FeatureTwo />
          </Grid>
        </Grid>
      </PageContainer>
    </Fragment>
  );
}
