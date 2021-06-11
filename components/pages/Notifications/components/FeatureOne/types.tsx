export interface Item {
   type:
      | 'borrowAccepted'
      | 'borrowDenied'
      | 'returnAccepted'
      | 'returnDenied'
      | 'resolveAccepted'
      | 'resolveDenied';
   createdAt: Date;
}
