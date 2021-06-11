import {
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   ListSubheader,
} from '@material-ui/core';
import { useState } from 'react';
import { firebaseClient } from 'firebase/client';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'redux/hooks';
import { triggerModal } from 'redux/accountSlice';
import { Container, Avatar } from './styled';
import {
   DeactivateAccountIcon,
   LoadingEllipsisIcon,
   SignOutIcon,
   EditAccountIcon,
} from 'components/Icons';
import DeactivateAccountModal from './components/DeactivateAccountModal';

export default function FeatureTwo() {
   const router = useRouter();
   const dispatch = useAppDispatch();
   const [isSignOutPending, setIsSignOutPending] = useState(false);

   const handleSignOut = async () => {
      setIsSignOutPending(true);
      await firebaseClient.auth().signOut();
      router.push('/login');
   };

   const handdleClickDeactivateAccount = () => {
      dispatch(
         triggerModal({
            target: 'deactivateAccount',
            isOpen: true,
         })
      );
   };

   return (
      <Container>
         <List>
            <ListSubheader>Actions</ListSubheader>

            <ListItem button onClick={handleSignOut}>
               <ListItemAvatar>
                  <Avatar>
                     {isSignOutPending ? (
                        <LoadingEllipsisIcon />
                     ) : (
                        <SignOutIcon />
                     )}
                  </Avatar>
               </ListItemAvatar>
               <ListItemText
                  primary={isSignOutPending ? 'Signing Out' : 'Sign Out'}
               />
            </ListItem>

            <ListItem button>
               <ListItemAvatar>
                  <Avatar>
                     <EditAccountIcon />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary="Edit Informations" />
            </ListItem>

            <ListItem button onClick={handdleClickDeactivateAccount}>
               <ListItemAvatar>
                  <Avatar>
                     <DeactivateAccountIcon />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary="Deactivate Account" />
            </ListItem>
         </List>

         <DeactivateAccountModal />
      </Container>
   );
}
