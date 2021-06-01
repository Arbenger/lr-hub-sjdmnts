import { Fragment } from "react";
import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";
import FeatureThree from "./components/FeatureThree";

export default function Dashboard() {
  return (
    <Fragment>
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
    </Fragment>
  );
}
