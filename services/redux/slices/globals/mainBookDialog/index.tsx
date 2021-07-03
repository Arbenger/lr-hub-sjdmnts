import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NO_IMAGE } from 'utils/variables';
import { Book } from '../../library/types';
import { MainBookDialogConfig, MainBookDialogState } from './type';
import { fetchBook } from './thunks';

const initialState: MainBookDialogState = {
   config: {
      isOpen: false,
      isLoading: false,
      targetBookId: '',
   },
   book: {
      id: '',
      title: 'Loading',
      description: 'Loading',
      dateAdded: 'Loading',
      coverURL: NO_IMAGE,
      statistics: {
         total: 0,
         available: 0,
         borrowed: 0,
         lost: 0,
      },
   },
};

const mainBookDialogSlice = createSlice({
   name: 'mainBookDialog',
   initialState,
   reducers: {
      setConfig(state, action: PayloadAction<Partial<MainBookDialogConfig>>) {
         Object.keys(action.payload).forEach((key) => {
            state.config[key] = action.payload[key];
         });
      },
      setBook(state, action: PayloadAction<Book>) {
         state.book = action.payload;
      },
      clearBook(state) {
         state.book = {
            id: '',
            title: 'Loading',
            description: 'Loading',
            dateAdded: 'Loading',
            coverURL: NO_IMAGE,
            statistics: {
               total: 0,
               available: 0,
               borrowed: 0,
               lost: 0,
            },
         };
      },
   },
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

export const { setConfig, setBook, clearBook } = mainBookDialogSlice.actions;
export default mainBookDialogSlice.reducer;
