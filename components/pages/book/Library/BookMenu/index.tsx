import { Grid, Box } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { useEffect } from 'react';
import { selectLibrary } from 'services/redux/selectors';
import { fetchBooks } from 'services/redux/slices/library/thunks';
import { filterBooks } from 'services/redux/slices/library';

import BookSummary from './BookSummary';
import BookLoading from './BookLoading';
import BookEmpty from './BookEmpty';

export default function FeatureTwo() {
   const dispatch = useAppDispatch();
   const { config, books, filteredBooks } = useAppSelector(selectLibrary);

   useEffect(() => {
      (async () => {
         await dispatch(fetchBooks());
         dispatch(filterBooks());
      })();
   }, []);

   const renderBookList = () => {
      return filteredBooks.map((book) => (
         <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
            <BookSummary book={book} />
         </Grid>
      ));
   };

   const renderLoader = () => {
      return (
         <Grid item xs={12} sm={6} md={4} lg={3}>
            <BookLoading />
         </Grid>
      );
   };

   const renderEmpty = () => (
      <Grid item xs={12} sm={6} md={4} lg={3}>
         <BookEmpty />
      </Grid>
   );

   return (
      <Box>
         <Grid container spacing={2}>
            {config.isLoading
               ? renderLoader()
               : filteredBooks.length
               ? renderBookList()
               : renderEmpty()}
         </Grid>
      </Box>
   );
}
