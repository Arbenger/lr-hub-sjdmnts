import { GetServerSidePropsContext } from 'next';
import { auth, usersRef } from 'services/firebase/admin';
import nookies from 'nookies';

export default async function getServerSidePropsAdminAuth(
   ctx: GetServerSidePropsContext
) {
   try {
      const cookies = nookies.get(ctx);
      const token = await auth.verifyIdToken(cookies.token);
      const userRecord = await auth.getUser(token.uid);
      const userRef = usersRef.doc(userRecord.uid);
      const userDoc = await userRef.get();
      const { occupation } = userDoc.data();

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
