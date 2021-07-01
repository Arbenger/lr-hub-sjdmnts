import { TextField, Box, IconButton, Paper } from '@material-ui/core';
import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { setConfig, filterBooks } from 'services/redux/slices/library';
import { selectLibrary } from 'services/redux/selectors';
import { SearchIcon } from 'components/Icons';

export default function Search() {
   const dispatch = useAppDispatch();
   const { config } = useAppSelector(selectLibrary);

   function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      dispatch(filterBooks());
   }

   function handleChange(event: ChangeEvent<HTMLInputElement>) {
      const searchInput = event.target.value;
      dispatch(setConfig({ searchInput }));
      dispatch(filterBooks());
   }

   return (
      <Paper>
         <Box padding={2}>
            <form onSubmit={handleSubmit} autoComplete="off">
               <Box
                  display="flex"
                  justifyContent="flexstart"
                  alignItems="center"
               >
                  <Box marginRight={1}>
                     <IconButton type="submit" edge="start">
                        <SearchIcon />
                     </IconButton>
                  </Box>

                  <TextField
                     label="Search"
                     color="primary"
                     value={config.searchInput}
                     onChange={handleChange}
                     fullWidth
                  />
               </Box>
            </form>
         </Box>
      </Paper>
   );
}
