import {
  RootContainer,
  Header,
  HeaderTitle,
  HeaderButton,
  List,
} from "./styled";
import Link from "next/link";
import Item from "components/pages/PendingRequests/components/FeatureOne/components/Item";
import { Item as ItemType } from "components/pages/PendingRequests/components/FeatureOne/types";

export default function PendingRequests() {
  const items: ItemType[] = [
    {
      type: "borrow",
      createdAt: new Date(1621142681607),
    },
    {
      type: "return",
      createdAt: new Date(1621142681607),
    },
    {
      type: "resolve",
      createdAt: new Date(1621142681607),
    },
    {
      type: "borrow",
      createdAt: new Date(1621142681607),
    },
    {
      type: "return",
      createdAt: new Date(1621142681607),
    },
    {
      type: "resolve",
      createdAt: new Date(1621142681607),
    },
  ];

  return (
    <RootContainer>
      <Header>
        <HeaderTitle variant="body1">Pending Requests</HeaderTitle>
        <Link href="pending-requests">
          <HeaderButton variant="text">View All</HeaderButton>
        </Link>
      </Header>
      <List>
        {items.map((item, index) => (
          <Item key={index} type={item.type} createdAt={item.createdAt} />
        ))}
      </List>
    </RootContainer>
  );
}
