import { Grid } from "@material-ui/core";
import { ReactNode } from "react";
import { RootContainer, Wrapper, Title, BackgroundDesign } from "./styled";

import BorrowedBooks from "./components/BorrowedBooks";
import ReturnedBooks from "./components/ReturnedBooks";
import Bookmarks from "./components/Bookmarks";
import ExpiredBooks from "./components/ExpiredBooks";
import Penalties from "./components/Penalties";
import LostBooks from "./components/LostBooks";
import { useAppSelector } from "redux/hooks";
import { selectLayout } from "redux/selectors";

export default function FeatureOne() {
  const {
    drawer: { isOpen },
  } = useAppSelector(selectLayout);
  const items: ReactNode[] = [
    <BorrowedBooks />,
    <ReturnedBooks />,
    <ExpiredBooks />,
    <LostBooks />,
    <Bookmarks />,
    <Penalties />,
  ];

  return (
    <RootContainer>
      <BackgroundDesign />
      <Wrapper maxWidth="lg">
        <Title variant="h4">Dashboard</Title>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={isOpen ? 6 : 4} lg={4}>
              {item}
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </RootContainer>
  );
}
