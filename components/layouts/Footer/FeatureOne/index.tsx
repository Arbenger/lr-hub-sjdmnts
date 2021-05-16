import { Grid, Container, Hidden, Divider, Box } from "@material-ui/core";
import { RootContainer } from "./styled";

import ColumnOne from "./ColumnOne";
import ColumnTwo from "./ColumnTwo";
import ColumnThree from "./ColumnThree";
import ColumnFour from "./ColumnFour";
import { useAppSelector } from "redux/hooks";
import { selectLayout } from "redux/selectors";

const ItemDivider = () => (
  <Box padding={2}>
    <Divider />
  </Box>
);

export default function FeatureOne() {
  const {
    drawer: { isOpen },
  } = useAppSelector(selectLayout);

  return (
    <RootContainer>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={1} />

          <Grid item xs={12} sm={12} md={isOpen ? 12 : 4} lg={4}>
            <ColumnOne />
            <Hidden mdUp>
              <ItemDivider />
            </Hidden>
          </Grid>

          <Grid item xs={6} sm={4} md={isOpen ? 4 : 2} lg={2}>
            <ColumnTwo />
            <Hidden smUp>
              <ItemDivider />
            </Hidden>
          </Grid>

          <Grid item xs={6} sm={4} md={isOpen ? 4 : 2} lg={2}>
            <ColumnThree />
          </Grid>

          <Grid item xs={12} sm={4} md={isOpen ? 4 : 3} lg={3}>
            <ColumnFour />
          </Grid>
        </Grid>
      </Container>
    </RootContainer>
  );
}
