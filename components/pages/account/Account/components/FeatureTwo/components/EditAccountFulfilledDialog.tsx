import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   DialogContentText,
} from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectAccount } from 'services/redux/selectors';
import { triggerDialog } from 'services/redux/slices/account';

export default function EditAccountFulfilledDialog() {
   const dispatch = useAppDispatch();
   const { dialogs } = useAppSelector(selectAccount);

   const handleClose = () => {
      dispatch(
         triggerDialog({
            target: 'editAccountFulfilled',
            state: {
               isOpen: false,
            },
         })
      );
   };

   return (
      <Dialog open={dialogs.editAccountFulfilled.isOpen} onClose={handleClose}>
         <DialogTitle>Notification</DialogTitle>

         <DialogContent>
            <DialogContentText>
               Your request to edit your account information was successful.
            </DialogContentText>
         </DialogContent>

         <DialogActions>
            <Button
               color="primary"
               variant="contained"
               onClick={handleClose}
               autoFocus
            >
               Close
            </Button>
         </DialogActions>
      </Dialog>
   );
}
