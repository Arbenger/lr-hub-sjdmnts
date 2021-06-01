import { Container, Wrapper } from "./styled";
import BookMenu from "./components/BookMenu";

export default function FeatureTwo() {
  return (
    <Container>
      <Wrapper maxWidth="lg">
        <BookMenu />
      </Wrapper>
    </Container>
  );
}
