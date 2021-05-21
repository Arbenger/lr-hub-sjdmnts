import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import layoutReducer from "./layoutSlice";
import libraryReducer from "./librarySlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    layout: layoutReducer,
    library: libraryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
