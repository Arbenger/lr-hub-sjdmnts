import { Grid } from '@material-ui/core';
import SortBy from './SortBy';
import FilterBy from './FilterBy';
import Search from './Search';

export default function ToolMenu() {
   return (
      <Grid container spacing={2}>
         <Grid item xs={6} sm={3}>
            <SortBy />
         </Grid>
         <Grid item xs={6} sm={3}>
            <FilterBy />
         </Grid>
         <Grid item xs={12} sm={6}>
            <Search />
         </Grid>
      </Grid>
   );
}
