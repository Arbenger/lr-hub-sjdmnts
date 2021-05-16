import { Fragment } from "react";
import { Box } from "@material-ui/core";
import withLayout from "HOC/withLayout";

import FeatureOne from "components/pages/Dashboard/FeatureOne";
import FeatureTwo from "components/pages/Dashboard/FeatureTwo";
import FeatureThree from "components/pages/Dashboard/FeatureThree";

const Dashboard = () => {
  return (
    <Fragment>
      <Box>
        <FeatureOne />
        <FeatureTwo />
        <FeatureThree />
      </Box>
    </Fragment>
  );
};

const config = {
  pageName: "dashboard",
  title: "Dashboard",
  withNavbar: true,
  withFooter: true,
  withDrawer: true,
};

export default withLayout(Dashboard, config);
