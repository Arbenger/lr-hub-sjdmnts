import {
   PageContainer,
   PageTitle,
   WaveBackground,
} from 'components/layouts/Page/styled';
import { Grid } from '@material-ui/core';
import { Fragment } from 'react';
import FeatureOne from './components/FeatureOne';
import FeatureThree from './components/FeatureThree';
import dynamic from 'next/dynamic';

const FeatureTwo = dynamic(() => import('./components/FeatureTwo'), {
   ssr: false,
});

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
