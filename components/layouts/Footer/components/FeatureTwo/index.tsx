import { Container, WaveBackground } from "./styled";
import { Typography } from "@material-ui/core";
import { Fragment } from "react";

export default function FeatureTwo() {
  return (
    <Fragment>
      <WaveBackground />
      <Container>
        <Typography variant="body2">
          &copy;2021 LR Hub - SJDMNTS. All rights reserved.
        </Typography>
      </Container>
    </Fragment>
  );
}
