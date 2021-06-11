import withLayout from 'HOC/withLayout';
import PendingRequests from 'components/pages/PendingRequests';
import nookies from 'nookies';
import { firebaseAdmin } from 'firebase/admin';
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
            destination: '/login',
         },
      };
   }
};

export default withLayout(PendingRequests, {
   pageName: 'pending-requests',
   pageTitle: 'Pending Requests',
});
