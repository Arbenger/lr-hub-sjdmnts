import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   TextField,
} from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectAccount } from 'redux/selectors';
import { ChangeEvent, useState } from 'react';
import { clearAccountInfo, triggerDialog } from 'redux/slices/account';
import { authClient } from 'firebase/client';
import { fetchDeactivateAccountByUID } from 'redux/slices/account/thunks';

export default function DeactivateAccountModal() {
   const dispatch = useAppDispatch();
   const state = useAppSelector(selectAccount);
   const { isOpen, isLoading } = state.dialogs.deactivateAccount;
   const [isInputMatched, setIsInputMatched] = useState(false);
   const [input, setInput] = useState('');

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInput(value);
      setIsInputMatched(value === 'DEACTIVATE ACCOUNT');
   };

   const handleClose = () => {
      setInput('');
      dispatch(
         triggerDialog({
            target: 'deactivateAccount',
            state: {
               isOpen: false,
            },
         })
      );
   };

   const handleContinue = async () => {
      const response = await dispatch(
         fetchDeactivateAccountByUID(state.info.uid)
      );

      if (response.payload.status === 'fulfilled') {
         await authClient.signOut();

         dispatch(clearAccountInfo());

         dispatch(
            triggerDialog({
               target: 'deactivateAccount',
               state: {
                  isOpen: false,
               },
            })
         );

         dispatch(
            triggerDialog({
               target: 'redirect',
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
               disabled={!isInputMatched || isLoading}
               onClick={handleContinue}
               autoFocus
            >
               {isLoading ? '...' : 'Continue'}
            </Button>
         </DialogActions>
      </Dialog>
   );
}
