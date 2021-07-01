import { Book, SortBy, SortDirection } from './types';
import _ from 'lodash';

export function filterBooksBySearchInput(books: Book[], searchInput: string) {
   return books.filter(({ title }) => {
      return title.toLowerCase().indexOf(searchInput.toLowerCase()) > -1;
   });
}

export function filterBooksBySort(
   books: Book[],
   sortBy: SortBy,
   sortDirection: SortDirection
) {
   switch (sortBy) {
      case 'availableCopies':
         return _.orderBy(books, (book) => book.statistics.available, [
            sortDirection,
         ]);

      case 'latest':
         return _.orderBy(books, (book) => book.dateAdded, [
            sortDirection,
         ]).reverse();

      default:
         return _.orderBy(books, (book) => book[sortBy], [sortDirection]);
   }
}
