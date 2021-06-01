import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { ListAvatar, BookIcon, ErrorIcon, UndoIcon } from "./styled";
import { Item as ItemType } from "../../types";
import { Templates } from "./types";
import ReactTimeAgo from "react-time-ago";

export default function Item({ type, createdAt }: ItemType) {
  const templates: Templates = {
    borrow: { text: "You requested to borrow a book.", icon: <BookIcon /> },
    return: { text: "You requested to return a book.", icon: <UndoIcon /> },
    resolve: {
      text: "You requested to resolve a penalty.",
      icon: <ErrorIcon />,
    },
  };

  return (
    <ListItem button>
      <ListItemAvatar>
        <ListAvatar>{templates[type].icon}</ListAvatar>
      </ListItemAvatar>
      <ListItemText
        primary={templates[type].text}
        secondary={<ReactTimeAgo date={createdAt} locale="en-US" />}
      />
    </ListItem>
  );
}
