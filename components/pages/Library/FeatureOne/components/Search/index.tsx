import { FormEvent } from "react";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { Container, IconButton, Form, TextField } from "./styled";
import { Props } from "./types";

export default function Search({
  searchInput,
  setSearchInput,
  beginSearch,
}: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    beginSearch();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <IconButton type="submit" edge="start">
          <SearchIcon />
        </IconButton>
        <TextField label="Search" />
      </Form>
    </Container>
  );
}
