import { Book } from '../library/types';

export interface MainBookConfig {
   isLoading: boolean;
}

export interface MainBookState {
   book: Book;
   config: MainBookConfig;
}
