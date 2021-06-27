import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { useAppDispatch } from 'services/redux/hooks';
import { Avatar } from './styled';
import ReactTimeago from 'react-timeago';

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
            secondary={<ReactTimeago date={createdAt} />}
         />
      </ListItem>
   );
}
