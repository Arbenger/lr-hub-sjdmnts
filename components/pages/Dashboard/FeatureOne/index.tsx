import { Grid, GridSize } from "@material-ui/core";
import { ReactNode } from "react";
import { RootContainer, Wrapper, Title, BackgroundDesign } from "./styled";

import BorrowedBooks from "./components/BorrowedBooks";
import ReturnedBooks from "./components/ReturnedBooks";
import Bookmarks from "./components/Bookmarks";
import ExpiredBooks from "./components/ExpiredBooks";
import Penalties from "./components/Penalties";
import LostBooks from "./components/LostBooks";

export default function FeatureOne() {
  interface Item {
    component: ReactNode;
    sizes: GridSize[];
  }
  const items: Item[] = [
    {
      component: <BorrowedBooks />,
      sizes: [12, 6, 4, 4],
    },
    {
      component: <ReturnedBooks />,
      sizes: [12, 6, 4, 4],
    },
    {
      component: <ExpiredBooks />,
      sizes: [12, 6, 4, 4],
    },
    {
      component: <LostBooks />,
      sizes: [12, 6, 4, 4],
    },
    {
      component: <Bookmarks />,
      sizes: [12, 6, 4, 4],
    },
    {
      component: <Penalties />,
      sizes: [12, 6, 4, 4],
    },
  ];

  return (
    <RootContainer>
      <BackgroundDesign />
      <Wrapper maxWidth="lg">
        <Title variant="h4">Dashboard</Title>
        <Grid container spacing={2}>
          {items.map(({ component, sizes }, index) => (
            <Grid
              item
              key={index}
              xs={sizes[0]}
              sm={sizes[1]}
              md={sizes[2]}
              lg={sizes[3]}
            >
              {component}
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </RootContainer>
  );
}
