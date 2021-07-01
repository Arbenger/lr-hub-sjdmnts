export type SortDirection = 'asc' | 'desc';
export type SortBy = 'title' | 'latest' | 'availableCopies';
export type FilterBy = 'all' | 'bookmarked';

export interface Book {
   id: string;
   title: string;
   description: string;
   dateAdded: string;
   coverURL: string;
   statistics: {
      total: number;
      available: number;
      borrowed: number;
      lost: number;
   };
}

export interface LibraryConfig {
   sortBy: SortBy;
   sortDirection: SortDirection;
   filterBy: FilterBy;
   searchInput: string;
   isLoading: boolean;
}

export interface LibraryState {
   config: LibraryConfig;
   books: Book[];
   filteredBooks: Book[];
}
