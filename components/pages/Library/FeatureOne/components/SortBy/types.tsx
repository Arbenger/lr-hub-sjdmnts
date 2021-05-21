import { Dispatch, SetStateAction } from "react";

export type SortDirectionValue = "ascending" | "descending";

export type SortByValue = "title" | "author" | "numberOfPages" | "popularity";

export interface SortByOption {
  title: string;
  value: SortByValue;
}

export interface Props {
  sortBy: SortByValue;
  sortDirection: SortDirectionValue;
  setSortBy: Dispatch<SetStateAction<SortByValue>>;
  setSortDirection: Dispatch<SetStateAction<SortDirectionValue>>;
}
