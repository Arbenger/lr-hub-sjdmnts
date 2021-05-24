import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { ListAvatar } from "./styled";
import { BiErrorCircle as ErrorIcon } from "react-icons/bi";

import ReactTimeAgo from "react-time-ago";

interface Props {
  createdAt: Date;
}

export default function Resolve({ createdAt }: Props) {
  return (
    <ListItem button>
      <ListItemAvatar>
        <ListAvatar>
          <ErrorIcon />
        </ListAvatar>
      </ListItemAvatar>
      <ListItemText
        primary="You requested to resolve a penalty."
        secondary={<ReactTimeAgo date={createdAt} locale="en-US" />}
      />
    </ListItem>
  );
}
