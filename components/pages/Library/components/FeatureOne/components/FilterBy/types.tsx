export type FilterByValue = "all" | "bookmarked" | "previouslyBorrowed";

export interface FilterByOption {
  title: string;
  value: FilterByValue;
}
