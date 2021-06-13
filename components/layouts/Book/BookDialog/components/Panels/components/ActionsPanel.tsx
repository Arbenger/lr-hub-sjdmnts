import {
   CloseIcon,
   BorrowedBookIcon,
   ReturnedBookIcon,
   LostBookIcon,
   ExtendIcon,
   BookmarkIcon,
   EditAccountIcon,
} from 'components/Icons';
import {
   Avatar,
   List,
   ListItem,
   ListItemText,
   ListItemAvatar,
   Divider,
} from '@material-ui/core';
import { Fragment, ReactNode } from 'react';
import { useAppDispatch } from 'services/redux/hooks';
import { triggerDialog } from 'services/redux/bookDialogSlice';

interface Item {
   title: string;
   icon: ReactNode;
   action: any;
}

export default function ActionsPanel() {
   const dispatch = useAppDispatch();

   const items: Item[] = [
      {
         title: 'Close',
         icon: <CloseIcon />,
         action: () => dispatch(triggerDialog('close')),
      },
      {
         title: 'Borrow',
         icon: <BorrowedBookIcon />,
         action: () => {},
      },
      {
         title: 'Return',
         icon: <ReturnedBookIcon />,
         action: () => {},
      },
      {
         title: 'Extend',
         icon: <ExtendIcon />,
         action: () => {},
      },
      {
         title: 'Mark As Lost',
         icon: <LostBookIcon />,
         action: () => {},
      },
      {
         title: 'Bookmark',
         icon: <BookmarkIcon />,
         action: () => {},
      },
      {
         title: 'Unbookmark',
         icon: <BookmarkIcon />,
         action: () => {},
      },
      {
         title: 'Modify',
         icon: <EditAccountIcon />,
         action: () => {},
      },
   ];

   return (
      <List>
         {items.map((item) => (
            <Fragment key={item.title}>
               <ListItem button onClick={item.action}>
                  <ListItemAvatar>
                     <Avatar>{item.icon}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.title} />
               </ListItem>
               <Divider />
            </Fragment>
         ))}
      </List>
   );
}
