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
import { uploadCover } from 'services/redux/slices/bookAdder/thunks';
import { triggerDialog } from 'services/redux/slices/bookAdder';
import { REJECTED } from 'utils/variables';
import { RefObject } from 'react';

interface Props {
   fileRef: RefObject<HTMLInputElement>;
}

export default function CoverDialog({ fileRef }: Props) {
   const dispatch = useAppDispatch();
   const { fetchedData, dialogs, pendings } = useAppSelector(selectBookAdder);

   const handleClose = () => {
      dispatch(
         triggerDialog({
            dialog: 'cover',
            isOpen: false,
         })
      );
   };

   const handleConfirm = async () => {
      const file = fileRef.current.files[0];

      const response = await dispatch(
         uploadCover({ id: fetchedData.bookId, file })
      );

      handleClose();

      if (response.payload.status === REJECTED)
         alert("Failed to upload book's cover");

      dispatch(
         triggerDialog({
            dialog: 'print',
            isOpen: true,
         })
      );
   };

   return (
      <Dialog open={dialogs.cover} onClose={handleClose}>
         <DialogTitle>Confirmation</DialogTitle>

         <DialogContent>
            <DialogContentText>
               Do you want to proceed uploading the book's cover?
            </DialogContentText>
         </DialogContent>

         <DialogActions>
            <Button
               color="primary"
               onClick={handleClose}
               disabled={pendings.uploadingCover}
            >
               Cancel
            </Button>

            <Button
               color="primary"
               variant="contained"
               onClick={handleConfirm}
               disabled={pendings.uploadingCover}
               autoFocus
            >
               {pendings.uploadingCover ? '...' : 'Confirm'}
            </Button>
         </DialogActions>
      </Dialog>
   );
}
