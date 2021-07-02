import {
   PageContainer,
   PageTitle,
   WaveBackground,
} from 'components/layouts/Page/styled';
import { Grid } from '@material-ui/core';

import LayoutWrapper from 'components/wrappers/LayoutWrapper';
import Informations from './Informations';
import Actions from './Actions';

export default function Account() {
   return (
      <LayoutWrapper pageName="account" pageTitle="Account">
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Account</PageTitle>
            <Grid container spacing={2}>
               <Grid item xs={12} sm={7}>
                  <Informations />
               </Grid>
               <Grid item xs={12} sm={5}>
                  <Actions />
               </Grid>
            </Grid>
         </PageContainer>
      </LayoutWrapper>
   );
}
