import {
   PageContainer,
   PageTitle,
   WaveBackground,
} from 'components/layouts/Page/styled';
import Grid from '@material-ui/core/Grid';
import ToolMenu from './ToolMenu';
import BookMenu from './BookMenu';
import LayoutWrapper from 'components/wrappers/LayoutWrapper';

export default function Library() {
   return (
      <LayoutWrapper pageName="library" pageTitle="Library">
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Library</PageTitle>
            <Grid container spacing={2}>
               <Grid item xs={12}>
                  <ToolMenu />
               </Grid>
               <Grid item xs={12}>
                  <BookMenu />
               </Grid>
            </Grid>
         </PageContainer>
      </LayoutWrapper>
   );
}
