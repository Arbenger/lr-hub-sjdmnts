import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { setSelectedItem } from "redux/bookmarksSlice";
import { useAppDispatch } from "redux/hooks";
import ReactTimeAgo from "utils/ReactTimeAgo";

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
        <Avatar
          variant="square"
          alt="book-cover"
          src={imageUrl}
          style={{ height: 100, width: 75, marginRight: 16 }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={bookTitle}
        secondary={<ReactTimeAgo date={createdAt} />}
      />
    </ListItem>
  );
}
