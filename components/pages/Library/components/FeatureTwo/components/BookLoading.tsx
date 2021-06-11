import { Container } from './BookSummary/styled';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

export default function BookLoading() {
   return (
      <Container>
         <Grid container spacing={2}>
            <Grid item xs={5}>
               <Box overflow="hidden" borderRadius={5}>
                  <Skeleton variant="rect" width="100%" height={150} />
               </Box>
            </Grid>
            <Grid item xs={7}>
               <Skeleton variant="text" />
               <Skeleton variant="text" />
            </Grid>
            <Grid item xs={12}>
               <Skeleton variant="text" width="50%" />
               <Skeleton variant="text" />
               <Skeleton variant="text" />
               <Skeleton variant="text" />
            </Grid>
         </Grid>
      </Container>
   );
}
