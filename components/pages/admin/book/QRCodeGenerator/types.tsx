export interface Query {
   bookId: string;
   bookTitle: string;
   idOfCopies: string[];
}
export interface BookCopy {
   copyId: string;
   bookId: string;
   bookTitle: string;
}
export type BookCopies = BookCopy[];
export type BookChunks = BookCopies[];
