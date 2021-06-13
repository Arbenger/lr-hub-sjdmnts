import { ChangeEvent } from 'react';
import { InputLabel, MenuItem, Select, FormControl } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectLibrary } from 'services/redux/selectors';
import { setFilterBy } from 'services/redux/slices/library';
import { FilterIcon } from 'components/Icons';
import { Container, IconButton } from './styled';
import { FilterBy as FilterByType } from 'services/redux/slices/library/types';
import { fetchBook } from 'services/redux/slices/library/thunks';

export default function FilterBy() {
   const dispatch = useAppDispatch();
   const state = useAppSelector(selectLibrary);
   const filterByOptions = [
      { title: 'All', value: 'all' },
      { title: 'Bookmarked', value: 'bookmarked' },
      { title: 'Previously Borrowed', value: 'previouslyBorrowed' },
   ];

   const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      dispatch(setFilterBy(event.target.value as FilterByType));
      dispatch(fetchBook());
   };

   return (
      <Container>
         <IconButton edge="start">
            <FilterIcon />
         </IconButton>

         <FormControl fullWidth>
            <InputLabel id="filter-by-label">Filter By</InputLabel>
            <Select
               labelId="filter-by-label"
               id="filter-by-select"
               color="primary"
               value={state.filterBy}
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
      </Container>
   );
}
