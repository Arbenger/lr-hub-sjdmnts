import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountState, TriggerDialogPayload } from './types';

const initialState: AccountState = {
   dialogs: {
      edit: {
         isOpen: false,
      },
      editFulfilled: {
         isOpen: false,
      },
      editRejected: {
         isOpen: false,
      },
      deactivate: {
         isOpen: false,
      },
      redirect: {
         isOpen: false,
      },
   },
};

const accountSlice = createSlice({
   name: 'account',
   initialState,
   reducers: {
      triggerDialog(
         { dialogs },
         { payload }: PayloadAction<TriggerDialogPayload>
      ) {
         Object.keys(payload.state).map((key) => {
            dialogs[payload.dialog][key] = payload.state[key];
         });
      },
   },
});

export const { triggerDialog } = accountSlice.actions;
export default accountSlice.reducer;
