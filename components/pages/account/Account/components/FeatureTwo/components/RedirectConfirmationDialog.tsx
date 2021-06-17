import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
} from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { triggerDialog } from 'services/redux/slices/account';
import { selectAccount } from 'services/redux/selectors';
import { useRouter } from 'next/router';

export default function RedirectConfirmationDialog() {
   const router = useRouter();
   const dispatch = useAppDispatch();
   const account = useAppSelector(selectAccount);
   const { isOpen } = account.dialogs.redirect;

   const handleClose = () => {
      dispatch(triggerDialog({ dialog: 'redirect', state: { isOpen: false } }));
   };

   const handleRedirectToHome = async () => {
      await router.push('/');
      handleClose();
   };

   const handleRedirectToLogin = async () => {
      await router.push('/account/login');
      handleClose();
   };

   return (
      <Dialog open={isOpen} onClose={handleClose}>
         <DialogTitle>Notification</DialogTitle>

         <DialogContent>
            <DialogContentText>
               The deactivation of your account was successful. Choose where to
               be redirected
            </DialogContentText>
         </DialogContent>

         <DialogActions>
            <Button onClick={handleRedirectToHome} color="primary">
               Home
            </Button>

            <Button onClick={handleRedirectToLogin} color="primary">
               Login
            </Button>
         </DialogActions>
      </Dialog>
   );
}
