import { List as MuiList } from "@material-ui/core";
import { Container, LoadMoreButton, LoadMoreContainer } from "./styled";

import Barrow from "./components/Barrow";
import Return from "./components/Return";
import Resolve from "./components/Resolve";

export default function List() {
  return (
    <Container>
      <MuiList>
        <Barrow createdAt={new Date(1621142681607)} />
        <Return createdAt={new Date(1621142681607)} />
        <Resolve createdAt={new Date(1621142681607)} />
        <Barrow createdAt={new Date(1621142681607)} />
        <Return createdAt={new Date(1621142681607)} />
        <Resolve createdAt={new Date(1621142681607)} />
        <Barrow createdAt={new Date(1621142681607)} />
        <Return createdAt={new Date(1621142681607)} />
        <Resolve createdAt={new Date(1621142681607)} />
        <Barrow createdAt={new Date(1621142681607)} />
      </MuiList>
      <LoadMoreContainer>
        <LoadMoreButton variant="contained">Load More</LoadMoreButton>
      </LoadMoreContainer>
    </Container>
  );
}
