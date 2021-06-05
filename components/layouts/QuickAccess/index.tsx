import {
  Slide,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  List,
  ListItem,
  ListItemText,
  Dialog,
  Avatar,
  ListItemAvatar,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectLayout } from "redux/selectors";
import { triggerQuickAccess } from "redux/layoutSlice";
import {
  CloseIcon,
  BookIcon,
  UndoIcon,
  TimesIcon,
  LostIcon,
  BookmarksIcon,
  ErrorIcon,
} from "./styled";
import { Item } from "./types";
import React from "react";
import Link from "next/link";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
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

  return (
    <Dialog
      fullScreen
      open={quickAccess.isOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">Quick Access</Typography>
        </Toolbar>
      </AppBar>

      <List>
        {items.map((item) => (
          <Link href={item.link} key={item.title}>
            <ListItem button onClick={handleClose}>
              <ListItemAvatar>
                <Avatar>{item.icon}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Dialog>
  );
}
