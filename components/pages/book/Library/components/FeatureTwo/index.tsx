import { Grid, Box } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectLibrary } from 'services/redux/selectors';
import { setBooks, setIsLoading } from 'services/redux/slices/library';
import { useCallback, useEffect } from 'react';
import axios from 'axios';
import BookSummary from './components/BookSummary';
import BookLoading from './components/BookLoading';
import BookEmpty from './components/BookEmpty';
import { fetchBook } from 'services/redux/slices/library/thunks';

export default function FeatureTwo() {
   const dispatch = useAppDispatch();
   const state = useAppSelector(selectLibrary);

   // const fetchBooks = useCallback(async () => {
   //   try {
   //     dispatch(setIsLoading(true));

   //     const response = await axios({
   //       url: "/api/book/getter",
   //       method: "POST",
   //       params: {
   //         secretAPIAccessKey: process.env.secretAPIAccessKey,
   //       },
   //     });
   //     const { status, books } = response.data;

   //     if (books.length && status === "success")
   //       return dispatch(setBooks(response.data.books));

   //     throw "No books retrieved.";
   //   } catch (error) {
   //     console.log(error);
   //   } finally {
   //     dispatch(setIsLoading(false));
   //   }
   // }, []);

   useEffect(() => {
      if (!state.books.length) dispatch(fetchBook());
   }, []);

   const renderBookList = () => {
      return state.books.map((book) => (
         <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
            <BookSummary book={book} />
         </Grid>
      ));
   };

   const renderLoaderList = () => {
      return Array(4)
         .fill(null)
         .map((value, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
               <BookLoading />
            </Grid>
         ));
   };

   const renderEmptyBook = () => (
      <Grid item xs={12} sm={6} md={4} lg={3}>
         <BookEmpty />
      </Grid>
   );

   return (
      <Box>
         <Grid container spacing={2}>
            {state.isLoading
               ? renderLoaderList()
               : state.books.length
               ? renderBookList()
               : renderEmptyBook()}
         </Grid>
      </Box>
   );
}
