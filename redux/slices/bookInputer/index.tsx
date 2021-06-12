import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookInputerState, FetchedData, TriggerDialogPayload } from './types';
import { fetchInputBook } from './thunks';

const initialState: BookInputerState = {
   title: '',
   copies: 0,
   description: '',
   isLoading: false,
   dialogs: {
      proceed: {
         isOpen: false,
      },
      print: {
         isOpen: false,
      },
   },
   fetchedData: {
      bookId: '',
      bookTitle: '',
      idOfCopies: [],
   },
};

const bookInputerSlice = createSlice({
   name: 'bookInputer',
   initialState,
   reducers: {
      setTitle(state, action: PayloadAction<string>) {
         state.title = action.payload;
      },
      setCopies(state, action: PayloadAction<number>) {
         state.copies = action.payload;
      },
      setDescription(state, action: PayloadAction<string>) {
         state.description = action.payload;
      },
      triggerDialog(state, { payload }: PayloadAction<TriggerDialogPayload>) {
         const { target, action } = payload;
         state.dialogs[target].isOpen = action === 'open';
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchInputBook.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(fetchInputBook.fulfilled, (state, action) => {
         state.title = '';
         state.description = '';
         state.copies = 0;
         state.isLoading = false;
         state.dialogs.print.isOpen = true;
         state.fetchedData = action.payload as FetchedData;
      });
      builder.addCase(fetchInputBook.rejected, (state) => {
         state.isLoading = false;
      });
   },
});

export const { setTitle, setCopies, setDescription, triggerDialog } =
   bookInputerSlice.actions;
export default bookInputerSlice.reducer;
