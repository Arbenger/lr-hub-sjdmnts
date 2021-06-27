import { RootState } from './store';

export const selectTheme = (state: RootState) => state.theme;
export const selectPage = (state: RootState) => state.page;
export const selectDrawer = (state: RootState) => state.drawer;
export const selectQuickAccess = (state: RootState) => state.quickAccess;
export const selectUser = (state: RootState) => state.user;
export const selectAccount = (state: RootState) => state.account;
export const selectLibrary = (state: RootState) => state.library;
export const selectBookAdder = (state: RootState) => state.bookAdder;
