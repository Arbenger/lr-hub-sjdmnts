import {
   PageContainer,
   PageTitle,
   WaveBackground,
} from 'components/layouts/Page/styled';
import { Grid } from '@material-ui/core';

import FeatureOne from './components/FeatureOne';
import FeatureTwo from './components/FeatureTwo';
import LayoutWrapper from 'components/wrappers/LayoutWrapper';

export default function Account() {
   return (
      <LayoutWrapper pageName="account" pageTitle="Account">
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Account</PageTitle>

            <Grid container spacing={2}>
               <Grid item xs={12} sm={7}>
                  <FeatureOne />
               </Grid>
               <Grid item xs={12} sm={5}>
                  <FeatureTwo />
               </Grid>
            </Grid>
         </PageContainer>
      </LayoutWrapper>
   );
}
