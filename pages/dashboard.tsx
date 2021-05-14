import { Fragment } from "react";
import { Box } from "@material-ui/core";
import withLayout from "HOC/withLayout";

import FeatureOne from "components/pages/Dashboard/FeatureOne";
import FeatureTwo from "components/pages/Dashboard/FeatureTwo";

const Dashboard = () => {
  return (
    <Fragment>
      <Box>
        <FeatureOne />
        <FeatureTwo />
      </Box>
    </Fragment>
  );
};

const config = {
  pageName: "dashboard",
  title: "Dashboard",
  withNavbar: true,
  withFooter: true,
};

export default withLayout(Dashboard, config);
