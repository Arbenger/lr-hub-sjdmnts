export interface FetchedData {
   bookId: string;
   bookTitle: string;
   idOfCopies: string[];
}

export interface BookInputerState {
   title: string;
   copies: number;
   description: string;
   isLoading: boolean;
   dialogs: {
      proceed: {
         isOpen: boolean;
      };
      print: {
         isOpen: boolean;
      };
   };
   fetchedData: FetchedData;
}

export interface TriggerDialogPayload {
   target: 'proceed' | 'print';
   action: 'close' | 'open';
}
