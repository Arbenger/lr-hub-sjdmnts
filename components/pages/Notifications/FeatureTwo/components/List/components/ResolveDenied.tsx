import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { ListAvatar } from "./styled";
import { BiErrorCircle as ErrorIcon } from "react-icons/bi";

import ReactTimeAgo from "react-time-ago";

interface Props {
  createdAt: Date;
}

export default function ResolveDenied({ createdAt }: Props) {
  return (
    <ListItem button>
      <ListItemAvatar>
        <ListAvatar>
          <ErrorIcon />
        </ListAvatar>
      </ListItemAvatar>
      <ListItemText
        primary="Your request to resolve a penalty was denied."
        secondary={<ReactTimeAgo date={createdAt} locale="en-US" />}
      />
    </ListItem>
  );
}
