import {
  RootContainer,
  Header,
  HeaderTitle,
  HeaderButton,
  List,
} from "./styled";
import Barrow from "./components/Barrow";
import Return from "./components/Return";
import Resolve from "./components/Resolve";

export default function PendingRequests() {
  return (
    <RootContainer>
      <Header>
        <HeaderTitle variant="body1">Pending Requests</HeaderTitle>
        <HeaderButton variant="text">View All</HeaderButton>
      </Header>
      <List>
        <Barrow createdAt={new Date()} />
        <Return createdAt={new Date()} />
        <Resolve createdAt={new Date()} />
        <Barrow createdAt={new Date()} />
        <Return createdAt={new Date()} />
        <Resolve createdAt={new Date()} />
      </List>
    </RootContainer>
  );
}
