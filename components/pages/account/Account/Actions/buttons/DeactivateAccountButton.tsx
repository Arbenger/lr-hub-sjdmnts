import {
   ListItem,
   ListItemAvatar,
   Avatar,
   ListItemText,
} from '@material-ui/core';
import { DeactivateAccountIcon } from 'components/Icons';
import { useAppDispatch } from 'services/redux/hooks';
import { triggerDialog } from 'services/redux/slices/account';

export default function DeactivateAccountButton() {
   const dispatch = useAppDispatch();

   function handleClick() {
      dispatch(
         triggerDialog({
            dialog: 'deactivate',
            isOpen: true,
         })
      );
   }

   return (
      <ListItem button onClick={handleClick}>
         <ListItemAvatar>
            <Avatar>
               <DeactivateAccountIcon />
            </Avatar>
         </ListItemAvatar>
         <ListItemText primary="Deactivate Account" />
      </ListItem>
   );
}
