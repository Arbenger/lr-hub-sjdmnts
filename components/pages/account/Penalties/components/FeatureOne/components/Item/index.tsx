import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { PenaltyIcon, ReturnedBookIcon } from 'components/Icons';
import { ListAvatar } from './styled';
import { Item as ItemType } from '../../types';
import { Templates } from './types';
import ReactTimeago from 'react-timeago';

export default function Item({ type, createdAt }: ItemType) {
   const templates: Templates = {
      return: {
         text: 'You have failed to return the book within the time limit.',
         icon: <ReturnedBookIcon />,
      },
      lost: {
         text: 'You have lost a book.',
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
            secondary={<ReactTimeago date={createdAt} />}
         />
      </ListItem>
   );
}
