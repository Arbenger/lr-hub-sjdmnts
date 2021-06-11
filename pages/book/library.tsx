import { GetServerSidePropsContext } from 'next';
import { auth } from 'firebase/admin';
import nookies from 'nookies';
import withLayout from 'HOC/withLayout';
import Library from 'components/pages/Library';

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
            destination: '/login',
         },
      };
   }
};

export default withLayout(Library, {
   pageName: 'library',
   pageTitle: 'Library',
});
