import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountState, TriggerDialogPayload } from './types';

const initialState: AccountState = {
   dialogs: {
      edit: false,
      editFulfilled: false,
      editRejected: false,
      deactivate: false,
      deactivateFulfilled: false,
      deactivateRejected: false,
   },
};

const accountSlice = createSlice({
   name: 'account',
   initialState,
   reducers: {
      triggerDialog(state, action: PayloadAction<TriggerDialogPayload>) {
         const { dialog, isOpen } = action.payload;
         state.dialogs[dialog] = isOpen;
      },
   },
});

export const { triggerDialog } = accountSlice.actions;
export default accountSlice.reducer;
