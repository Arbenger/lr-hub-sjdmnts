import {
  RootContainer,
  Header,
  HeaderTitle,
  HeaderButton,
  List,
} from "./styled";
import Link from "next/link";

import BarrowAccepted from "components/pages/Notifications/FeatureTwo/components/List/components/BarrowAccepted";
import ReturnAccepted from "components/pages/Notifications/FeatureTwo/components/List/components/ReturnAccepted";
import ResolveAccepted from "components/pages/Notifications/FeatureTwo/components/List/components/ResolveAccepted";
import BarrowDenied from "components/pages/Notifications/FeatureTwo/components/List/components/BarrowDenied";
import ReturnDenied from "components/pages/Notifications/FeatureTwo/components/List/components/ReturnDenied";
import ResolveDenied from "components/pages/Notifications/FeatureTwo/components/List/components/ResolveDenied";

export default function Notifications() {
  return (
    <RootContainer>
      <Header>
        <HeaderTitle variant="body1">Notifications</HeaderTitle>
        <Link href="/notifications">
          <HeaderButton variant="text">View All</HeaderButton>
        </Link>
      </Header>
      <List>
        <BarrowAccepted createdAt={new Date(1621142681607)} />
        <ReturnAccepted createdAt={new Date(1621142681607)} />
        <ResolveAccepted createdAt={new Date(1621142681607)} />
        <BarrowDenied createdAt={new Date(1621142681607)} />
        <ReturnDenied createdAt={new Date(1621142681607)} />
        <ResolveDenied createdAt={new Date(1621142681607)} />
      </List>
    </RootContainer>
  );
}
