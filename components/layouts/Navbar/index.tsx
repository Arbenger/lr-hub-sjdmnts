import { Toolbar } from "@material-ui/core";
import { AppBar } from "./styled";
import { useAppSelector } from "redux/hooks";
import { selectLayout } from "redux/selectors";
import AppBarScroll from "./AppBarScroll";
import Display from "./Display";
import Actions from "./Actions";

interface Props {
  pageName: string;
  title: string;
}

const Navbar = ({ pageName, title }: Props) => {
  const {
    drawer: { isOpen },
  } = useAppSelector(selectLayout);

  return (
    <AppBarScroll>
      <AppBar id="navbar" position="fixed" data-is-drawer-open={isOpen}>
        <Toolbar>
          <Display title={title} />
          <Actions pageName={pageName} />
        </Toolbar>
      </AppBar>
    </AppBarScroll>
  );
};

export default Navbar;
