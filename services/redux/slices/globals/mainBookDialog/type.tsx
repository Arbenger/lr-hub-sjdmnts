import { Book } from '../../library/types';

export interface MainBookDialogConfig {
   isOpen: boolean;
   isLoading: boolean;
   targetBookId: string;
}

export interface MainBookDialogState {
   config: MainBookDialogConfig;
   book: Book;
}
