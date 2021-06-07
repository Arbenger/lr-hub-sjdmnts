import { Box, Grid } from "@material-ui/core";
import Notifications from "./components/Notifications";
import PendingRequests from "./components/PendingRequests";

export default function FeatureThree() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <PendingRequests />
        </Grid>
        <Grid item xs={12} md={6}>
          <Notifications />
        </Grid>
      </Grid>
    </Box>
  );
}
