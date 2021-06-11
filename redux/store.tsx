import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import layoutReducer from "./layoutSlice";
import libraryReducer from "./slices/library";
import pageReducer from "./pageSlice";
import accountReducer from "./accountSlice";
import bookDialogReducer from "./bookDialogSlice";
import qrCodeGeneratorReducer from "./qrCodeGeneratorSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    page: pageReducer,
    layout: layoutReducer,
    library: libraryReducer,
    account: accountReducer,
    bookDialog: bookDialogReducer,
    qrCodeGenerator: qrCodeGeneratorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
