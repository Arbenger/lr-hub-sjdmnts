import {
   ListItem,
   ListItemAvatar,
   Avatar,
   ListItemText,
} from '@material-ui/core';
import { LoadingEllipsisIcon, SignOutIcon } from 'components/Icons';
import { authClient } from 'services/firebase/client';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SignOutButton() {
   const router = useRouter();
   const [isLoading, setIsLoading] = useState(false);

   async function handleSignOut() {
      setIsLoading(true);
      await authClient.signOut();
      router.push('/account/login');
   }

   return (
      <ListItem button onClick={handleSignOut}>
         <ListItemAvatar>
            <Avatar>
               {isLoading ? <LoadingEllipsisIcon /> : <SignOutIcon />}
            </Avatar>
         </ListItemAvatar>
         <ListItemText primary={isLoading ? 'Signing Out' : 'Sign Out'} />
      </ListItem>
   );
}
