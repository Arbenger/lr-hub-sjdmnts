import { GetServerSidePropsContext } from 'next';
import { auth } from 'services/firebase/admin';
import nookies from 'nookies';
import withLayout from 'components/HOC/withLayout';
import Library from 'components/pages/book/Library';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
   try {
      const cookies = nookies.get(ctx);
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

export default withLayout(Library, {
   pageName: 'library',
   pageTitle: 'Library',
});
