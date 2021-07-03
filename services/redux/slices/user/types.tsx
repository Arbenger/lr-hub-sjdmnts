export interface Info {
   uid: string;
   email: string;
   displayName: string;
   occupation: string;
   registeredAt: string;
   photoURL: string;
   provider: string;
   isLibrarian: boolean;
}

export type Thunk = 'edit' | 'deactivate';

export type ThunkState = {
   isPending: boolean;
};

export type Thunks = {
   [key in Thunk]: ThunkState;
};

export interface UserState {
   info: Info;
   thunks: Thunks;
}

export interface EditUserPayload {
   uid: string;
   displayName: string;
   occupation: string;
}
