import { Toolbar } from "@material-ui/core";
import { AppBar } from "./styled";

import AppBarScroll from "./AppBarScroll";
import Brand from "./Brand";
import Actions from "./Actions";

interface Props {
  pageName: string;
}

const Navbar = ({ pageName }: Props) => {
  return (
    <AppBarScroll>
      <AppBar position="fixed">
        <Toolbar>
          <Brand />
          <Actions pageName={pageName} />
        </Toolbar>
      </AppBar>
    </AppBarScroll>
  );
};

export default Navbar;
