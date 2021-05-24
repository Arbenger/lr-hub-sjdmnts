import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { ListAvatar } from "./styled";
import { BiBook as BookIcon } from "react-icons/bi";

import ReactTimeAgo from "react-time-ago";

interface Props {
  createdAt: Date;
}

export default function Barrow({ createdAt }: Props) {
  return (
    <ListItem button>
      <ListItemAvatar>
        <ListAvatar>
          <BookIcon />
        </ListAvatar>
      </ListItemAvatar>
      <ListItemText
        primary="You requested to borrow a book."
        secondary={<ReactTimeAgo date={createdAt} locale="en-US" />}
      />
    </ListItem>
  );
}
