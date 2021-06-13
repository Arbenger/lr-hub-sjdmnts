import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LibraryState, SortBy, SortDirection, FilterBy, Book } from './types';
import { fetchBook } from './thunks';

const initialState: LibraryState = {
   sortBy: 'title',
   sortDirection: 'asc',
   filterBy: 'all',
   searchInput: '',
   books: [],
   isLoading: false,
};

const librarySlice = createSlice({
   name: 'library',
   initialState,
   reducers: {
      setSortBy(state, action: PayloadAction<SortBy>) {
         state.sortBy = action.payload;
      },
      setSortDirection(state, action: PayloadAction<SortDirection>) {
         state.sortDirection = action.payload;
      },
      setFilterBy(state, action: PayloadAction<FilterBy>) {
         state.filterBy = action.payload;
      },
      setSearchInput(state, action: PayloadAction<string>) {
         state.searchInput = action.payload;
      },
      setBooks(state, action: PayloadAction<Book[]>) {
         state.books = action.payload;
      },
      setIsLoading(state, action: PayloadAction<boolean>) {
         state.isLoading = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchBook.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(fetchBook.fulfilled, (state, action) => {
         const { status, payload } = action.payload;
         state.books = status === 'fulfilled' ? payload : [];
         state.isLoading = false;
      });
      builder.addCase(fetchBook.rejected, (state) => {
         state.isLoading = false;
      });
   },
});

export const {
   setSortBy,
   setSortDirection,
   setSearchInput,
   setFilterBy,
   setBooks,
   setIsLoading,
} = librarySlice.actions;
export default librarySlice.reducer;
