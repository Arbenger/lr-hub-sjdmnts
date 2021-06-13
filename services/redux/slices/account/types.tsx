export type Dialog =
   | 'deactivateAccount'
   | 'editAccount'
   | 'editAccountFulfilled'
   | 'editAccountRejected'
   | 'redirect';

export type DialogState = {
   isOpen: boolean;
   isLoading?: boolean;
};

export interface TriggerDialogPayload {
   target: Dialog;
   state: Partial<DialogState>;
}

export interface AccountInfo {
   uid: string;
   email: string;
   displayName: string;
   occupation: string;
   registeredAt: string;
   photoURL: string;
   provider: string;
}

export interface AccountState {
   info: AccountInfo;
   dialogs: {
      [key in Dialog]: DialogState;
   };
}

export interface FetchEditAccountByUIDPayload {
   accountUID: string;
   displayName: string;
   occupation: string;
}
