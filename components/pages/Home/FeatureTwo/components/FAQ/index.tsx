import { Grid } from "@material-ui/core";
import { RootContainer } from "../styled";
import Content from "./Content";
import Display from "./Display";

export default function FAQ() {
  return (
    <RootContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Display />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
      </Grid>
    </RootContainer>
  );
}
