import {
   PageContainer,
   PageTitle,
   WaveBackground,
} from 'components/layouts/Page/styled';
import { Grid } from '@material-ui/core';
import FeatureOne from './components/FeatureOne';
import FeatureTwo from './components/FeatureTwo';
import LayoutWrapper from 'components/wrappers/LayoutWrapper';

export default function Library() {
   return (
      <LayoutWrapper pageName="library" pageTitle="Library">
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
      </LayoutWrapper>
   );
}
