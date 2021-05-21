import { ChangeEvent } from "react";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import {
  AiOutlineSortAscending as AscendingIcon,
  AiOutlineSortDescending as DescendingIcon,
} from "react-icons/ai";
import { Container, IconButton, FormControl } from "./styled";
import { SortByOption, SortByValue, Props } from "./types";

export default function SortBy({
  sortBy,
  sortDirection,
  setSortBy,
  setSortDirection,
}: Props) {
  const sortByOptions: SortByOption[] = [
    { title: "Title", value: "title" },
    { title: "Author", value: "author" },
    { title: "Number of Pages", value: "numberOfPages" },
    { title: "Popularity", value: "popularity" },
  ];

  const handleClick = () => {
    setSortDirection(
      sortDirection === "ascending" ? "descending" : "ascending"
    );
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as SortByValue);
  };

  return (
    <Container>
      <IconButton edge="start" onClick={handleClick}>
        {sortDirection === "ascending" ? <AscendingIcon /> : <DescendingIcon />}
      </IconButton>

      <FormControl>
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by-select"
          value={sortBy}
          onChange={handleChange}
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
