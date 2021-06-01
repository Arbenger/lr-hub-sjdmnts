export type SortDirectionValue = "ascending" | "descending";

export type SortByValue = "title" | "author" | "numberOfPages" | "popularity";

export interface SortByOption {
  title: string;
  value: SortByValue;
}
