import {
   InputLabel,
   IconButton,
   MenuItem,
   Select,
   FormControl,
   Box,
   Paper,
} from '@material-ui/core';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectLibrary } from 'services/redux/selectors';
import { setConfig, filterBooks } from 'services/redux/slices/library';
import { AscendingIcon, DescendingIcon } from 'components/Icons';

export default function SortBy() {
   const dispatch = useAppDispatch();
   const { config } = useAppSelector(selectLibrary);

   const sortByOptions = [
      { title: 'Title', value: 'title' },
      { title: 'Latest', value: 'latest' },
      { title: 'Available Copies', value: 'availableCopies' },
   ];

   function handleClick() {
      const sortDirection = config.sortDirection === 'asc' ? 'desc' : 'asc';
      dispatch(setConfig({ sortDirection }));
      dispatch(filterBooks());
   }

   function handleChange(event: ChangeEvent<HTMLSelectElement>) {
      const sortBy = event.target.value;
      dispatch(setConfig({ sortBy }));
      dispatch(filterBooks());
   }

   return (
      <Paper>
         <Box
            padding={2}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
         >
            <Box marginRight={1}>
               <IconButton edge="start" onClick={handleClick}>
                  {config.sortDirection === 'asc' ? (
                     <AscendingIcon />
                  ) : (
                     <DescendingIcon />
                  )}
               </IconButton>
            </Box>

            <FormControl fullWidth>
               <InputLabel>Sort By</InputLabel>
               <Select
                  color="primary"
                  value={config.sortBy}
                  onChange={handleChange}
                  fullWidth
               >
                  {sortByOptions.map((option) => (
                     <MenuItem key={option.value} value={option.value}>
                        {option.title}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
         </Box>
      </Paper>
   );
}
