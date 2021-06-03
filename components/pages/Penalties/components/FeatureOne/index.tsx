import { List as MuiList } from "@material-ui/core";
import { Container, LoadMoreButton, LoadMoreContainer } from "./styled";
import { Item as ItemType } from "./types";
import Item from "./components/Item";

export default function List() {
  const items: ItemType[] = [
    {
      type: "lost",
      createdAt: new Date(1621142681607),
    },
    {
      type: "return",
      createdAt: new Date(1621142681607),
    },
    {
      type: "lost",
      createdAt: new Date(1621142681607),
    },
    {
      type: "return",
      createdAt: new Date(1621142681607),
    },
    {
      type: "lost",
      createdAt: new Date(1621142681607),
    },
    {
      type: "return",
      createdAt: new Date(1621142681607),
    },
    {
      type: "lost",
      createdAt: new Date(1621142681607),
    },
    {
      type: "return",
      createdAt: new Date(1621142681607),
    },
    {
      type: "lost",
      createdAt: new Date(1621142681607),
    },
    {
      type: "return",
      createdAt: new Date(1621142681607),
    },
  ];

  return (
    <Container>
      <MuiList>
        {items.map((item, index) => (
          <Item key={index} type={item.type} createdAt={item.createdAt} />
        ))}
      </MuiList>
      <LoadMoreContainer>
        <LoadMoreButton variant="contained">Load More</LoadMoreButton>
      </LoadMoreContainer>
    </Container>
  );
}
