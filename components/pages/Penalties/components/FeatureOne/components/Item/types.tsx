import { ReactNode } from "react";

export interface Template {
  text: string;
  icon: ReactNode;
}

export interface Templates {
  lost: Template;
  return: Template;
}
