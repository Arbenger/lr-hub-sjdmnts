import { RefObject } from 'react';

export type Dialog = 'metaData' | 'cover' | 'print';

export type Dialogs = {
   [key in Dialog]: boolean;
};

export interface TriggerDialogPayload {
   dialog: Dialog;
   isOpen: boolean;
}

export type Pending = 'uploadingMetaData' | 'uploadingCover';

export type Pendings = {
   [key in Pending]: boolean;
};

export interface TriggerPendingPayload {
   pending: Pending;
   isPending: boolean;
}

export interface Data {
   title: string;
   copies: number;
   description: string;
   tmpPath: string;
}

export interface FetchedData {
   bookId: string;
   bookTitle: string;
   copiesIds: string[];
}

export interface BookInputerState {
   data: Data;
   fetchedData: FetchedData;
   pendings: Pendings;
   dialogs: Dialogs;
}

export interface UploadMetaDataPayload {
   title: string;
   description: string;
   copies: number;
   dateAdded: string;
}

export interface UploadCoverPayload {
   id: string;
   file: File;
}
