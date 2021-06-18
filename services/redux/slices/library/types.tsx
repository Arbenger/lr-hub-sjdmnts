export type SortDirection = 'asc' | 'desc';
export type SortBy = 'title' | 'popularity' | 'latest' | 'availableCopies';
export type FilterBy = 'all' | 'bookmarked' | 'previouslyBorrowed';

export interface Book {
   id: string;
   title: string;
   description: string;
   statistics: {
      total: number;
      available: number;
      borrowed: number;
      lost: number;
   };
}

export interface LibraryState {
   sortBy: SortBy;
   sortDirection: SortDirection;
   filterBy: FilterBy;
   searchInput: string;
   isLoading: boolean;
   books: Book[];
}
