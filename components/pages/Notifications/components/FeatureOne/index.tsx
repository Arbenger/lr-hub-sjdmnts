import { List as MuiList } from "@material-ui/core";
import { Container, LoadMoreButton, LoadMoreContainer } from "./styled";
import { Item as ItemType } from "./types";
import Item from "./components/Item";

export default function List() {
  const items: ItemType[] = [
    {
      type: "borrowAccepted",
      createdAt: new Date(1621142681607),
    },
    {
      type: "borrowDenied",
      createdAt: new Date(1621142681607),
    },
    {
      type: "returnAccepted",
      createdAt: new Date(1621142681607),
    },
    {
      type: "returnDenied",
      createdAt: new Date(1621142681607),
    },
    {
      type: "resolveAccepted",
      createdAt: new Date(1621142681607),
    },
    {
      type: "resolveDenied",
      createdAt: new Date(1621142681607),
    },
    {
      type: "borrowAccepted",
      createdAt: new Date(1621142681607),
    },
    {
      type: "borrowDenied",
      createdAt: new Date(1621142681607),
    },
    {
      type: "returnAccepted",
      createdAt: new Date(1621142681607),
    },
    {
      type: "returnDenied",
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
