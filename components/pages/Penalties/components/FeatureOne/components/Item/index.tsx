import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { ListAvatar, BookIcon, UndoIcon } from "./styled";
import { Item as ItemType } from "../../types";
import { Templates } from "./types";
import ReactTimeAgo from "react-time-ago";

export default function Item({ type, createdAt }: ItemType) {
  const templates: Templates = {
    lost: { text: "You've lost a book.", icon: <BookIcon /> },
    return: {
      text: "You've failed to return a book within the time limit.",
      icon: <UndoIcon />,
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
