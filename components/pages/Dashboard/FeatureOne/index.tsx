import { Grid, Typography } from "@material-ui/core";
import { useAppSelector } from "redux/hooks";
import { selectLayout } from "redux/selectors";
import {
  RootContainer,
  Wrapper,
  Title,
  BackgroundDesign,
  ItemContainer,
  ItemCaption,
  ItemDisplay,
} from "./styled";
import {
  BiBookAlt as BookIcon,
  BiErrorCircle as ErrorIcon,
  BiBookBookmark as BookmarksIcon,
} from "react-icons/bi";
import { IoArrowUndoOutline as UndoIcon } from "react-icons/io5";
import { FaRegTimesCircle as TimesIcon } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle as LostIcon } from "react-icons/hi";
import { Item } from "./types";
import Link from "next/link";

export default function FeatureOne() {
  const { drawer } = useAppSelector(selectLayout);
  const items: Item[] = [
    {
      title: "Borrowed Books",
      quantity: 5,
      link: "/book/borrowed",
      icon: <BookIcon />,
    },
    {
      title: "Returend Books",
      quantity: 15,
      link: "/book/returned",
      icon: <UndoIcon />,
    },
    {
      title: "Expired Books",
      quantity: 2,
      link: "/book/expired",
      icon: <TimesIcon />,
    },
    {
      title: "Lost Books",
      quantity: 0,
      link: "/book/lost",
      icon: <LostIcon />,
    },
    {
      title: "Bookmarks",
      quantity: 12,
      link: "/book/bookmarks",
      icon: <BookmarksIcon />,
    },
    {
      title: "Penalties",
      quantity: 1,
      link: "/penalties",
      icon: <ErrorIcon />,
    },
  ];

  return (
    <RootContainer>
      <BackgroundDesign />
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
