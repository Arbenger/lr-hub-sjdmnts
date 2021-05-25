import { Box } from "@material-ui/core";
import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/Home/FeatureOne";
import FeatureTwo from "components/pages/Home/FeatureTwo";
import { setPage } from "redux/pageSlice";
import { useEffect } from "react";
import { useAppDispatch } from "redux/hooks";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const name = "home";
    const title = "Home";
    dispatch(setPage({ name, title }));
  }, []);

  return (
    <Box>
      <FeatureOne />
      <FeatureTwo />
    </Box>
  );
};

export default withLayout(Home);
