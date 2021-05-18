import { ReactNode } from "react";

export interface Props {
  pageName: string;
}

export interface Item {
  title: string;
  pageName: string;
  icon: ReactNode;
}

export interface List {
  title: string;
  items: Item[];
}
