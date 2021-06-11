import { Container, WaveBackground, Divider } from './styled';
import { Grid, Hidden } from '@material-ui/core';
import { Fragment } from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectLayout } from 'redux/selectors';
import ColumnOne from './components/ColumnOne';
import ColumnTwo from './components/ColumnTwo';
import ColumnThree from './components/ColumnThree';
import ColumnFour from './components/ColumnFour';

export default function FeatureOne() {
   const { drawer } = useAppSelector(selectLayout);
   return (
      <Fragment>
         <WaveBackground />
         <Container>
            <Grid container>
               <Grid item lg={1} />

               <Grid item xs={12} sm={12} md={drawer.isOpen ? 12 : 4} lg={4}>
                  <ColumnOne />
                  <Hidden mdUp>
                     <Divider />
                  </Hidden>
               </Grid>

               <Grid item xs={6} sm={4} md={drawer.isOpen ? 4 : 2} lg={2}>
                  <ColumnTwo />
                  <Hidden smUp>
                     <Divider />
                  </Hidden>
               </Grid>

               <Grid item xs={6} sm={4} md={drawer.isOpen ? 4 : 2} lg={2}>
                  <ColumnThree />
               </Grid>

               <Grid item xs={12} sm={4} md={drawer.isOpen ? 4 : 3} lg={3}>
                  <ColumnFour />
               </Grid>
            </Grid>
         </Container>
      </Fragment>
   );
}
