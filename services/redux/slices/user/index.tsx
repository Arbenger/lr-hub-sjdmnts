import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deactivateUser, editUser } from './thunks';
import { UserState, Info } from './types';

const initialState: UserState = {
   info: {
      uid: '',
      email: '',
      displayName: '',
      occupation: '',
      registeredAt: Date.now().toString(),
      photoURL: '/images/no-profile-picture.png',
      provider: '',
   },
   thunks: {
      edit: {
         isPending: false,
      },
      deactivate: {
         isPending: false,
      },
   },
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setInfo(state, action: PayloadAction<Partial<Info>>) {
         Object.keys(action.payload).map(
            (key) => (state.info[key] = action.payload[key])
         );
      },
      clearInfo(state) {
         Object.keys(state.info).map((key) => {
            if (key === 'registeredAt') state.info[key] = Date.now().toString();
            else if (key === 'photoURL')
               state.info[key] = '/images/no-profile-picture.png';
            else state.info[key] = '';
         });
      },
   },
   extraReducers: (builder) => {
      const thunks = [
         { name: 'edit', action: editUser },
         { name: 'deactivate', action: deactivateUser },
      ];

      thunks.map((thunk) => {
         builder.addCase(thunk.action.pending, ({ thunks }) => {
            thunks[thunk.name].isPending = true;
         });
         builder.addCase(thunk.action.fulfilled, ({ thunks }) => {
            thunks[thunk.name].isPending = false;
         });
         builder.addCase(thunk.action.rejected, ({ thunks }) => {
            thunks[thunk.name].isPending = false;
         });
      });
   },
});

export const { setInfo, clearInfo } = userSlice.actions;
export default userSlice.reducer;
