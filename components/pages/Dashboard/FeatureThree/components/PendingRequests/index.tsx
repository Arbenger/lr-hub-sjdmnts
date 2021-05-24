import {
  RootContainer,
  Header,
  HeaderTitle,
  HeaderButton,
  List,
} from "./styled";
import Barrow from "components/pages/PendingRequests/FeatureTwo/components/List/components/Barrow";
import Return from "components/pages/PendingRequests/FeatureTwo/components/List/components/Return";
import Resolve from "components/pages/PendingRequests/FeatureTwo/components/List/components/Resolve";

export default function PendingRequests() {
  return (
    <RootContainer>
      <Header>
        <HeaderTitle variant="body1">Pending Requests</HeaderTitle>
        <HeaderButton variant="text">View All</HeaderButton>
      </Header>
      <List>
        <Barrow createdAt={new Date(1621142681607)} />
        <Return createdAt={new Date(1621142681607)} />
        <Resolve createdAt={new Date(1621142681607)} />
        <Barrow createdAt={new Date(1621142681607)} />
        <Return createdAt={new Date(1621142681607)} />
        <Resolve createdAt={new Date(1621142681607)} />
      </List>
    </RootContainer>
  );
}
