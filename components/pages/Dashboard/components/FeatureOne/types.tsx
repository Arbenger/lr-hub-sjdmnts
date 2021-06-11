import { ReactNode } from 'react';

export interface Item {
   title: string;
   quantity: number;
   link: string;
   icon: ReactNode;
}
