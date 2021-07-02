import { Paper, Box, Typography, makeStyles, Grid } from '@material-ui/core';
import { TagIcon, PageIcon, BorrowedBookIcon } from 'components/Icons';
import { useAppSelector } from 'services/redux/hooks';
import { selectMainBook } from 'services/redux/selectors';

export default function BookDetails() {
   const { book } = useAppSelector(selectMainBook);

   const classes = makeStyles(({ spacing, palette }) => ({
      root: {
         padding: spacing(3),
      },
      badgeContainer: {
         display: 'flex',
         flexWrap: 'wrap',
         justifyContent: 'flex-start',
      },
      badgeItem: {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'flex-start',
         color: 'white',
         backgroundColor: palette.grey[500],
         padding: spacing(1),
         paddingRight: spacing(2),
         borderRadius: spacing(3),
         marginRight: spacing(2),
         marginBottom: spacing(2),
      },
      badgeIcon: {
         width: 30,
         height: 30,
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         marginRight: spacing(0.5),
         fontSize: 20,
      },
   }))();

   return (
      <Paper className={classes.root}>
         <Grid container spacing={2}>
            <Grid item xs={12}>
               <Typography variant="h5">{book.title}</Typography>
            </Grid>

            <Grid item xs={12}>
               <Box className={classes.badgeContainer}>
                  <Box className={classes.badgeItem}>
                     <Box className={classes.badgeIcon}>
                        <TagIcon />
                     </Box>
                     <Typography variant="body2">Category</Typography>
                  </Box>

                  <Box className={classes.badgeItem}>
                     <Box className={classes.badgeIcon}>
                        <PageIcon />
                     </Box>
                     <Typography variant="body2">200 Pages</Typography>
                  </Box>

                  <Box className={classes.badgeItem}>
                     <Box className={classes.badgeIcon}>
                        <BorrowedBookIcon />
                     </Box>
                     <Typography variant="body2">20 Available Books</Typography>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </Paper>
   );
}
