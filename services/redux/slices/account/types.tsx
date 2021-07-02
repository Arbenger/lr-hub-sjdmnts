export type Dialog =
   | 'edit'
   | 'editFulfilled'
   | 'editRejected'
   | 'deactivate'
   | 'deactivateFulfilled'
   | 'deactivateRejected';

export type Dialogs = {
   [key in Dialog]: boolean;
};

export interface TriggerDialogPayload {
   dialog: Dialog;
   isOpen: boolean;
}

export interface AccountState {
   dialogs: Dialogs;
}
