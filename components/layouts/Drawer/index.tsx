import { Container, Divider } from "./styled";
import Brand from "./components/Brand";
import Lists from "./components/Lists";
import Action from "./components/Action";
import { useAppSelector } from "redux/hooks";
import { selectLayout } from "redux/selectors";

export default function Drawer() {
  const { drawer } = useAppSelector(selectLayout);

  return (
    <Container data-is-open={drawer.isOpen}>
      <Brand />
      <Divider />
      <Lists />
      <Action />
    </Container>
  );
}
