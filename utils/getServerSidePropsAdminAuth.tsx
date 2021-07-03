import { GetServerSidePropsContext } from 'next';
import { auth, usersRef } from 'services/firebase/admin';
import nookies from 'nookies';

export default async function getServerSidePropsAdminAuth(
   ctx: GetServerSidePropsContext
) {
   try {
      const cookies = nookies.get(ctx);
      const { uid } = await auth.verifyIdToken(cookies.token);

      await auth.getUser(uid);

      const user = await usersRef.doc(uid).get();
      const { occupation } = user.data();

      return occupation !== 'Librarian'
         ? {
              redirect: {
                 destination: '/',
              },
           }
         : {
              props: {},
           };
   } catch (error) {
      return {
         redirect: {
            destination: '/account/login',
         },
      };
   }
}
