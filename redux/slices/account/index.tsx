import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDeactivateAccount } from './thunks';
import { AccountInfo, AccountState, TriggerDialogPayload } from './types';

const initialState: AccountState = {
   info: {
      uid: '',
      email: '',
      displayName: '',
      occupation: '',
      registeredAt: '',
      photoURL: '',
      provider: '',
   },
   dialogs: {
      deactivateAccount: {
         isOpen: false,
         isLoading: false,
      },
      editAccount: {
         isOpen: false,
         isLoading: false,
      },
      redirect: {
         isOpen: false,
         isLoading: false,
      },
   },
};

const accountSlice = createSlice({
   name: 'account',
   initialState,
   reducers: {
      setInfo(state, action: PayloadAction<AccountInfo>) {
         state.info = action.payload;
      },
      triggerDialog({ dialogs }, action: PayloadAction<TriggerDialogPayload>) {
         const { target, state } = action.payload;
         Object.keys(state).map((key) => {
            dialogs[target][key] = state[key];
         });
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchDeactivateAccount.pending, (state) => {
         state.dialogs.deactivateAccount.isLoading = true;
      });
      builder.addCase(fetchDeactivateAccount.fulfilled, (state) => {
         state.dialogs.deactivateAccount.isLoading = false;
      });
      builder.addCase(fetchDeactivateAccount.rejected, (state) => {
         state.dialogs.deactivateAccount.isLoading = false;
      });
   },
});

export const { setInfo, triggerDialog } = accountSlice.actions;
export default accountSlice.reducer;
