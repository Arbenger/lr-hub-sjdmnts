import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NO_DESCRIPTION, NO_IMAGE } from 'utils/variables';
import { fetchBook } from './thunks';
import { MainBookState } from './types';

const initialState: MainBookState = {
   book: {
      id: '',
      title: '',
      description: NO_DESCRIPTION,
      coverURL: NO_IMAGE,
      dateAdded: '',
      statistics: {
         total: 0,
         available: 0,
         borrowed: 0,
         lost: 0,
      },
   },
   config: {
      isLoading: false,
   },
};

const mainBookSlice = createSlice({
   name: 'mainBook',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchBook.pending, (state) => {
         state.config.isLoading = true;
      });
      builder.addCase(fetchBook.rejected, (state) => {
         state.config.isLoading = false;
      });
      builder.addCase(fetchBook.fulfilled, (state, action) => {
         state.config.isLoading = false;
         state.book = action.payload;
      });
   },
});

export const {} = mainBookSlice.actions;
export default mainBookSlice.reducer;
