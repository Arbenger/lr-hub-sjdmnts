export type Dialog =
   | 'edit'
   | 'deactivate'
   | 'editFulfilled'
   | 'editRejected'
   | 'redirect';

export type DialogState = Partial<{
   isOpen: boolean;
}>;

export type Dialogs = {
   [key in Dialog]: DialogState;
};

export interface TriggerDialogPayload {
   dialog: Dialog;
   state: DialogState;
}

export interface AccountState {
   dialogs: Dialogs;
}
