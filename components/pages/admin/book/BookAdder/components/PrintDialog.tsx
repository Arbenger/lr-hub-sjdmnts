import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   DialogContentText,
} from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectBookAdder } from 'services/redux/selectors';
import { clearData, triggerDialog } from 'services/redux/slices/bookAdder';
import { useRouter } from 'next/router';
import { RefObject } from 'react';

interface Props {
   fileRef: RefObject<HTMLInputElement>;
}

export default function PrintConfirmationDialog({ fileRef }: Props) {
   const router = useRouter();
   const dispatch = useAppDispatch();
   const { fetchedData, dialogs } = useAppSelector(selectBookAdder);

   const handleClose = () => {
      dispatch(clearData());

      fileRef.current.value = null;

      dispatch(
         triggerDialog({
            dialog: 'print',
            isOpen: false,
         })
      );
   };

   const handleConfirm = async () => {
      handleClose();

      router.push({
         pathname: '/admin/book/qr-code-generator',
         query: {
            ...fetchedData,
         },
      });
   };

   return (
      <Dialog open={dialogs.print} onClose={handleClose}>
         <DialogTitle>Confirmation</DialogTitle>

         <DialogContent>
            <DialogContentText>
               Do you want to print the QR Code of the books?
            </DialogContentText>
         </DialogContent>

         <DialogActions>
            <Button color="primary" onClick={handleClose}>
               Cancel
            </Button>

            <Button
               color="primary"
               variant="contained"
               onClick={handleConfirm}
               autoFocus
            >
               Confirm
            </Button>
         </DialogActions>
      </Dialog>
   );
}
