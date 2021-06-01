import { Fragment } from "react";
import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";

export default function Home() {
  return (
    <Fragment>
      <FeatureOne />
      <FeatureTwo />
    </Fragment>
  );
}
