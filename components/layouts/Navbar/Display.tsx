import { Box, Hidden, IconButton, Typography } from '@material-ui/core';
import { HiMenuAlt2 as MenuIcon } from 'react-icons/hi';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { triggerDrawer } from 'services/redux/slices/drawer';
import { selectPage } from 'services/redux/selectors';

export default function Display() {
   const dispatch = useAppDispatch();
   const page = useAppSelector(selectPage);

   return (
      <Box
         flexGrow={1}
         display="flex"
         alignItems="center"
         justifyContent="flex-start"
      >
         <Hidden mdUp>
            <IconButton
               edge="start"
               color="inherit"
               onClick={() => dispatch(triggerDrawer('toggle'))}
            >
               <MenuIcon />
            </IconButton>
         </Hidden>

         <Typography variant="h6" className="title">
            {page.title}
         </Typography>
      </Box>
   );
}
