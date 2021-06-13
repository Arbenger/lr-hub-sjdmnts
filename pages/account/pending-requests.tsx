import { firebaseAdmin } from 'services/firebase/admin';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import withLayout from 'components/HOC/withLayout';
import PendingRequests from 'components/pages/account/PendingRequests';

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

export default withLayout(PendingRequests, {
   pageName: 'pending-requests',
   pageTitle: 'Pending Requests',
});
