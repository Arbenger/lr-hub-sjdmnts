import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Avatar } from './styled';
import { useAppDispatch } from 'services/redux/hooks';
import { triggerDialog } from 'services/redux/bookDialogSlice';
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
   const dispatch = useAppDispatch();

   const handleClick = () => {
      dispatch(triggerDialog('open'));
   };

   return (
      <ListItem button onClick={handleClick}>
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
