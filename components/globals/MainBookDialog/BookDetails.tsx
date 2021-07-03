import {
   Box,
   Typography,
   Chip,
   Grid,
   makeStyles,
   Table,
   TableBody,
   TableRow,
   TableCell,
   TableContainer,
} from '@material-ui/core';
import { useAppSelector } from 'services/redux/hooks';
import { selectMainBookDialog } from 'services/redux/selectors';

export default function BookDetails() {
   const { book } = useAppSelector(selectMainBookDialog);

   const classes = makeStyles(({ spacing }) => ({
      tags: {
         width: '100%',
         display: 'flex',
         alignItems: 'flex-start',
         overflowX: 'auto',
         '&::-webkit-scrollbar': {
            display: 'none',
         },
         '& .MuiChip-root': {
            marginRight: spacing(1),
         },
      },
   }))();

   return (
      <Grid container spacing={2}>
         <Grid item xs={12}>
            <Typography variant="h5">{book.title}</Typography>
         </Grid>

         <Grid item xs={12}>
            <Box className={classes.tags}>
               <Chip label="Tag 1" />
               <Chip label="Tag 2" />
               <Chip label="Tag 3" />
               <Chip label="Tag 4" />
               <Chip label="Tag 5" />
            </Box>
         </Grid>

         <Grid item xs={12}>
            <Typography variant="h6">Details</Typography>

            <TableContainer>
               <Table>
                  <TableBody>
                     <TableRow>
                        <TableCell width="40%">Author</TableCell>
                        <TableCell>Unknown</TableCell>
                     </TableRow>

                     <TableRow>
                        <TableCell>Publisher</TableCell>
                        <TableCell>Unknown</TableCell>
                     </TableRow>

                     <TableRow>
                        <TableCell>Year Published</TableCell>
                        <TableCell>Unknown</TableCell>
                     </TableRow>

                     <TableRow>
                        <TableCell>Available Copies</TableCell>
                        <TableCell>{book.statistics.available}</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </TableContainer>
         </Grid>
      </Grid>
   );
}
