import { Grid, Typography } from "@material-ui/core";
import { useAppSelector } from "redux/hooks";
import { selectLayout } from "redux/selectors";
import { WaveBackground } from "components/designs/styled";
import {
  BorrowedBookIcon,
  ReturnedBookIcon,
  ExpiredBookIcon,
  LostBookIcon,
  BookmarkIcon,
  PenaltyIcon,
} from "components/Icons";
import {
  RootContainer,
  Wrapper,
  Title,
  ItemContainer,
  ItemCaption,
  ItemDisplay,
} from "./styled";
import { Item } from "./types";
import Link from "next/link";

export default function FeatureOne() {
  const { drawer } = useAppSelector(selectLayout);
  const items: Item[] = [
    {
      title: "Borrowed Books",
      quantity: 5,
      link: "/book/borrowed",
      icon: <BorrowedBookIcon />,
    },
    {
      title: "Returned Books",
      quantity: 15,
      link: "/book/returned",
      icon: <ReturnedBookIcon />,
    },
    {
      title: "Expired Books",
      quantity: 2,
      link: "/book/expired",
      icon: <ExpiredBookIcon />,
    },
    {
      title: "Lost Books",
      quantity: 0,
      link: "/book/lost",
      icon: <LostBookIcon />,
    },
    {
      title: "Bookmarks",
      quantity: 12,
      link: "/book/bookmarks",
      icon: <BookmarkIcon />,
    },
    {
      title: "Penalties",
      quantity: 1,
      link: "/penalties",
      icon: <PenaltyIcon />,
    },
  ];

  return (
    <RootContainer>
      <WaveBackground />
      <Wrapper maxWidth="lg">
        <Title variant="h4">Dashboard</Title>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid
              item
              key={item.title}
              xs={12}
              sm={6}
              md={drawer.isOpen ? 6 : 4}
              lg={4}
            >
              <Link href={item.link}>
                <ItemContainer>
                  <ItemCaption>
                    <Typography variant="h4">{item.quantity}</Typography>
                    <Typography variant="h6">{item.title}</Typography>
                  </ItemCaption>
                  <ItemDisplay>{item.icon}</ItemDisplay>
                </ItemContainer>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </RootContainer>
  );
}
