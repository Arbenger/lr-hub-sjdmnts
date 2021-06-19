import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   DialogContentText,
} from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectBookInputer } from 'services/redux/selectors';
import { uploadMetaData } from 'services/redux/slices/bookInputer/thunks';
import { triggerDialog } from 'services/redux/slices/bookInputer';
import { NO_DESCRIPTION, REJECTED } from 'utils/variables';
import { RefObject } from 'react';

interface Props {
   fileRef: RefObject<HTMLInputElement>;
}

export default function MetaDataDialog({ fileRef }: Props) {
   const dispatch = useAppDispatch();
   const { data, dialogs, pendings } = useAppSelector(selectBookInputer);

   const handleClose = () => {
      dispatch(
         triggerDialog({
            dialog: 'metaData',
            isOpen: false,
         })
      );
   };

   const handleConfirm = async () => {
      const { title, copies, description: des } = data;
      const description = des || NO_DESCRIPTION;
      const dateAdded = Date.now().toString();

      const response = await dispatch(
         uploadMetaData({
            title,
            copies,
            description,
            dateAdded,
         })
      );

      handleClose();

      if (response.payload.status === REJECTED)
         return alert("Failed to upload book's metadata!");

      if (fileRef.current.files.length) {
         return dispatch(
            triggerDialog({
               dialog: 'cover',
               isOpen: true,
            })
         );
      }

      dispatch(
         triggerDialog({
            dialog: 'print',
            isOpen: true,
         })
      );
   };

   return (
      <Dialog open={dialogs.metaData} onClose={handleClose}>
         <DialogTitle>Confirmation</DialogTitle>

         <DialogContent>
            <DialogContentText>
               Do you want to proceed uploading the metadata of the book?
            </DialogContentText>
         </DialogContent>

         <DialogActions>
            <Button
               color="primary"
               onClick={handleClose}
               disabled={pendings.uploadingMetaData}
            >
               Cancel
            </Button>

            <Button
               color="primary"
               variant="contained"
               onClick={handleConfirm}
               disabled={pendings.uploadingMetaData}
               autoFocus
            >
               {pendings.uploadingMetaData ? '...' : 'Confirm'}
            </Button>
         </DialogActions>
      </Dialog>
   );
}
