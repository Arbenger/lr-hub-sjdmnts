import withLayout from 'components/HOC/withLayout';
import Penalties from 'components/pages/account/Penalties';
import nookies from 'nookies';
import { firebaseAdmin } from 'services/firebase/admin';
import { GetServerSidePropsContext } from 'next';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
   try {
      const cookies = nookies.get(ctx);
      const auth = firebaseAdmin.auth();
      await auth.verifyIdToken(cookies.token);

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

export default withLayout(Penalties, {
   pageName: 'penalties',
   pageTitle: 'Penalties',
});
