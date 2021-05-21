import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterByValue } from "components/pages/Library/FeatureOne/components/FilterBy/types";
import {
  SortByValue,
  SortDirectionValue,
} from "components/pages/Library/FeatureOne/components/SortBy/types";

interface InitialState {
  sortBy: SortByValue;
  sortDirection: SortDirectionValue;
  filterBy: FilterByValue;
  searchInput: string;
}

const initialState: InitialState = {
  sortBy: "title",
  sortDirection: "ascending",
  filterBy: "all",
  searchInput: "",
};

const librarySlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setSortBy(state, action: PayloadAction<SortByValue>) {
      state.sortBy = action.payload;
    },
    setSortDirection(state, action: PayloadAction<SortDirectionValue>) {
      state.sortDirection = action.payload;
    },
    setFilterBy(state, action: PayloadAction<FilterByValue>) {
      state.filterBy = action.payload;
    },
    setSearchInput(state, action: PayloadAction<string>) {
      state.searchInput = action.payload;
    },
  },
});

export const { setSortBy, setSortDirection, setSearchInput, setFilterBy } =
  librarySlice.actions;
export default librarySlice.reducer;
