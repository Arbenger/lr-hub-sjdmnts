import { Grid, Box } from "@material-ui/core";
import { Container, Wrapper } from "components/pages/Home/styled";
import { ImageCarouselCurve } from "components/pages/Home/ImageCarousel/styled";
import withLayout from "HOC/withLayout";
import ImageCarousel from "components/pages/Home/ImageCarousel";
import FAQ from "components/pages/Home/FAQ";
import FollowUs from "components/pages/Home/FollowUs";

const Home = () => {
  return (
    <Box>
      <ImageCarousel />
      <ImageCarouselCurve />

      <Container>
        <Wrapper maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FAQ />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <FollowUs /> */}
            </Grid>
          </Grid>
        </Wrapper>
      </Container>
    </Box>
  );
};

const config = {
  pageName: "home",
  title: "Home",
};

export default withLayout(Home, config);
