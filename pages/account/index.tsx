import { GetServerSidePropsContext } from 'next';
import { auth, usersRef } from 'services/firebase/admin';
import nookies from 'nookies';
import Account from 'components/pages/account/Account';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
   try {
      const cookies = nookies.get(ctx);
      const token = await auth.verifyIdToken(cookies.token);
      const userRecord = await auth.getUser(token.uid);
      const userRef = usersRef.doc(userRecord.uid);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
         await userRef.set({
            uid: userRecord.uid,
            email: userRecord.email,
            displayName: userRecord.displayName,
            occupation: 'Unknown',
            registeredAt: userRecord.metadata.creationTime,
            photoURL: userRecord.photoURL,
            provider: userRecord.providerData[0].providerId,
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
};

export default Account;
