import { ReactNode, useEffect, Fragment } from 'react';
import { authClient } from 'services/firebase/client';
import { useAppDispatch } from 'services/redux/hooks';
import { fetchUser } from 'services/redux/slices/user/thunks';
import nookies from 'nookies';

interface Props {
   children: ReactNode;
}

export default function AuthWrapper({ children }: Props) {
   const dispatch = useAppDispatch();

   useEffect(() => {
      return authClient.onIdTokenChanged(async (user) => {
         if (!user) return nookies.set({}, 'token', '', { path: '/' });

         const token = await user.getIdToken();
         nookies.set({}, 'token', token, { path: '/' });
         dispatch(fetchUser(user.uid));
      });
   }, []);

   useEffect(() => {
      const THREE_HOURS = 60 * 60 * 3 * 1000;

      const handleRefreshUserIdToken = setInterval(async () => {
         if (authClient.currentUser)
            await authClient.currentUser.getIdToken(true);
      }, THREE_HOURS);

      return () => clearInterval(handleRefreshUserIdToken);
   }, []);

   return <Fragment>{children}</Fragment>;
}
