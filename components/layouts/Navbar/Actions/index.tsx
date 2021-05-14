import { FC, Fragment } from "react";
import { IconButton } from "@material-ui/core";
import { HiMenuAlt3 as MenuIcon } from "react-icons/hi";
import LibraryButton from "./LibraryButton";
import DashboardButton from "./DashboardButton";
import AccountButton from "./AccountButton";
import PaletteButton from "./PaletteButton";

interface Props {
  pageName: string;
}

const Actions: FC<Props> = ({ pageName }) => {
  return (
    <Fragment>
      <LibraryButton pageName={pageName} />
      <DashboardButton pageName={pageName} />
      <AccountButton pageName={pageName} />

      <PaletteButton />

      <IconButton edge="end" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
};

export default Actions;
