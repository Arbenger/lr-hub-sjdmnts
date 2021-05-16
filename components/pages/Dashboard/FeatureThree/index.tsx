import { Grid } from "@material-ui/core";
import { RootContainer } from "./styled";
import Notifications from "./components/Notifications";
import PendingRequests from "./components/PendingRequests";

export default function FeatureThree() {
  return (
    <RootContainer maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <PendingRequests />
        </Grid>
        <Grid item xs={12} md={6}>
          <Notifications />
        </Grid>
      </Grid>
    </RootContainer>
  );
}
