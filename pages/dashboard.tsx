import { Box } from "@material-ui/core";
import { useAppDispatch } from "redux/hooks";
import { useEffect } from "react";
import withLayout from "HOC/withLayout";

import FeatureOne from "components/pages/Dashboard/FeatureOne";
import FeatureTwo from "components/pages/Dashboard/FeatureTwo";
import FeatureThree from "components/pages/Dashboard/FeatureThree";
import { setPage } from "redux/pageSlice";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const name = "dashboard";
    const title = "Dashboard";
    dispatch(setPage({ name, title }));
  }, []);

  return (
    <Box>
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
    </Box>
  );
};

export default withLayout(Dashboard);
