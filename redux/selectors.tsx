import { RootState } from "./store";

export const selectTheme = (state: RootState) => state.theme;
export const selectLayout = (state: RootState) => state.layout;
export const selectLibrary = (state: RootState) => state.library;
export const selectPage = (state: RootState) => state.page;
export const selectBookmarks = (state: RootState) => state.bookmarks;
