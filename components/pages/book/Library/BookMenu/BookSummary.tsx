import { makeStyles, Box, Paper, Typography } from '@material-ui/core';
import { Book } from 'services/redux/slices/library/types';
import Image from 'next/image';

interface Props {
   book: Book;
}

export default function BookSummary({ book }: Props) {
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

   return (
      <Paper className={classes.root}>
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
