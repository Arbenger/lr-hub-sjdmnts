import withLayout from 'components/HOC/withLayout';
import ExpiredBooks from 'components/pages/book/Expired';
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

export default withLayout(ExpiredBooks, {
   pageName: 'expired-books',
   pageTitle: 'Expired Books',
});
