import { Box } from "@material-ui/core";
import withLayout from "HOC/withLayout";
import ImageCarousel from "components/pages/Home/ImageCarousel";

const Home = () => {
  return (
    <Box marginBottom={50}>
      <ImageCarousel />
    </Box>
  );
};

const config = {
  pageName: "home",
  title: "Home",
};

export default withLayout(Home, config);
