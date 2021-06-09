import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  bookId: string;
  bookTitle: string;
  copiesIds: string[];
}

const initialState: InitialState = {
  bookId: "",
  bookTitle: "",
  copiesIds: [],
};

const QRCodeGeneratorSlice = createSlice({
  name: "qrCodeGenerator",
  initialState,
  reducers: {
    setBook(state, action: PayloadAction<InitialState>) {
      state.bookId = action.payload.bookId;
      state.bookTitle = action.payload.bookTitle;
      state.copiesIds = action.payload.copiesIds;

      localStorage.setItem(
        "qrCodeGenerator_state",
        JSON.stringify({
          bookId: action.payload.bookId,
          bookTitle: action.payload.bookTitle,
          copiesIds: action.payload.copiesIds,
        })
      );
    },
    useStoredState(state) {
      const storedStateJSON = localStorage.getItem("qrCodeGenerator_state");
      if (storedStateJSON) {
        const storedState = JSON.parse(storedStateJSON);
        state.bookId = storedState.bookId;
        state.bookTitle = storedState.bookTitle;
        state.copiesIds = storedState.copiesIds;
      }
    },
  },
});

export const { setBook } = QRCodeGeneratorSlice.actions;
export default QRCodeGeneratorSlice.reducer;
