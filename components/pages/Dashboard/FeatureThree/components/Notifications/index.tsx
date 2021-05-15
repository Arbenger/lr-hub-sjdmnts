import {
  RootContainer,
  Header,
  HeaderTitle,
  HeaderButton,
  List,
} from "./styled";

import BarrowAccepted from "./components/BarrowAccepted";
import ReturnAccepted from "./components/ReturnAccepted";
import ResolveAccepted from "./components/ResolveAccepted";
import BarrowDenied from "./components/BarrowDenied";
import ReturnDenied from "./components/ReturnDenied";
import ResolveDenied from "./components/ResolveDenied";

export default function Notifications() {
  return (
    <RootContainer>
      <Header>
        <HeaderTitle variant="body1">Notifications</HeaderTitle>
        <HeaderButton variant="text">View All</HeaderButton>
      </Header>
      <List>
        <BarrowAccepted createdAt={new Date()} />
        <ReturnAccepted createdAt={new Date()} />
        <ResolveAccepted createdAt={new Date()} />
        <BarrowDenied createdAt={new Date()} />
        <ReturnDenied createdAt={new Date()} />
        <ResolveDenied createdAt={new Date()} />
      </List>
    </RootContainer>
  );
}
