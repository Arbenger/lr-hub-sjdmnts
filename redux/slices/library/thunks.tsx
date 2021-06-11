import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'redux/store';

export const fetchBook = createAsyncThunk(
   'library/searchStatus',
   async (none, thunkAPI) => {
      const {
         library: { searchInput, sortBy, sortDirection, filterBy },
      } = thunkAPI.getState() as RootState;

      const response = await axios({
         url: '/api/book/getter',
         method: 'POST',
         params: {
            searchInput,
            sortBy,
            sortDirection,
            filterBy,
            secretAPIAccessKey: process.env.secretAPIAccessKey,
         },
      });

      if (response.data.status === 'failure') return { books: [] };

      return { books: response.data.books };
   }
);
