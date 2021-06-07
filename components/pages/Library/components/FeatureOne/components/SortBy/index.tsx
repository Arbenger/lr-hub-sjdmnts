import { ChangeEvent } from "react";
import { InputLabel, MenuItem, Select, FormControl } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectLibrary } from "redux/selectors";
import { setSortBy, setSortDirection } from "redux/librarySlice";
import { AscendingIcon, DescendingIcon } from "components/Icons";
import { Container, IconButton } from "./styled";
import { SortByOption, SortByValue, SortDirectionValue } from "./types";

export default function SortBy() {
  const dispatch = useAppDispatch();
  const { sortBy, sortDirection } = useAppSelector(selectLibrary);

  const sortByOptions: SortByOption[] = [
    { title: "Title", value: "title" },
    { title: "Author", value: "author" },
    { title: "Number of Pages", value: "numberOfPages" },
    { title: "Popularity", value: "popularity" },
  ];

  const handleClick = () => {
    const newSortDirection: SortDirectionValue =
      sortDirection === "ascending" ? "descending" : "ascending";
    dispatch(setSortDirection(newSortDirection));
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(event.target.value as SortByValue));
  };

  return (
    <Container>
      <IconButton edge="start" onClick={handleClick}>
        {sortDirection === "ascending" ? <AscendingIcon /> : <DescendingIcon />}
      </IconButton>

      <FormControl fullWidth>
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by-select"
          color="primary"
          value={sortBy}
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
