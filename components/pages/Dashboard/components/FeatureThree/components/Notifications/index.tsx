import {
  RootContainer,
  Header,
  HeaderTitle,
  HeaderButton,
  List,
} from "./styled";
import Link from "next/link";
import Item from "components/pages/Notifications/components/FeatureOne/components/Item";
import { Item as ItemType } from "components/pages/Notifications/components/FeatureOne/types";

export default function Notifications() {
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
  ];

  return (
    <RootContainer>
      <Header>
        <HeaderTitle variant="body1">Notifications</HeaderTitle>
        <Link href="/notifications">
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
