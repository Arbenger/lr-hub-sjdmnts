import { Box, Paper, Button, Grid, TextField } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectBookInputer } from 'redux/selectors';
import {
   setTitle,
   setCopies,
   setDescription,
   triggerDialog,
} from 'redux/slices/bookInputer';
import { FormEvent } from 'react';

export default function Form() {
   const dispatch = useAppDispatch();
   const state = useAppSelector(selectBookInputer);

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!state.title) return alert('The form is incomplete!');

      dispatch(triggerDialog({ target: 'proceed', action: 'open' }));
   };

   return (
      <Paper>
         <Box padding={2}>
            <form onSubmit={handleSubmit}>
               <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <TextField
                        label="Book Title"
                        value={state.title}
                        onChange={(e) => dispatch(setTitle(e.target.value))}
                        inputProps={{ maxLength: 75 }}
                        fullWidth
                     />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                     <TextField
                        type="number"
                        label="Book Copies"
                        value={state.copies}
                        onChange={(e) =>
                           dispatch(setCopies(parseInt(e.target.value || '0')))
                        }
                        InputProps={{ inputProps: { min: 0 } }}
                        fullWidth
                     />
                  </Grid>

                  <Grid item xs={12}>
                     <TextField
                        label="Book Description"
                        value={state.description}
                        onChange={(e) =>
                           dispatch(setDescription(e.target.value))
                        }
                        multiline
                        fullWidth
                     />
                  </Grid>

                  <Grid item xs={12}>
                     <Box display="flex" justifyContent="flex-end">
                        <Button
                           type="submit"
                           variant="contained"
                           color="primary"
                           disabled={state.isLoading || !state.title}
                        >
                           {state.isLoading ? '...' : 'Submit'}
                        </Button>
                     </Box>
                  </Grid>
               </Grid>
            </form>
         </Box>
      </Paper>
   );
}
