import { Toolbar } from '@material-ui/core';
import { AppBar } from './styled';
import { useAppSelector } from 'services/redux/hooks';
import { selectDrawer } from 'services/redux/selectors';
import AppBarScroll from './AppBarScroll';
import Display from './Display';
import Actions from './Actions';

export default function Navbar() {
   const drawer = useAppSelector(selectDrawer);

   return (
      <AppBarScroll>
         <AppBar
            id="navbar"
            position="fixed"
            data-is-drawer-open={drawer.isOpen}
         >
            <Toolbar>
               <Display />
               <Actions />
            </Toolbar>
         </AppBar>
      </AppBarScroll>
   );
}
