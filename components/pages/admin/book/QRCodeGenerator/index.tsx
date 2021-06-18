import { ContentContainer, PrintButton } from './styled';
import { Grid, Box, Typography } from '@material-ui/core';
import { BiPrinter as PrintIcon } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { Query, BookChunks } from './types';
import { Fragment, useMemo } from 'react';
import Head from 'next/head';
import QRCodeItem from './components/QRCodeItem';
import _ from 'lodash';

export default function QRCodeGenerator() {
   const router = useRouter();

   const bookChunks = useMemo(() => {
      const { bookId, bookTitle, copiesIds } = router.query as unknown as Query;

      const bookCopies = copiesIds?.map((copyId) => ({
         copyId,
         bookId: bookId,
         bookTitle: bookTitle,
      }));
      return (_.chunk(bookCopies, 12) as unknown as BookChunks) || [];
   }, [router.query]);

   return (
      <Fragment>
         <Head>
            <title>LR Hub | QR Code Generator</title>
         </Head>

         <Box>
            <PrintButton
               color="primary"
               aria-label="print"
               onClick={() => {
                  document.title = router.query.bookTitle as string;
                  window.print();
               }}
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
      </Fragment>
   );
}
