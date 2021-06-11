import { Container } from './styled';
import { HiMenuAlt2 as MenuIcon } from 'react-icons/hi';
import { Hidden, IconButton, Typography } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { triggerDrawer } from 'redux/layoutSlice';
import { selectPage } from 'redux/selectors';

export default function Display() {
   const dispatch = useAppDispatch();
   const page = useAppSelector(selectPage);

   const handleClick = () => {
      dispatch(triggerDrawer('toggle'));
   };

   return (
      <Container>
         <Hidden mdUp>
            <IconButton
               edge="start"
               color="inherit"
               aria-label="drawer-toggler"
               onClick={handleClick}
            >
               <MenuIcon />
            </IconButton>
         </Hidden>

         <Typography variant="h6" className="title">
            {page.title}
         </Typography>
      </Container>
   );
}
