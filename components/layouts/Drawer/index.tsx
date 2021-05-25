import { Container, Divider } from "./styled";
import { useAppSelector } from "redux/hooks";
import { selectLayout } from "redux/selectors";
import { useTheme } from "@material-ui/core";
import { Fragment, useEffect } from "react";

import Brand from "./components/Brand";
import Lists from "./components/Lists";
import Action from "./components/Action";
import Backdrop from "./components/Backdrop";

export default function Drawer() {
  const { breakpoints } = useTheme();
  const { drawer } = useAppSelector(selectLayout);

  useEffect(() => {
    setTimeout(() => window.dispatchEvent(new Event("resize")), 500);
    const observeWindowWidth = () => {
      const width = window.innerWidth;
      const isSM = width <= breakpoints.values.md;
      document.body.style.overflowY = isSM && drawer.isOpen ? "hidden" : "auto";
    };
    observeWindowWidth();
    window.addEventListener("resize", observeWindowWidth);
    return () => {
      window.removeEventListener("resize", observeWindowWidth);
    };
  }, [drawer.isOpen]);

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
