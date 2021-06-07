import { Grid, Box } from "@material-ui/core";
import SortBy from "./components/SortBy";
import FilterBy from "./components/FilterBy";
import Search from "./components/Search";

export default function FeatureOne() {
  const beginSearch = () => {};

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <SortBy />
        </Grid>
        <Grid item xs={6} sm={3}>
          <FilterBy />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Search beginSearch={beginSearch} />
        </Grid>
      </Grid>
    </Box>
  );
}
