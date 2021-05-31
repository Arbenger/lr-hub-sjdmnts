import { WaveBackground } from "components/designs/styled";
import { Container, Wrapper, Title } from "./styled";

export default function FeatureOne() {
  return (
    <Container>
      <WaveBackground />
      <Wrapper maxWidth="lg">
        <Title variant="h4">Notifications</Title>
      </Wrapper>
    </Container>
  );
}
