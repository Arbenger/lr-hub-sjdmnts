import { RootState } from "./store";

export const selectTheme = (state: RootState) => state.theme;
export const selectLayout = (state: RootState) => state.layout;
export const selectLibrary = (state: RootState) => state.library;
export const selectPage = (state: RootState) => state.page;
export const selectAccount = (state: RootState) => state.account;
export const selectBookDialog = (state: RootState) => state.bookDialog;
export const selectQRCodeGenerator = (state: RootState) =>
  state.qrCodeGenerator;
