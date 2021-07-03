import { makeStyles, Box, Paper, Typography } from '@material-ui/core';
import { Book } from 'services/redux/slices/library/types';
import { useAppDispatch } from 'services/redux/hooks';
import { setConfig as setMainBookDialogConfig } from 'services/redux/slices/globals/mainBookDialog';
import { fetchBook } from 'services/redux/slices/globals/mainBookDialog/thunks';
import Image from 'next/image';

interface Props {
   book: Book;
}

export default function BookSummary({ book }: Props) {
   const dispatch = useAppDispatch();

   const classes = makeStyles(({ transitions, shadows }) => ({
      root: {
         display: 'flex',
         flexDirection: 'column',
         overflow: 'hidden',
         cursor: 'pointer',
         transition: transitions.create('box-shadow'),
         '&:hover': {
            boxShadow: shadows[6],
         },
      },
      title: {
         textOverflow: 'ellipsis',
         whiteSpace: 'nowrap',
         overflow: 'hidden',
      },
   }))();

   function handleClick() {
      dispatch(
         setMainBookDialogConfig({
            isOpen: true,
            targetBookId: book.id,
         })
      );
      dispatch(fetchBook());
   }

   return (
      <Paper className={classes.root} onClick={handleClick}>
         <Box bgcolor="#D6D6D6">
            <Image
               src={book.coverURL}
               width="100%"
               height="auto"
               layout="responsive"
               objectFit="cover"
               objectPosition="center top"
            />
         </Box>

         <Box padding={2}>
            <Typography variant="h6" className={classes.title}>
               {book.title}
            </Typography>
            <Typography>
               {book.statistics.available} available copies
            </Typography>
         </Box>
      </Paper>
   );
}
