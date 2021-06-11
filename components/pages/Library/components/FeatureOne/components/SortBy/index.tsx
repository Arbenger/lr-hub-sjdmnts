import { ChangeEvent } from "react";
import { InputLabel, MenuItem, Select, FormControl } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectLibrary } from "redux/selectors";
import { setSortBy, setSortDirection } from "redux/slices/library";
import { AscendingIcon, DescendingIcon } from "components/Icons";
import { Container, IconButton } from "./styled";
import {
  SortBy as SortByType,
  SortDirection as SortDirectionType,
} from "redux/slices/library/types";
import { fetchBook } from "redux/slices/library/thunks";

export default function SortBy() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectLibrary);

  const sortByOptions = [
    { title: "Title", value: "title" },
    { title: "Popularity", value: "popularity" },
    { title: "Available Copies", value: "availableCopies" },
    { title: "Latest", value: "latest" },
  ];

  const handleClick = () => {
    const newSortDirection: SortDirectionType =
      state.sortDirection === "asc" ? "desc" : "asc";
    dispatch(setSortDirection(newSortDirection));
    dispatch(fetchBook());
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(event.target.value as SortByType));
    dispatch(fetchBook());
  };

  return (
    <Container>
      <IconButton edge="start" onClick={handleClick}>
        {state.sortDirection === "asc" ? <AscendingIcon /> : <DescendingIcon />}
      </IconButton>

      <FormControl fullWidth>
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by-select"
          color="primary"
          value={state.sortBy}
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
    </Container>
  );
}
