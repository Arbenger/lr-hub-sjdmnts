import { Box } from "@material-ui/core";
import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/Home/FeatureOne";
import FeatureTwo from "components/pages/Home/FeatureTwo";

const Home = () => {
  return (
    <Box>
      <FeatureOne />
      <FeatureTwo />
    </Box>
  );
};

export default withLayout(Home, {
  pageName: "home",
  pageTitle: "Home",
});
