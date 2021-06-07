import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import layoutReducer from "./layoutSlice";
import libraryReducer from "./librarySlice";
import pageReducer from "./pageSlice";
import accountReducer from "./accountSlice";
import bookDialogReducer from "./bookDialogSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    page: pageReducer,
    layout: layoutReducer,
    library: libraryReducer,
    account: accountReducer,
    bookDialog: bookDialogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
