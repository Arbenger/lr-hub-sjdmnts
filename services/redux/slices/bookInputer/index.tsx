import {
   Data,
   BookInputerState,
   TriggerDialogPayload,
   TriggerPendingPayload,
} from './types';
import { uploadCover, uploadMetaData } from './thunks';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FULFILLED, NO_IMAGE } from 'utils/variables';

const initialState: BookInputerState = {
   data: {
      title: '',
      copies: 0,
      description: '',
      tmpPath: NO_IMAGE,
   },
   fetchedData: {
      bookId: '',
      bookTitle: '',
      copiesIds: [],
   },
   pendings: {
      uploadingMetaData: false,
      uploadingCover: false,
   },
   dialogs: {
      metaData: false,
      cover: false,
      print: false,
   },
};

const bookInputerSlice = createSlice({
   name: 'bookInputer',
   initialState,
   reducers: {
      setData(state, action: PayloadAction<Partial<Data>>) {
         Object.keys(action.payload).map(
            (key) => (state.data[key] = action.payload[key])
         );
      },
      clearData({ data }) {
         Object.keys(data).map((key) => {
            data[key] = typeof data[key] === 'number' ? 0 : '';
            if (key === 'tmpPath') data[key] = NO_IMAGE;
         });
      },
      triggerPending(state, action: PayloadAction<TriggerPendingPayload>) {
         const { pending, isPending } = action.payload;
         state.pendings[pending] = isPending;
      },
      triggerDialog(state, action: PayloadAction<TriggerDialogPayload>) {
         const { dialog, isOpen } = action.payload;
         state.dialogs[dialog] = isOpen;
      },
   },
   extraReducers: (builder) => {
      // UPLOAD METADATA THUNK
      builder.addCase(uploadMetaData.pending, (state) => {
         state.pendings.uploadingMetaData = true;
      });
      builder.addCase(uploadMetaData.fulfilled, (state, action) => {
         state.pendings.uploadingMetaData = false;

         if (action.payload.status === FULFILLED) {
            state.fetchedData = action.payload.data;
         }
      });
      builder.addCase(uploadMetaData.rejected, (state) => {
         state.pendings.uploadingMetaData = false;
      });

      // UPLOAD COVER THUNK
      builder.addCase(uploadCover.pending, (state) => {
         state.pendings.uploadingCover = true;
      });
      builder.addCase(uploadCover.fulfilled, (state) => {
         state.pendings.uploadingCover = false;
      });
      builder.addCase(uploadCover.rejected, (state) => {
         state.pendings.uploadingCover = false;
      });
   },
});

export const { setData, clearData, triggerPending, triggerDialog } =
   bookInputerSlice.actions;
export default bookInputerSlice.reducer;
