import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { Avatar } from "./styled";
import ReactTimeAgo from "utils/ReactTimeAgo";

interface Props {
  bookTitle: string;
  imageUrl: string;
  createdAt: Date;
}

export default function BookListItem({
  bookTitle,
  imageUrl,
  createdAt,
}: Props) {
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar variant="square" alt="book-cover" src={imageUrl} />
      </ListItemAvatar>
      <ListItemText
        primary={bookTitle}
        secondary={<ReactTimeAgo date={createdAt} />}
      />
    </ListItem>
  );
}
