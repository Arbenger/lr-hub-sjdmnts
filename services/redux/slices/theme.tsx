import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppPaletteKey } from 'components/wrappers/ThemeWrapper/types';
import { applyKey } from 'components/wrappers/ThemeWrapper/utils';

interface ThemeState {
   current: AppPaletteKey;
}

const initialState: ThemeState = {
   current: 'blue',
};

const themeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      changePalette(state, action: PayloadAction<AppPaletteKey>) {
         state.current = action.payload;
         applyKey(action.payload);
      },
   },
});

export const { changePalette } = themeSlice.actions;
export default themeSlice.reducer;
