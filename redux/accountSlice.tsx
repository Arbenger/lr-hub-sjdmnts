import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  data: {
    displayName: string;
    email: string;
    occupation: string;
    registeredAt: string;
    photoURL: string;
    provider: string;
  };
  modal: {
    deactivateAccount: boolean;
  };
}

interface SetData {
  displayName: string;
  email: string;
  occupation: string;
  registeredAt: string;
  photoURL: string;
  provider: string;
}

interface TriggerModal {
  target: "deactivateAccount";
  isOpen: boolean;
}

const initialState: InitialState = {
  data: {
    displayName: "Loading",
    email: "Loading",
    occupation: "Loading",
    registeredAt: "Loading",
    photoURL: "Loading",
    provider: "Loading",
  },

  modal: {
    deactivateAccount: false,
  },
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<SetData>) {
      state.data = action.payload;
    },
    triggerModal({ modal }, action: PayloadAction<TriggerModal>) {
      modal[action.payload.target] = action.payload.isOpen;
    },
  },
});

export const { setData, triggerModal } = accountSlice.actions;
export default accountSlice.reducer;
