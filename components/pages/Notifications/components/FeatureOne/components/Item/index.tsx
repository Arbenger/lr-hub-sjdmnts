import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import {
  BorrowedBookIcon,
  PenaltyIcon,
  ReturnedBookIcon,
} from "components/Icons";
import { ListAvatar } from "./styled";
import { Item as ItemType } from "../../types";
import { Templates } from "./types";
import ReactTimeAgo from "utils/ReactTimeAgo";

export default function item({ type, createdAt }: ItemType) {
  const templates: Templates = {
    borrowAccepted: {
      text: "Your request to borrow a book was accepted.",
      icon: <BorrowedBookIcon />,
    },
    borrowDenied: {
      text: "Your request to borrow a book was denied.",
      icon: <BorrowedBookIcon />,
    },
    returnAccepted: {
      text: "Your request to return a book was accepted.",
      icon: <ReturnedBookIcon />,
    },
    returnDenied: {
      text: "Your request to return a book was denied.",
      icon: <ReturnedBookIcon />,
    },
    resolveAccepted: {
      text: "Your request to resolve a penalty was accepted.",
      icon: <PenaltyIcon />,
    },
    resolveDenied: {
      text: "Your request to resolve a penalty was accepted.",
      icon: <PenaltyIcon />,
    },
  };

  return (
    <ListItem button>
      <ListItemAvatar>
        <ListAvatar>{templates[type].icon}</ListAvatar>
      </ListItemAvatar>
      <ListItemText
        primary={templates[type].text}
        secondary={<ReactTimeAgo date={createdAt} />}
      />
    </ListItem>
  );
}
