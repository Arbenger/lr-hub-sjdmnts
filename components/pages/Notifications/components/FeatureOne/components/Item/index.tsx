import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { ListAvatar, BookIcon, UndoIcon, ErrorIcon } from "./styled";
import { Item as ItemType } from "../../types";
import { Templates } from "./types";
import ReactTimeAgo from "react-time-ago";

export default function item({ type, createdAt }: ItemType) {
  const templates: Templates = {
    borrowAccepted: {
      text: "Your request to borrow a book was accepted.",
      icon: <BookIcon />,
    },
    borrowDenied: {
      text: "Your request to borrow a book was denied.",
      icon: <BookIcon />,
    },
    returnAccepted: {
      text: "Your request to return a book was accepted.",
      icon: <UndoIcon />,
    },
    returnDenied: {
      text: "Your request to return a book was denied.",
      icon: <UndoIcon />,
    },
    resolveAccepted: {
      text: "Your request to resolve a penalty was accepted.",
      icon: <ErrorIcon />,
    },
    resolveDenied: {
      text: "Your request to resolve a penalty was accepted.",
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
