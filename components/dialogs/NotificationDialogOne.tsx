import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   DialogContentText,
} from '@material-ui/core';

interface Props {
   isOpen: boolean;
   onClose: any;
   contentText: string;
}

export default function NotificationDialogOne({
   isOpen,
   onClose,
   contentText,
}: Props) {
   return (
      <Dialog open={isOpen} onClose={onClose}>
         <DialogTitle>Notification</DialogTitle>

         <DialogContent>
            <DialogContentText>{contentText}</DialogContentText>
         </DialogContent>

         <DialogActions>
            <Button
               color="primary"
               variant="contained"
               onClick={onClose}
               autoFocus
            >
               Close
            </Button>
         </DialogActions>
      </Dialog>
   );
}
