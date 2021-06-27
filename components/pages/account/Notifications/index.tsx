import {
   WaveBackground,
   PageContainer,
   PageTitle,
} from 'components/layouts/Page/styled';
import { Grid } from '@material-ui/core';
import FeatureOne from './components/FeatureOne';
import FeatureTwo from './components/FeatureTwo';
import LayoutWrapper from 'components/wrappers/LayoutWrapper';

export default function Notifications() {
   return (
      <LayoutWrapper pageName="notifications" pageTitle="Notification">
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Notifications</PageTitle>
            <Grid container spacing={2}>
               <Grid item xs={12} md={6}>
                  <FeatureOne />
               </Grid>
               <Grid item xs={12} md={6}>
                  <FeatureTwo />
               </Grid>
            </Grid>
         </PageContainer>
      </LayoutWrapper>
   );
}
