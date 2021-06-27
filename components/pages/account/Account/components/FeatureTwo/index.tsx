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
import { Container, Avatar } from './styled';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { authClient } from 'services/firebase/client';
import { useAppDispatch } from 'services/redux/hooks';
import { triggerDialog } from 'services/redux/slices/account';

import EditAccountDialog from './components/EditAccountDialog';
import EditAccountFulfilledDialog from './components/EditAccountFulfilledDialog';
import EditAccountRejectedDialog from './components/EditAccountRejectedDialog';
import DeactivateAccountDialog from './components/DeactivateAccountDialog';
import RedirectConfirmationDialog from './components/RedirectConfirmationDialog';

export default function FeatureTwo() {
   const router = useRouter();
   const dispatch = useAppDispatch();
   const [isSignOutPending, setIsSignOutPending] = useState(false);

   const actions = [
      {
         text: isSignOutPending ? 'Signing Out' : 'Sign Out',
         icon: isSignOutPending ? <LoadingEllipsisIcon /> : <SignOutIcon />,
         onClick: async () => {
            setIsSignOutPending(true);
            await authClient.signOut();
            router.push('/account/login');
         },
      },
      {
         text: 'Edit Information',
         icon: <EditAccountIcon />,
         onClick: () => {
            dispatch(
               triggerDialog({
                  dialog: 'edit',
                  state: {
                     isOpen: true,
                  },
               })
            );
         },
      },
      {
         text: 'Deactivate Account',
         icon: <DeactivateAccountIcon />,
         onClick: () => {
            dispatch(
               triggerDialog({
                  dialog: 'deactivate',
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

         <EditAccountDialog />
         <EditAccountFulfilledDialog />
         <EditAccountRejectedDialog />
         <DeactivateAccountDialog />
         <RedirectConfirmationDialog />
      </Container>
   );
}
