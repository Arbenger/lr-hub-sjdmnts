import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'services/redux/store';
import signToken from 'utils/jwt/signToken';
import axios from 'axios';

export const fetchBook = createAsyncThunk(
   'library/searchStatus',
   async (none, thunkAPI) => {
      const { library } = thunkAPI.getState() as RootState;
      const { searchInput, sortBy, sortDirection, filterBy } = library;

      const response = await axios({
         url: '/api/book/getter',
         method: 'POST',
         params: {
            token: signToken({
               sortBy,
               filterBy,
               searchInput,
               sortDirection,
            }),
         },
      });

      return response.data;
   }
);
