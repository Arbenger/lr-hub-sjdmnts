import { Container, Divider } from "./styled";
import { useAppSelector } from "redux/hooks";
import { selectLayout } from "redux/selectors";
import { Fragment, useEffect } from "react";

import Brand from "./components/Brand";
import Lists from "./components/Lists";
import Action from "./components/Action";
import Backdrop from "./components/Backdrop";
import { useTheme } from "@material-ui/core";

interface Props {
  pageName: string;
}

export default function Drawer({ pageName }: Props) {
  const { breakpoints } = useTheme();
  const {
    drawer: { isOpen },
  } = useAppSelector(selectLayout);

  useEffect(() => {
    setTimeout(() => window.dispatchEvent(new Event("resize")), 500);
    const observeWindowWidth = () => {
      const width = window.innerWidth;
      const isSM = width <= breakpoints.values.md;
      document.body.style.overflowY = isSM && isOpen ? "hidden" : "auto";
    };
    window.addEventListener("resize", observeWindowWidth);
    return () => {
      window.removeEventListener("resize", observeWindowWidth);
    };
  }, [isOpen]);

  return (
    <Fragment>
      <Container data-is-open={isOpen}>
        <Brand />
        <Divider />
        <Lists pageName={pageName} />
        <Action />
      </Container>
      <Backdrop />
    </Fragment>
  );
}
