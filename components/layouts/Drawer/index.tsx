import { Container, Divider } from "./styled";
import { useAppSelector } from "redux/hooks";
import { selectLayout } from "redux/selectors";
import { Fragment } from "react";

import Brand from "./components/Brand";
import Lists from "./components/Lists";
import Action from "./components/Action";
import Backdrop from "./components/Backdrop";

export default function Drawer() {
  const { drawer } = useAppSelector(selectLayout);

  return (
    <Fragment>
      <Container data-is-open={drawer.isOpen}>
        <Brand />
        <Divider />
        <Lists />
        <Action />
      </Container>
      <Backdrop />
    </Fragment>
  );
}
