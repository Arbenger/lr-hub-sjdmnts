import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import layoutReducer from "./layoutSlice";
import libraryReducer from "./librarySlice";
import pageReducer from "./pageSlice";
import bookmarksReducer from "./bookmarksSlice";
import accountReducer from "./accountSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    page: pageReducer,
    layout: layoutReducer,
    library: libraryReducer,
    bookmarks: bookmarksReducer,
    account: accountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
