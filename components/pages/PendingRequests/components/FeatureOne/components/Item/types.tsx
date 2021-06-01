import { ReactNode } from "react";

export interface Template {
  text: string;
  icon: ReactNode;
}

export interface Templates {
  borrow: Template;
  return: Template;
  resolve: Template;
}
