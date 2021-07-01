import {
   InputLabel,
   IconButton,
   MenuItem,
   Select,
   FormControl,
   Box,
   Paper,
} from '@material-ui/core';
import { FilterIcon } from 'components/Icons';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectLibrary } from 'services/redux/selectors';
import { FilterBy as FilterByType } from 'services/redux/slices/library/types';
import { setConfig, filterBooks } from 'services/redux/slices/library';

export default function FilterBy() {
   const dispatch = useAppDispatch();
   const { config } = useAppSelector(selectLibrary);

   const filterByOptions = [
      { title: 'All', value: 'all' },
      { title: 'Bookmarked', value: 'bookmarked' },
   ];

   function handleChange(event: ChangeEvent<HTMLSelectElement>) {
      const filterBy = event.target.value as FilterByType;
      dispatch(setConfig({ filterBy }));
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
               <IconButton edge="start">
                  <FilterIcon />
               </IconButton>
            </Box>

            <FormControl fullWidth>
               <InputLabel>Filter By</InputLabel>
               <Select
                  color="primary"
                  value={config.filterBy}
                  onChange={handleChange}
                  fullWidth
               >
                  {filterByOptions.map((option) => (
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
