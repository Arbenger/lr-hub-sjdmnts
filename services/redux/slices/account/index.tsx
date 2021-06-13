import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAccountInfoByUID, fetchDeactivateAccountByUID } from './thunks';
import { AccountState, TriggerDialogPayload } from './types';

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
      clearAccountInfo(state) {
         Object.keys(state.info).map((key) => (state.info[key] = ''));
      },
      triggerDialog({ dialogs }, action: PayloadAction<TriggerDialogPayload>) {
         const { target, state } = action.payload;
         Object.keys(state).map((key) => {
            dialogs[target][key] = state[key];
         });
      },
   },
   extraReducers: (builder) => {
      // FETCH DEACTIVATE ACCOUNT BY UID
      builder.addCase(fetchDeactivateAccountByUID.pending, (state) => {
         state.dialogs.deactivateAccount.isLoading = true;
      });
      builder.addCase(fetchDeactivateAccountByUID.fulfilled, (state) => {
         state.dialogs.deactivateAccount.isLoading = false;
      });
      builder.addCase(fetchDeactivateAccountByUID.rejected, (state) => {
         state.dialogs.deactivateAccount.isLoading = false;
      });

      // FETCH ACCOUNT BY UID
      builder.addCase(fetchAccountInfoByUID.fulfilled, (state, action) => {
         if (action.payload.status === 'fulfilled') {
            state.info = action.payload.accountInfo;
         }
      });
   },
});

export const { triggerDialog, clearAccountInfo } = accountSlice.actions;
export default accountSlice.reducer;
