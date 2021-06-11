import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setSearchInput } from 'redux/slices/library';
import { selectLibrary } from 'redux/selectors';
import { SearchIcon } from 'components/Icons';
import { Container, IconButton, Form } from './styled';
import { TextField } from '@material-ui/core';
import { fetchBook } from 'redux/slices/library/thunks';

export default function Search() {
   const dispatch = useAppDispatch();
   const { searchInput } = useAppSelector(selectLibrary);

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      dispatch(fetchBook());
   };

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchInput(event.target.value));
      dispatch(fetchBook());
   };

   return (
      <Container>
         <Form onSubmit={handleSubmit} autoComplete="off">
            <IconButton type="submit" edge="start">
               <SearchIcon />
            </IconButton>
            <TextField
               label="Search"
               color="primary"
               value={searchInput}
               onChange={handleChange}
               fullWidth
            />
         </Form>
      </Container>
   );
}
