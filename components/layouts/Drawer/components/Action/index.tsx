import { Container } from './styled';
import { Hidden, IconButton } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectLayout } from 'services/redux/selectors';
import { triggerDrawer } from 'services/redux/layoutSlice';
import { ArrowRightIcon } from 'components/Icons';

export default function Action() {
   const dispatch = useAppDispatch();
   const {
      drawer: { isOpen },
   } = useAppSelector(selectLayout);

   const handleClick = () => {
      dispatch(triggerDrawer('toggle'));
   };

   return (
      <Container data-is-open={isOpen}>
         <Hidden smDown>
            <IconButton
               color="inherit"
               aria-label="close-drawer"
               onClick={handleClick}
            >
               <ArrowRightIcon />
            </IconButton>
         </Hidden>
      </Container>
   );
}
