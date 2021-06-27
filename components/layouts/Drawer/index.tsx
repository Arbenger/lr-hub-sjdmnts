import { Container, Divider } from './styled';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectDrawer } from 'services/redux/selectors';
import { triggerDrawer } from 'services/redux/slices/drawer';
import { Fragment, useEffect, useState } from 'react';
import { Dialog } from '@material-ui/core';

import Brand from './components/Brand';
import Lists from './components/Lists';
import Action from './components/Action';

export default function Drawer() {
   const dispatch = useAppDispatch();
   const drawer = useAppSelector(selectDrawer);
   const [width, setWidth] = useState(0);

   useEffect(() => {
      function observeWidth() {
         setWidth(window.innerWidth);
      }
      window.addEventListener('resize', observeWidth);
      return () => {
         window.removeEventListener('resize', observeWidth);
      };
   }, []);

   useEffect(() => {
      setTimeout(() => window.dispatchEvent(new Event('resize')), 500);
      setTimeout(() => window.dispatchEvent(new Event('resize')), 1000);
   }, [drawer.isOpen]);

   return (
      <Fragment>
         <Dialog
            open={drawer.isOpen && width <= 960}
            onClose={() => dispatch(triggerDrawer('close'))}
            style={{ zIndex: 1150 }}
         />
         <Container data-is-open={drawer.isOpen}>
            <Brand />
            <Divider />
            <Lists />
            <Action />
         </Container>
      </Fragment>
   );
}
