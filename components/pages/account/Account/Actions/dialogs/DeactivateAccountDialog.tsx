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
import { triggerDialog } from 'services/redux/slices/account';
import { authClient } from 'services/firebase/client';
import { deactivateUser } from 'services/redux/slices/user/thunks';
import { FormEvent, useMemo, useState } from 'react';

export default function DeactivateAccountDialog() {
   const dispatch = useAppDispatch();

   const { info, thunks } = useAppSelector(selectUser);
   const { dialogs } = useAppSelector(selectAccount);
   const { isPending } = thunks.deactivate;

   const [input, setInput] = useState('');

   const isMatched = useMemo(() => {
      return input === 'DEACTIVATE ACCOUNT';
   }, [input]);

   function handleClose() {
      setInput('');
      dispatch(
         triggerDialog({
            dialog: 'deactivate',
            isOpen: false,
         })
      );
   }

   async function handleContinue() {
      const response = await dispatch(deactivateUser(info.uid));
      const isFulfilled = response.payload.status === 'fulfilled';

      handleClose();

      isFulfilled && (await authClient.signOut());

      dispatch(
         triggerDialog({
            dialog: isFulfilled ? 'deactivateFulfilled' : 'deactivateRejected',
            isOpen: true,
         })
      );
   }

   function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      isMatched && handleContinue();
   }

   return (
      <Dialog open={dialogs.deactivate} onClose={handleClose}>
         <DialogTitle>Account Deactivation Confirmation</DialogTitle>

         <DialogContent>
            <DialogContentText>
               Type <strong>DEACTIVATE ACCOUNT</strong> to proceed the
               deactivation of your account. Note that you will not be able to
               access your account again once you deactivate it.
            </DialogContentText>

            <form onSubmit={handleSubmit}>
               <TextField
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  margin="dense"
                  label="Confirmation"
                  type="text"
                  autoFocus
                  fullWidth
               />
            </form>
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
