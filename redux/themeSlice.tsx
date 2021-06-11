import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppPaletteKey } from 'components/layouts/ThemeSetter/types';
import { applyKey } from 'components/layouts/ThemeSetter/utils';

interface InitialState {
   appPalette: {
      current: AppPaletteKey;
   };
}

const initialState: InitialState = {
   appPalette: {
      current: 'blue',
   },
};

const themeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      changeAppPalette({ appPalette }, action: PayloadAction<AppPaletteKey>) {
         appPalette.current = action.payload;
         applyKey(action.payload);
      },
   },
});

export const { changeAppPalette } = themeSlice.actions;
export default themeSlice.reducer;
