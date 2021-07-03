import { Box, Typography } from '@material-ui/core';
import { useAppSelector } from 'services/redux/hooks';
import { selectMainBookDialog } from 'services/redux/selectors';

export default function BookDescription() {
   const { book } = useAppSelector(selectMainBookDialog);

   return (
      <Box>
         <Typography variant="h6">Description</Typography>
         <Typography>{book.description}</Typography>
      </Box>
   );
}
