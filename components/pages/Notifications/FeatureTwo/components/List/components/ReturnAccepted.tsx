import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { ListAvatar } from "./styled";
import { BiShare as ShareIcon } from "react-icons/bi";

import ReactTimeAgo from "react-time-ago";

interface Props {
  createdAt: Date;
}

export default function ReturnAccepted({ createdAt }: Props) {
  return (
    <ListItem button>
      <ListItemAvatar>
        <ListAvatar>
          <ShareIcon />
        </ListAvatar>
      </ListItemAvatar>
      <ListItemText
        primary="Your request to return a book was accepted."
        secondary={<ReactTimeAgo date={createdAt} locale="en-US" />}
      />
    </ListItem>
  );
}
