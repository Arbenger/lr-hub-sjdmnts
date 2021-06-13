import nookies from 'nookies';
import firebase from 'firebase';
import { createContext, useEffect, useState } from 'react';
import { authClient } from './client';

export const AuthContext = createContext<{ user: firebase.User | null }>({
   user: null,
});

export function AuthProvider({ children }: any) {
   const [user, setUser] = useState<firebase.User | null>(null);

   useEffect(() => {
      return authClient.onIdTokenChanged(async (user) => {
         if (!user) {
            setUser(null);
            nookies.set(undefined, 'token', '', { path: '/' });
         } else {
            const token = await user.getIdToken();
            setUser(user);
            nookies.set(undefined, 'token', token, { path: '/' });
         }
      });
   }, []);

   useEffect(() => {
      const handle = setInterval(async () => {
         const user = authClient.currentUser;
         if (user) await user.getIdToken(true);
      }, 10 * 60 * 1000);

      return () => clearInterval(handle);
   }, []);

   return (
      <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
   );
}
