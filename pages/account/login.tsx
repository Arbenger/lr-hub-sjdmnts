import { firebaseAdmin } from 'services/firebase/admin';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import Login from 'components/pages/account/Login';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
   try {
      const auth = firebaseAdmin.auth();
      const cookies = nookies.get(ctx);
      const token = await auth.verifyIdToken(cookies.token);
      const userRecord = await auth.getUser(token.uid);

      if (userRecord.uid) {
         return {
            redirect: {
               destination: '/account',
            },
         };
      }

      return {
         props: {},
      };
   } catch (error) {
      return { props: {} };
   }
};

export default Login;
