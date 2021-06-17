import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   TextField,
} from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectAccount, selectUser } from 'services/redux/selectors';
import { ChangeEvent, useState } from 'react';
import { triggerDialog } from 'services/redux/slices/account';
import { authClient } from 'services/firebase/client';
import { deactivateUser } from 'services/redux/slices/user/thunks';

export default function DeactivateAccountDialog() {
   const dispatch = useAppDispatch();
   const user = useAppSelector(selectUser);
   const account = useAppSelector(selectAccount);
   const { info } = user;
   const { isOpen } = account.dialogs.deactivate;
   const { isPending } = user.thunks.deactivate;
   const [input, setInput] = useState('');
   const [isMatched, setIsMatched] = useState(false);

   const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      setInput(target.value);
      setIsMatched(target.value === 'DEACTIVATE ACCOUNT');
   };

   const handleClose = () => {
      setInput('');
      dispatch(
         triggerDialog({
            dialog: 'deactivate',
            state: {
               isOpen: false,
            },
         })
      );
   };

   const handleContinue = async () => {
      const response = await dispatch(deactivateUser(info.uid));

      if (response.payload.status === 'fulfilled') {
         await authClient.signOut();

         handleClose();

         dispatch(
            triggerDialog({
               dialog: 'redirect',
               state: {
                  isOpen: true,
               },
            })
         );
      }
   };

   return (
      <Dialog open={isOpen} onClose={handleClose}>
         <DialogTitle>Account Deactivation Confirmation</DialogTitle>

         <DialogContent>
            <DialogContentText>
               Type <strong>DEACTIVATE ACCOUNT</strong> to proceed the
               deactivation of your account. Note that you will not be able to
               access your account again once you deactivate it.
            </DialogContentText>

            <TextField
               autoFocus
               margin="dense"
               label="Confirmation"
               type="email"
               fullWidth
               onChange={handleChange}
               value={input}
            />
         </DialogContent>

         <DialogActions>
            <Button onClick={handleClose} color="primary">
               Cancel
            </Button>

            <Button
               color="primary"
               variant="contained"
               disabled={!isMatched || isPending}
               onClick={handleContinue}
               autoFocus
            >
               {isPending ? '...' : 'Continue'}
            </Button>
         </DialogActions>
      </Dialog>
   );
}
