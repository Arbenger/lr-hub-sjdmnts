import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageState {
   name: string;
   title: string;
}

interface SetPagePayload {
   name: string;
   title: string;
}

const initialState: PageState = {
   name: '',
   title: '',
};

const pageSlice = createSlice({
   name: 'page',
   initialState,
   reducers: {
      setPage(state, action: PayloadAction<SetPagePayload>) {
         state.name = action.payload.name;
         state.title = action.payload.title;
      },
   },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
