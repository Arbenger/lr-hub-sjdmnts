import { SetStateAction, Dispatch } from "react";

export interface Props {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
  beginSearch: () => void;
}
