import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppPaletteKey } from 'components/wrapper/ThemeWrapper/types';
import { applyKey } from 'components/wrapper/ThemeWrapper/utils';

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
