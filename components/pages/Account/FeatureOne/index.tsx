import { BackgroundDesign, Container, Wrapper, Title } from "./styled";

export default function FeatureOne() {
  return (
    <Container>
      <BackgroundDesign />
      <Wrapper maxWidth="lg">
        <Title variant="h4">Account</Title>
      </Wrapper>
    </Container>
  );
}
