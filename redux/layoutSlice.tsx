import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  drawer: {
    isOpen: boolean;
  };
}

type TriggerDrawer = "open" | "close" | "toggle";

const initialState: InitialState = {
  drawer: {
    isOpen: false,
  },
};

const layoutSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    triggerDrawer({ drawer }, action: PayloadAction<TriggerDrawer>) {
      if (action.payload === "open") drawer.isOpen = true;
      if (action.payload === "close") drawer.isOpen = false;
      if (action.payload === "toggle") drawer.isOpen = !drawer.isOpen;
    },
  },
});

export const { triggerDrawer } = layoutSlice.actions;
export default layoutSlice.reducer;
