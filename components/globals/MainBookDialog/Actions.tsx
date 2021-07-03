import { Box, Chip, Avatar, makeStyles, Typography } from '@material-ui/core';
import { UnbookmarkedStateIcon, EditIcon, DeleteIcon } from 'components/Icons';

export default function Actions() {
   const classes = makeStyles(({ spacing }) => ({
      actions: {
         display: 'flex',
         flexWrap: 'wrap',
         '& .MuiChip-root': {
            marginRight: spacing(1),
         },
      },
   }))();

   return (
      <Box>
         <Typography variant="h6">Actions</Typography>

         <Box className={classes.actions}>
            <Chip
               color="primary"
               variant="outlined"
               label="Bookmark"
               clickable
               avatar={
                  <Avatar>
                     <UnbookmarkedStateIcon />
                  </Avatar>
               }
            />

            <Chip
               color="primary"
               variant="outlined"
               label="Edit"
               clickable
               avatar={
                  <Avatar>
                     <EditIcon />
                  </Avatar>
               }
            />

            <Chip
               color="primary"
               variant="outlined"
               label="Delete"
               clickable
               avatar={
                  <Avatar>
                     <DeleteIcon />
                  </Avatar>
               }
            />
         </Box>
      </Box>
   );
}
