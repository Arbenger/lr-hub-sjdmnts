import { Paper, Box } from '@material-ui/core';
import { useAppSelector } from 'services/redux/hooks';
import { selectMainBook } from 'services/redux/selectors';
import Image from 'next/image';

export default function BookCover() {
   const { book } = useAppSelector(selectMainBook);

   return (
      <Paper>
         <Box padding={2}>
            <Image
               src={book.coverURL}
               width="100%"
               height="auto"
               layout="responsive"
               objectFit="cover"
               objectPosition="center top"
            />
         </Box>
      </Paper>
   );
}
