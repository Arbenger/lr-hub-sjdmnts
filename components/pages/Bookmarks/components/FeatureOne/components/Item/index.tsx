import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import ReactTimeAgo from "react-time-ago";
import { setSelectedItem } from "redux/bookmarksSlice";
import { useAppDispatch } from "redux/hooks";

interface Props {
  index: number;
  bookTitle: string;
  imageUrl: string;
  createdAt: Date;
}

export default function Item({ index, bookTitle, imageUrl, createdAt }: Props) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setSelectedItem(index));
  };

  return (
    <ListItem button onClick={handleClick}>
      <ListItemAvatar>
        <Avatar variant="square" alt="book-cover" src={imageUrl} />
      </ListItemAvatar>
      <ListItemText
        primary={bookTitle}
        secondary={<ReactTimeAgo date={createdAt} locale="en-US" />}
      />
    </ListItem>
  );
}
