import {
   DeactivateAccountIcon,
   LoadingEllipsisIcon,
   SignOutIcon,
   EditAccountIcon,
} from 'components/Icons';
import {
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   ListSubheader,
} from '@material-ui/core';
import { useState, ReactNode } from 'react';
import { authClient } from 'firebase/client';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'redux/hooks';
import { triggerDialog } from 'redux/slices/account';
import { Container, Avatar } from './styled';
import DeactivateAccountDialog from './components/DeactivateAccountDialog';
import RedirectConfirmationDialog from './components/RedirectConfirmationDialog';

export default function FeatureTwo() {
   const router = useRouter();
   const dispatch = useAppDispatch();
   const [isSignOutPending, setIsSignOutPending] = useState(false);

   interface Action {
      text: string;
      icon: ReactNode;
      onClick: () => void;
   }

   const actions: Action[] = [
      {
         text: isSignOutPending ? 'Signing Out' : 'Sign Out',
         icon: isSignOutPending ? <LoadingEllipsisIcon /> : <SignOutIcon />,
         onClick: async () => {
            setIsSignOutPending(true);
            await authClient.signOut();
            router.push('/login');
         },
      },
      {
         text: 'Edit Informations',
         icon: <EditAccountIcon />,
         onClick: () => {},
      },
      {
         text: 'Deactivate Account',
         icon: <DeactivateAccountIcon />,
         onClick: () => {
            dispatch(
               triggerDialog({
                  target: 'deactivateAccount',
                  state: {
                     isOpen: true,
                  },
               })
            );
         },
      },
   ];

   return (
      <Container>
         <List>
            <ListSubheader>Actions</ListSubheader>

            {actions.map((action) => (
               <ListItem button key={action.text} onClick={action.onClick}>
                  <ListItemAvatar>
                     <Avatar>{action.icon}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={action.text} />
               </ListItem>
            ))}
         </List>

         <DeactivateAccountDialog />
         <RedirectConfirmationDialog />
      </Container>
   );
}
