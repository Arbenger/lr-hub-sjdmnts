import {
   PageContainer,
   PageTitle,
   WaveBackground,
} from 'components/layouts/Page/styled';
import { Grid } from '@material-ui/core';
import { Fragment } from 'react';
import { GetServerSidePropsContext } from 'next';
import { auth, usersRef } from 'services/firebase/admin';

import nookies from 'nookies';
import FeatureOne from 'components/pages/account/Account/components/FeatureOne';
import FeatureTwo from 'components/pages/account/Account/components/FeatureTwo';
import withLayout from 'components/HOC/withLayout';

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

function Account() {
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
