import { Box } from "@material-ui/core";
import withLayout from "HOC/withLayout";

import FeatureOne from "components/pages/Dashboard/FeatureOne";
import FeatureTwo from "components/pages/Dashboard/FeatureTwo";
import FeatureThree from "components/pages/Dashboard/FeatureThree";

const Dashboard = () => {
  return (
    <Box>
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
    </Box>
  );
};

export default withLayout(Dashboard, {
  pageName: "dashboard",
  pageTitle: "Dashboard",
});
