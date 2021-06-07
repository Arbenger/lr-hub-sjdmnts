import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Tab = 0 | 1 | 2 | 3;
type Trigger = "open" | "close";

interface InitialState {
  isOpen: boolean;
  currentTab: Tab;
}

const initialState: InitialState = {
  isOpen: false,
  currentTab: 0,
};

const bookDialogSlice = createSlice({
  name: "bookDialogSlice",
  initialState,
  reducers: {
    triggerDialog(state, action: PayloadAction<Trigger>) {
      state.isOpen = action.payload === "open";
    },
    changeTab(state, action: PayloadAction<Tab>) {
      state.currentTab = action.payload;
    },
  },
});

export const { triggerDialog, changeTab } = bookDialogSlice.actions;
export default bookDialogSlice.reducer;
