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
import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectAccount } from 'services/redux/selectors';
import { triggerDialog } from 'services/redux/slices/account';
import { fetchEditAccountByUID } from 'services/redux/slices/account/thunks';

export default function EditAccountDialog() {
   const dispatch = useAppDispatch();
   const { info, dialogs } = useAppSelector(selectAccount);
   const { isOpen, isLoading } = dialogs.editAccount;
   const [displayName, setDisplayName] = useState(info.displayName);
   const [occupation, setOccupation] = useState(info.occupation);

   useEffect(() => {
      setDisplayName(info.displayName);
      setOccupation(info.occupation);
   }, [info]);

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      if (name === 'displayName') setDisplayName(value);
      if (name === 'occupation') setOccupation(value);
   };

   const handleClose = () => {
      dispatch(
         triggerDialog({
            target: 'editAccount',
            state: {
               isOpen: false,
            },
         })
      );
   };

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (occupation !== info.occupation || displayName !== info.displayName) {
         const response = await dispatch(
            fetchEditAccountByUID({
               accountUID: info.uid,
               displayName,
               occupation,
            })
         );
         if (response.payload.status === 'rejected') {
            setDisplayName(info.displayName);
            setOccupation(info.occupation);
         }
      }
   };

   return (
      <Dialog open={isOpen} onClose={handleClose}>
         <form onSubmit={handleSubmit}>
            <DialogTitle>Edit Account Information</DialogTitle>

            <DialogContent>
               <Grid container spacing={2}>
                  <Grid item xs={12}>
                     <TextField
                        name="displayName"
                        label="Display Name"
                        margin="dense"
                        required
                        fullWidth
                        value={displayName}
                        onChange={handleChange}
                     />
                  </Grid>

                  <Grid item xs={12}>
                     <FormControl fullWidth>
                        <InputLabel>Occupation</InputLabel>
                        <Select
                           name="occupation"
                           value={occupation}
                           onChange={handleChange}
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
                  disabled={
                     (occupation === info.occupation &&
                        displayName === info.displayName) ||
                     isLoading ||
                     !displayName
                  }
               >
                  {isLoading ? '...' : 'Submit'}
               </Button>
            </DialogActions>
         </form>
      </Dialog>
   );
}
