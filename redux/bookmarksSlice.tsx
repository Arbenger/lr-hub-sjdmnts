import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  selectedItem: number | null;
  itemModal: {
    isOpen: boolean;
  };
}

const initialState: InitialState = {
  selectedItem: null,
  itemModal: {
    isOpen: false,
  },
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setSelectedItem(state, action: PayloadAction<number | null>) {
      state.selectedItem = action.payload;
      state.itemModal.isOpen = true;
    },
    closeItemModal(state) {
      state.selectedItem = null;
      state.itemModal.isOpen = false;
    },
  },
});

export const { setSelectedItem, closeItemModal } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
