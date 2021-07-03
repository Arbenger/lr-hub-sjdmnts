import { GetServerSidePropsContext } from 'next';
import { auth, usersRef } from 'services/firebase/admin';
import nookies from 'nookies';

export default async function getServerSidePropsUserAuth(
   ctx: GetServerSidePropsContext
) {
   try {
      const cookies = nookies.get(ctx);
      const token = await auth.verifyIdToken(cookies.token);
      const { uid, email, displayName, photoURL, metadata, providerData } =
         await auth.getUser(token.uid);

      const snapshot = await usersRef.where('email', '==', email).get();

      if (!snapshot.docs.length) {
         const userRef = usersRef.doc(uid);

         await userRef.set({
            uid,
            email,
            displayName,
            photoURL,
            occupation: 'Unknown',
            registeredAt: metadata.creationTime,
            provider: providerData[0].providerId,
         });
      }

      return {
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
