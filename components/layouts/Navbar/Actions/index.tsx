import { FC, Fragment } from "react";
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
    </Fragment>
  );
};

export default Actions;
