import {
   PageContainer,
   PageTitle,
   WaveBackground,
} from 'components/layouts/Page/styled';
import { Grid } from '@material-ui/core';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { Fragment, useEffect } from 'react';
import { auth, db } from 'services/firebase/admin';
import { useAppDispatch } from 'services/redux/hooks';
import { fetchAccountInfoByUID } from 'services/redux/slices/account/thunks';

import nookies from 'nookies';
import FeatureOne from 'components/pages/account/Account/components/FeatureOne';
import FeatureTwo from 'components/pages/account/Account/components/FeatureTwo';
import withLayout from 'components/HOC/withLayout';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
   try {
      const cookies = nookies.get(ctx);

      const token = await auth.verifyIdToken(cookies.token);
      const userRecord = await auth.getUser(token.uid);

      const accountsRef = db.collection('accounts');
      const accountRef = await accountsRef.doc(userRecord.uid).get();

      if (!accountRef.exists) {
         await accountsRef.doc(userRecord.uid).set({
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
         props: {
            accountUID: userRecord.uid,
         },
      };
   } catch (error) {
      return {
         redirect: {
            destination: '/account/login',
         },
      };
   }
};

function Account({
   accountUID,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchAccountInfoByUID(accountUID));
   }, [accountUID]);

   return (
      <Fragment>
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Account</PageTitle>

            <Grid container spacing={2}>
               <Grid item xs={12} sm={7}>
                  <FeatureOne />
               </Grid>
               <Grid item xs={12} sm={5}>
                  <FeatureTwo />
               </Grid>
            </Grid>
         </PageContainer>
      </Fragment>
   );
}

export default withLayout(Account, {
   pageName: 'account',
   pageTitle: 'Account',
});
