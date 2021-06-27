import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme';
import pageReducer from './slices/page';
import drawerReducer from './slices/drawer';
import quickAccessReducer from './slices/quickAccess';
import userReducer from './slices/user';
import accountReducer from './slices/account';
import libraryReducer from './slices/library';
import bookAdderReducer from './slices/bookAdder';

export const store = configureStore({
   reducer: {
      theme: themeReducer,
      page: pageReducer,
      drawer: drawerReducer,
      quickAccess: quickAccessReducer,
      user: userReducer,
      account: accountReducer,
      library: libraryReducer,
      bookAdder: bookAdderReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
