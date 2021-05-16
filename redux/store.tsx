import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import layoutReducer from "./layoutSlice";

export const store = configureStore({
  reducer: { theme: themeReducer, layout: layoutReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
