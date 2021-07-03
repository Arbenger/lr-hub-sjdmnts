import { Box } from '@material-ui/core';
import { useAppSelector } from 'services/redux/hooks';
import { selectMainBookDialog } from 'services/redux/selectors';
import Image from 'next/image';

export default function BookCover() {
   const { book } = useAppSelector(selectMainBookDialog);

   return (
      <Box borderRadius={8} overflow="hidden">
         <Image
            src={book.coverURL}
            width="100%"
            height={125}
            layout="responsive"
            objectFit="cover"
            objectPosition="center top"
         />
      </Box>
   );
}
