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
   const account = useAppSelector(selectAccount);
   const { isOpen } = account.dialogs.editFulfilled;

   const handleClose = () => {
      dispatch(
         triggerDialog({
            dialog: 'editFulfilled',
            state: {
               isOpen: false,
            },
         })
      );
   };

   return (
      <Dialog open={isOpen} onClose={handleClose}>
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
