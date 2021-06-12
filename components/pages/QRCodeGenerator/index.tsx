import { ContentContainer, PrintButton } from './styled';
import { Grid, Box, Typography } from '@material-ui/core';
import { BiPrinter as PrintIcon } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { Query, BookChunks } from './types';
import { useMemo } from 'react';
import QRCodeItem from './components/QRCodeItem';
import _ from 'lodash';

export default function QRCodeGenerator() {
   const router = useRouter();

   const bookChunks = useMemo(() => {
      const { bookId, bookTitle, idOfCopies } =
         router.query as unknown as Query;

      const bookCopies = idOfCopies?.map((copyId) => ({
         copyId,
         bookId: bookId,
         bookTitle: bookTitle,
      }));
      return (_.chunk(bookCopies, 12) as unknown as BookChunks) || [];
   }, [router.query]);

   return (
      <Box>
         <PrintButton
            color="primary"
            aria-label="print"
            onClick={() => window.print()}
         >
            <PrintIcon />
         </PrintButton>

         {bookChunks.map((bookCopies, index) => (
            <ContentContainer key={index}>
               <Typography>{router.query.bookTitle}</Typography>
               <Grid container spacing={2}>
                  {bookCopies.map((bookCopy) => (
                     <Grid item key={bookCopy.copyId} xs={4}>
                        <QRCodeItem
                           copyId={bookCopy.copyId}
                           bookId={bookCopy.bookId}
                           bookTitle={bookCopy.bookTitle}
                        />
                     </Grid>
                  ))}
               </Grid>
            </ContentContainer>
         ))}
      </Box>
   );
}
