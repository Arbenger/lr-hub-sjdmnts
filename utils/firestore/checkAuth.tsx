import { GetServerSidePropsContext } from 'next';
import { auth } from 'services/firebase/admin';
import nookies from 'nookies';

const checkAuth = async (ctx: GetServerSidePropsContext) => {
   try {
      const cookies = nookies.get(ctx);
      const token = await auth.verifyIdToken(cookies.token);
      await auth.getUser(token.uid);

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

export default checkAuth;
