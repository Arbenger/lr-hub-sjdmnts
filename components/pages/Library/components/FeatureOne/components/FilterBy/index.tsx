import { ChangeEvent } from "react";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { FiFilter as FilterIcon } from "react-icons/fi";
import { Container, IconButton, FormControl } from "./styled";
import { FilterByOption, FilterByValue } from "./types";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectLibrary } from "redux/selectors";
import { setFilterBy } from "redux/librarySlice";

export default function FilterBy() {
  const dispatch = useAppDispatch();
  const { filterBy } = useAppSelector(selectLibrary);
  const filterByOptions: FilterByOption[] = [
    { title: "All", value: "all" },
    { title: "Bookmarked", value: "bookmarked" },
    { title: "Previously Borrowed", value: "previouslyBorrowed" },
  ];

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterBy(event.target.value as FilterByValue));
  };

  return (
    <Container>
      <IconButton edge="start">
        <FilterIcon />
      </IconButton>

      <FormControl>
        <InputLabel id="filter-by-label">Filter By</InputLabel>
        <Select
          labelId="filter-by-label"
          id="filter-by-select"
          value={filterBy}
          onChange={handleChange}
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
