import { Fragment } from "react";
import AccountButton from "./AccountButton";
import PaletteButton from "./PaletteButton";

export default function Actions() {
  return (
    <Fragment>
      <PaletteButton />
      <AccountButton />
    </Fragment>
  );
}
