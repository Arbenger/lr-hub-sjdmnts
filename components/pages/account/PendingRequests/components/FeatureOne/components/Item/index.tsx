import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import {
   BorrowedBookIcon,
   PenaltyIcon,
   ReturnedBookIcon,
} from 'components/Icons';
import { ListAvatar } from './styled';
import { Item as ItemType } from '../../types';
import { Templates } from './types';
import ReactTimeago from 'react-timeago';

export default function Item({ type, createdAt }: ItemType) {
   const templates: Templates = {
      borrow: {
         text: 'You requested to borrow a book.',
         icon: <BorrowedBookIcon />,
      },
      return: {
         text: 'You requested to return a book.',
         icon: <ReturnedBookIcon />,
      },
      resolve: {
         text: 'You requested to resolve a penalty.',
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
