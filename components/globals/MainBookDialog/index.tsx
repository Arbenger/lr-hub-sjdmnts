import { Dialog, DialogContent, Grid, Box } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectMainBookDialog } from 'services/redux/selectors';
import {
   clearBook,
   setConfig,
} from 'services/redux/slices/globals/mainBookDialog';

import BookCover from './BookCover';
import BookDetails from './BookDetails';
import BookDescription from './BookDescription';
import Actions from './Actions';

export default function MainBookDialog() {
   const dispatch = useAppDispatch();

   const { config } = useAppSelector(selectMainBookDialog);

   function handleClose() {
      dispatch(
         setConfig({
            isOpen: false,
         })
      );
      setTimeout(() => dispatch(clearBook()), 500);
   }

   return (
      <Dialog
         open={config.isOpen}
         onClose={handleClose}
         maxWidth="md"
         fullWidth
      >
         <DialogContent>
            <Box paddingBottom={2}>
               <Grid container spacing={2}>
                  <Grid item xs={12} sm={5} md={4}>
                     <BookCover />
                  </Grid>

                  <Grid item xs={12} sm={7} lg={8}>
                     <BookDetails />
                  </Grid>

                  <Grid item xs={12}>
                     <BookDescription />
                  </Grid>

                  <Grid item xs={12}>
                     <Actions />
                  </Grid>
               </Grid>
            </Box>
         </DialogContent>
      </Dialog>
   );
}
