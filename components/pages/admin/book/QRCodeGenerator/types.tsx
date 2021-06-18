export interface Query {
   bookId: string;
   bookTitle: string;
   copiesIds: string[];
}
export interface BookCopy {
   copyId: string;
   bookId: string;
   bookTitle: string;
}
export type BookCopies = BookCopy[];
export type BookChunks = BookCopies[];
