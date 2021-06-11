import {
   PageContainer,
   PageTitle,
   WaveBackground,
} from 'components/layouts/Page/styled';
import { Grid } from '@material-ui/core';
import { Fragment } from 'react';
import FeatureOne from './components/FeatureOne';
import FeatureTwo from './components/FeatureTwo';
import FeatureThree from './components/FeatureThree';

export default function Dashboard() {
   return (
      <Fragment>
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Dashboard</PageTitle>
            <Grid container spacing={2}>
               <Grid item xs={12}>
                  <FeatureOne />
               </Grid>
               <Grid item xs={12}>
                  <FeatureTwo />
               </Grid>
               <Grid item xs={12}>
                  <FeatureThree />
               </Grid>
            </Grid>
         </PageContainer>
      </Fragment>
   );
}
