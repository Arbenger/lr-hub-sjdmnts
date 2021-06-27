import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DrawerState {
   isOpen: boolean;
}

type TriggerDrawerPayload = 'open' | 'close' | 'toggle';

const initialState: DrawerState = {
   isOpen: false,
};

const drawerSlice = createSlice({
   name: 'drawer',
   initialState,
   reducers: {
      triggerDrawer(state, action: PayloadAction<TriggerDrawerPayload>) {
         if (action.payload === 'open') state.isOpen = true;
         if (action.payload === 'close') state.isOpen = false;
         if (action.payload === 'toggle') state.isOpen = !state.isOpen;
      },
   },
});

export const { triggerDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
