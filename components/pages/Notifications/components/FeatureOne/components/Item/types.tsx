import { ReactNode } from "react";

export interface Template {
  text: string;
  icon: ReactNode;
}

export interface Templates {
  borrowAccepted: Template;
  borrowDenied: Template;
  returnAccepted: Template;
  returnDenied: Template;
  resolveAccepted: Template;
  resolveDenied: Template;
}
