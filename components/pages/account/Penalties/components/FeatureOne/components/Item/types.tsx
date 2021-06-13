import { ReactNode } from 'react';

export interface Template {
   text: string;
   icon: ReactNode;
}

export interface Templates {
   return: Template;
   lost: Template;
}
