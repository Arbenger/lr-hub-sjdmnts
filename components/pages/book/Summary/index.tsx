import {
   WaveBackground,
   PageContainer,
   PageTitle,
} from 'components/layouts/Page/styled';
import { Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import FeatureOne from './components/FeatureOne';
import FeatureTwo from './components/FeatureTwo';

export default function BookSummary() {
   const router = useRouter();

   return (
      <Fragment>
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Book Summary</PageTitle>

            <Grid container spacing={2}>
               <Grid item xs={12} md={4}>
                  <FeatureOne />
               </Grid>

               <Grid item xs={12} md={8}>
                  <FeatureTwo />
               </Grid>
            </Grid>
         </PageContainer>
      </Fragment>
   );
}
