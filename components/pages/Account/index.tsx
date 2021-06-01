import { Fragment } from "react";
import { WaveBackground } from "components/designs/styled";
import { Container, Title } from "./styled";

export default function Account() {
  return (
    <Fragment>
      <WaveBackground />
      <Container maxWidth="lg">
        <Title variant="h4">Account</Title>
      </Container>
    </Fragment>
  );
}
