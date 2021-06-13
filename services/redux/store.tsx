import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import layoutReducer from './layoutSlice';
import libraryReducer from './slices/library';
import pageReducer from './pageSlice';
import accountReducer from './slices/account';
import bookDialogReducer from './bookDialogSlice';
import bookInputerReducer from './slices/bookInputer';

export const store = configureStore({
   reducer: {
      theme: themeReducer,
      page: pageReducer,
      layout: layoutReducer,
      library: libraryReducer,
      account: accountReducer,
      bookDialog: bookDialogReducer,
      bookInputer: bookInputerReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
