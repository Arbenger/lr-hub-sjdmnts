import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface quickAccess {
   isOpen: boolean;
}

type TriggerQuickAccessPayload = 'open' | 'close' | 'toggle';

const initialState: quickAccess = {
   isOpen: false,
};

const quickAccessSlice = createSlice({
   name: 'quickAccess',
   initialState,
   reducers: {
      triggerQuickAccess(
         state,
         action: PayloadAction<TriggerQuickAccessPayload>
      ) {
         if (action.payload === 'open') state.isOpen = true;
         if (action.payload === 'close') state.isOpen = false;
         if (action.payload === 'toggle') state.isOpen = !state.isOpen;
      },
   },
});

export const { triggerQuickAccess } = quickAccessSlice.actions;
export default quickAccessSlice.reducer;
