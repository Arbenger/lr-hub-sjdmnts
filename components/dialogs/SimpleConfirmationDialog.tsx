import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
} from '@material-ui/core';

interface Props {
   isOpen: boolean;
   title: string;
   content: string;
   confirmText?: string;
   rejectText?: string;
   handleReject: () => void;
   handleConfirm: () => void;
}

export default function SimpleConfirmationDialog({
   isOpen,
   title,
   content,
   confirmText,
   rejectText,
   handleReject,
   handleConfirm,
}: Props) {
   return (
      <Dialog open={isOpen} onClose={handleReject}>
         <DialogTitle>{title}</DialogTitle>
         <DialogContent>
            <DialogContentText>{content}</DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button onClick={handleReject} color="primary">
               {rejectText ? rejectText : 'Reject'}
            </Button>
            <Button onClick={handleConfirm} color="primary" autoFocus>
               {confirmText ? confirmText : 'Confirm'}
            </Button>
         </DialogActions>
      </Dialog>
   );
}
