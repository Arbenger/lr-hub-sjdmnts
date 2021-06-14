import {
   BookmarkIcon,
   BorrowedBookIcon,
   LostBookIcon,
   PenaltyIcon,
   ReturnedBookIcon,
   ExpiredBookIcon,
   CloseIcon,
} from 'components/Icons';
import {
   Slide,
   Typography,
   IconButton,
   Toolbar,
   AppBar,
   List,
   ListItem,
   ListItemText,
   Dialog,
   Avatar,
   ListItemAvatar,
   Divider,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectLayout } from 'services/redux/selectors';
import { triggerDrawer, triggerQuickAccess } from 'services/redux/layoutSlice';
import { Item } from './types';
import React, { Fragment } from 'react';
import Link from 'next/link';

const Transition = React.forwardRef(function Transition(
   props: TransitionProps & { children?: React.ReactElement },
   ref: React.Ref<unknown>
) {
   return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
   const dispatch = useAppDispatch();
   const { quickAccess } = useAppSelector(selectLayout);

   const items: Item[] = [
      {
         title: 'Borrowed Books',
         link: '/book/borrowed',
         icon: <BorrowedBookIcon />,
      },
      {
         title: 'Returned Books',
         link: '/book/returned',
         icon: <ReturnedBookIcon />,
      },
      {
         title: 'Expired Books',
         link: '/book/expired',
         icon: <ExpiredBookIcon />,
      },
      {
         title: 'Lost Books',
         link: '/book/lost',
         icon: <LostBookIcon />,
      },
      {
         title: 'Bookmarks',
         link: '/book/bookmarks',
         icon: <BookmarkIcon />,
      },
      {
         title: 'Penalties',
         link: '/account/penalties',
         icon: <PenaltyIcon />,
      },
   ];

   const handleClose = () => {
      dispatch(triggerQuickAccess('close'));
      dispatch(triggerDrawer('close'));
   };

   return (
      <Dialog
         fullScreen
         open={quickAccess.isOpen}
         onClose={handleClose}
         TransitionComponent={Transition}
      >
         <AppBar position="relative">
            <Toolbar>
               <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
               >
                  <CloseIcon />
               </IconButton>
               <Typography variant="h6">Quick Access</Typography>
            </Toolbar>
         </AppBar>

         <List>
            {items.map((item) => (
               <Fragment key={item.title}>
                  <Link href={item.link}>
                     <ListItem button onClick={handleClose}>
                        <ListItemAvatar>
                           <Avatar>{item.icon}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.title} />
                     </ListItem>
                  </Link>
                  <Divider />
               </Fragment>
            ))}
         </List>
      </Dialog>
   );
}
