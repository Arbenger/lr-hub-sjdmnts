import { Container } from './styled';
import { Hidden, IconButton } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectDrawer } from 'services/redux/selectors';
import { ArrowRightIcon } from 'components/Icons';
import { triggerDrawer } from 'services/redux/slices/drawer';

export default function Action() {
   const dispatch = useAppDispatch();
   const drawer = useAppSelector(selectDrawer);

   return (
      <Container data-is-open={drawer.isOpen}>
         <Hidden smDown>
            <IconButton
               color="inherit"
               onClick={() => dispatch(triggerDrawer('toggle'))}
            >
               <ArrowRightIcon />
            </IconButton>
         </Hidden>
      </Container>
   );
}
