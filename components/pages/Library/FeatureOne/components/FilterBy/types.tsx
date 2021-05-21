import { Dispatch, SetStateAction } from "react";

export type FilterByValue = "all" | "bookmarked" | "previouslyBorrowed";

export interface FilterByOption {
  title: string;
  value: FilterByValue;
}

export interface Props {
  filterBy: FilterByValue;
  setFilterBy: Dispatch<SetStateAction<FilterByValue>>;
}
