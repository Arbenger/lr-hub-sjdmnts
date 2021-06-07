import { ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setSearchInput } from "redux/librarySlice";
import { selectLibrary } from "redux/selectors";
import { SearchIcon } from "components/Icons";
import { Container, IconButton, Form } from "./styled";
import { TextField } from "@material-ui/core";
import { Props } from "./types";

export default function Search({ beginSearch }: Props) {
  const dispatch = useAppDispatch();
  const { searchInput } = useAppSelector(selectLibrary);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    beginSearch();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInput(event.target.value));
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
