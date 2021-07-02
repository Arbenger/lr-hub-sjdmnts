import {
   ListItem,
   ListItemAvatar,
   Avatar,
   ListItemText,
} from '@material-ui/core';
import { EditAccountIcon } from 'components/Icons';
import { useAppDispatch } from 'services/redux/hooks';
import { triggerDialog } from 'services/redux/slices/account';

export default function EditAccountButton() {
   const dispatch = useAppDispatch();

   function handleClick() {
      dispatch(
         triggerDialog({
            dialog: 'edit',
            isOpen: true,
         })
      );
   }

   return (
      <ListItem button onClick={handleClick}>
         <ListItemAvatar>
            <Avatar>
               <EditAccountIcon />
            </Avatar>
         </ListItemAvatar>
         <ListItemText primary="Edit Account" />
      </ListItem>
   );
}
