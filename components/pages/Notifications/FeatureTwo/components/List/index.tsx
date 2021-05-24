import { Container, MuiList } from "./styled";

import BarrowAccepted from "./components/BarrowAccepted";
import ReturnAccepted from "./components/ReturnAccepted";
import ResolveAccepted from "./components/ResolveAccepted";
import BarrowDenied from "./components/BarrowDenied";
import ReturnDenied from "./components/ReturnDenied";
import ResolveDenied from "./components/ResolveDenied";

export default function List() {
  return (
    <Container>
      <MuiList>
        <BarrowAccepted createdAt={new Date(1621142681607)} />
        <ReturnAccepted createdAt={new Date(1621142681607)} />
        <ResolveAccepted createdAt={new Date(1621142681607)} />
        <BarrowDenied createdAt={new Date(1621142681607)} />
        <ReturnDenied createdAt={new Date(1621142681607)} />
        <ResolveDenied createdAt={new Date(1621142681607)} />
        <BarrowAccepted createdAt={new Date(1621142681607)} />
        <ReturnAccepted createdAt={new Date(1621142681607)} />
        <ResolveAccepted createdAt={new Date(1621142681607)} />
        <BarrowDenied createdAt={new Date(1621142681607)} />
        <ReturnDenied createdAt={new Date(1621142681607)} />
        <ResolveDenied createdAt={new Date(1621142681607)} />
      </MuiList>
    </Container>
  );
}
