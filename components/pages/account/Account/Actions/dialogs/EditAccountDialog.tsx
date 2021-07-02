import {
   Grid,
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   TextField,
   FormControl,
   InputLabel,
   Select,
   MenuItem,
} from '@material-ui/core';
import { useState, FormEvent, ChangeEvent, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectAccount, selectUser } from 'services/redux/selectors';
import { triggerDialog } from 'services/redux/slices/account';
import { editUser } from 'services/redux/slices/user/thunks';

export default function EditAccountDialog() {
   const dispatch = useAppDispatch();

   const { dialogs } = useAppSelector(selectAccount);
   const { info, thunks } = useAppSelector(selectUser);
   const { isPending } = thunks.edit;

   const [displayName, setDisplayName] = useState(info.displayName);
   const [occupation, setOccupation] = useState(info.occupation);

   const isChanged = useMemo(() => {
      return occupation !== info.occupation || displayName !== info.displayName;
   }, [displayName, occupation]);

   useEffect(() => {
      setDisplayName(info.displayName);
      setOccupation(info.occupation);
   }, [info.displayName, info.occupation]);

   function handleClose() {
      dispatch(
         triggerDialog({
            dialog: 'edit',
            isOpen: false,
         })
      );
   }

   function handleChange(event: ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target;

      if (name === 'displayName') setDisplayName(value);
      if (name === 'occupation') setOccupation(value);
   }

   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      if (isChanged) {
         const response = await dispatch(
            editUser({
               uid: info.uid,
               displayName,
               occupation,
            })
         );
         const isFulfilled = response.payload.status === 'fulfilled';

         handleClose();

         if (!isFulfilled) {
            setDisplayName(info.displayName);
            setOccupation(info.occupation);
         }

         dispatch(
            triggerDialog({
               dialog: isFulfilled ? 'editFulfilled' : 'editRejected',
               isOpen: true,
            })
         );
      }
   }

   return (
      <Dialog open={dialogs.edit} onClose={handleClose}>
         <form onSubmit={handleSubmit}>
            <DialogTitle>Edit Account</DialogTitle>

            <DialogContent>
               <Grid container spacing={2}>
                  <Grid item xs={12}>
                     <TextField
                        value={displayName}
                        onChange={handleChange}
                        name="displayName"
                        label="Display Name"
                        margin="dense"
                        required
                        fullWidth
                     />
                  </Grid>

                  <Grid item xs={12}>
                     <FormControl fullWidth>
                        <InputLabel>Occupation</InputLabel>
                        <Select
                           value={occupation}
                           onChange={handleChange}
                           name="occupation"
                        >
                           <MenuItem value="Unknown">Unknown</MenuItem>
                           <MenuItem value="Student">Student</MenuItem>
                           <MenuItem value="Teacher">Teacher</MenuItem>
                        </Select>
                     </FormControl>
                  </Grid>
               </Grid>
            </DialogContent>

            <DialogActions>
               <Button type="button" color="primary" onClick={handleClose}>
                  Cancel
               </Button>

               <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={!isChanged || isPending || !displayName}
               >
                  {isPending ? '...' : 'Submit'}
               </Button>
            </DialogActions>
         </form>
      </Dialog>
   );
}
