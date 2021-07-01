import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooks } from './thunks';
import { LibraryState, Book, LibraryConfig } from './types';
import { filterBooksBySearchInput, filterBooksBySort } from './utils';

const initialState: LibraryState = {
   config: {
      sortBy: 'title',
      sortDirection: 'asc',
      filterBy: 'all',
      searchInput: '',
      isLoading: false,
   },
   books: [],
   filteredBooks: [],
};

const librarySlice = createSlice({
   name: 'library',
   initialState,
   reducers: {
      setConfig(state, action: PayloadAction<Partial<LibraryConfig>>) {
         Object.keys(action.payload).forEach((key) => {
            state.config[key] = action.payload[key];
         });
      },
      setBooks(state, action: PayloadAction<Book[]>) {
         state.books = action.payload;
      },
      filterBooks(state) {
         const { sortBy, sortDirection, searchInput } = state.config;

         let filtered = [];

         filtered = filterBooksBySearchInput(state.books, searchInput);
         filtered = filterBooksBySort(filtered, sortBy, sortDirection);

         state.filteredBooks = filtered;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchBooks.pending, (state) => {
         state.config.isLoading = true;
      });
      builder.addCase(fetchBooks.rejected, (state) => {
         state.config.isLoading = false;
      });
      builder.addCase(fetchBooks.fulfilled, (state, action) => {
         state.config.isLoading = false;
         state.books = action.payload;
      });
   },
});

export const { setConfig, setBooks, filterBooks } = librarySlice.actions;
export default librarySlice.reducer;
