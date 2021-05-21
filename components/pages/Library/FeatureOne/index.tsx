import { useState } from "react";
import { Grid } from "@material-ui/core";
import {
  BackgroundDesign,
  Container,
  Wrapper,
  Title,
  ToolContainer,
} from "./styled";
import { SortByValue, SortDirectionValue } from "./components/SortBy/types";
import { FilterByValue } from "./components/FilterBy/types";
import SortBy from "./components/SortBy";
import FilterBy from "./components/FilterBy";
import Search from "./components/Search";

export default function FeatureOne() {
  const [sortDirection, setSortDirection] =
    useState<SortDirectionValue>("ascending");
  const [sortBy, setSortBy] = useState<SortByValue>("title");
  const [filterBy, setFilterBy] = useState<FilterByValue>("all");
  const [searchInput, setSearchInput] = useState<string>();

  const beginSearch = () => {};

  return (
    <Container>
      <BackgroundDesign />
      <Wrapper maxWidth="lg">
        <Title variant="h4">Library</Title>
        <ToolContainer>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <SortBy
                sortBy={sortBy}
                sortDirection={sortDirection}
                setSortBy={setSortBy}
                setSortDirection={setSortDirection}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <FilterBy filterBy={filterBy} setFilterBy={setFilterBy} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Search
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                beginSearch={beginSearch}
              />
            </Grid>
          </Grid>
        </ToolContainer>
      </Wrapper>
    </Container>
  );
}
