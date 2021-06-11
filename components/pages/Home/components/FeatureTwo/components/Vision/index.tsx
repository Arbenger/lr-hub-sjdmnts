import { Grid, Hidden } from '@material-ui/core';
import { RootContainer } from '../styled';
import Content from './Content';
import Display from './Display';

export default function Vision() {
   return (
      <RootContainer>
         <Grid container spacing={2}>
            <Hidden smUp>
               <Grid item xs={12}>
                  <Display />
               </Grid>
            </Hidden>

            <Grid item xs={12} sm={8} className="flex-center">
               <Content />
            </Grid>

            <Hidden xsDown>
               <Grid item xs={12} sm={4}>
                  <Display />
               </Grid>
            </Hidden>
         </Grid>
      </RootContainer>
   );
}
