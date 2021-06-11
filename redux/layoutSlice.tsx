import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
   drawer: {
      isOpen: boolean;
   };
   quickAccess: {
      isOpen: boolean;
   };
}

type Action = 'open' | 'close' | 'toggle';

const initialState: InitialState = {
   drawer: {
      isOpen: false,
   },
   quickAccess: {
      isOpen: false,
   },
};

const layoutSlice = createSlice({
   name: 'layout',
   initialState,
   reducers: {
      triggerDrawer({ drawer }, action: PayloadAction<Action>) {
         if (action.payload === 'open') drawer.isOpen = true;
         if (action.payload === 'close') drawer.isOpen = false;
         if (action.payload === 'toggle') drawer.isOpen = !drawer.isOpen;
      },
      triggerQuickAccess({ quickAccess }, action: PayloadAction<Action>) {
         if (action.payload === 'open') quickAccess.isOpen = true;
         if (action.payload === 'close') quickAccess.isOpen = false;
         if (action.payload === 'toggle')
            quickAccess.isOpen = !quickAccess.isOpen;
      },
   },
});

export const { triggerDrawer, triggerQuickAccess } = layoutSlice.actions;
export default layoutSlice.reducer;
