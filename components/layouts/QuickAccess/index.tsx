import { Fade, Grid, IconButton, Typography } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { triggerQuickAccess } from "redux/layoutSlice";
import { selectLayout } from "redux/selectors";
import {
  BiBookAlt as BookIcon,
  BiErrorCircle as ErrorIcon,
  BiBookBookmark as BookmarksIcon,
} from "react-icons/bi";
import {
  IoArrowUndoOutline as UndoIcon,
  IoCloseSharp as CloseIcon,
} from "react-icons/io5";
import { FaRegTimesCircle as TimesIcon } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle as LostIcon } from "react-icons/hi";
import {
  Container,
  Header,
  Title,
  MenuContainer,
  Menu,
  ItemContainer,
  ItemCaption,
  ItemIcon,
} from "./styled";
import { Item } from "./types";
import Link from "next/link";
import Backdrop from "components/layouts/Backdrop";

export default function QuickAccess() {
  const dispatch = useAppDispatch();
  const { quickAccess } = useAppSelector(selectLayout);

  const items: Item[] = [
    {
      title: "Borrowed Books",
      link: "/book/borrowed",
      icon: <BookIcon />,
    },
    {
      title: "Returned Books",
      link: "/book/returned",
      icon: <UndoIcon />,
    },
    {
      title: "Expired Books",
      link: "/book/expired",
      icon: <TimesIcon />,
    },
    {
      title: "Lost Books",
      link: "/book/lost",
      icon: <LostIcon />,
    },
    {
      title: "Bookmarks",
      link: "/book/bookmarks",
      icon: <BookmarksIcon />,
    },
    {
      title: "Penalties",
      link: "/penalties",
      icon: <ErrorIcon />,
    },
  ];

  const handleClose = () => {
    dispatch(triggerQuickAccess("close"));
  };

  if (!quickAccess.isOpen) {
    return null;
  }

  return (
    <Fade in={true}>
      <Container>
        <Backdrop onClick={handleClose} />
        <MenuContainer>
          <Menu>
            <Header>
              <Title variant="h5">Quick Access</Title>
              <IconButton edge="end" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Header>
            <Grid container spacing={2}>
              {items.map((item) => (
                <Grid key={item.title} item xs={12} sm={6}>
                  <Link href={item.link}>
                    <ItemContainer onClick={handleClose}>
                      <ItemIcon className="item-icon">{item.icon}</ItemIcon>
                      <ItemCaption>
                        <Typography variant="h6">{item.title}</Typography>
                      </ItemCaption>
                    </ItemContainer>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Menu>
        </MenuContainer>
      </Container>
    </Fade>
  );
}
