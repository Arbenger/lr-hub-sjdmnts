import {
   WaveBackground,
   PageContainer,
   PageTitle,
} from 'components/layouts/Page/styled';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { firebaseClient, authClient } from 'services/firebase/client';
import { useAppSelector } from 'services/redux/hooks';
import { selectUser } from 'services/redux/selectors';
import { Box, makeStyles } from '@material-ui/core';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import LayoutWrapper from 'components/wrappers/LayoutWrapper';

export default function Login() {
   const router = useRouter();
   const user = useAppSelector(selectUser);

   const uiConfig = {
      signInFlow: 'popup',
      signInSuccessUrl: '/account',
      signInOptions: [firebaseClient.auth.GoogleAuthProvider.PROVIDER_ID],
      credentialHelper: 'none',
      tosUrl: '/resources/terms-of-service',
      privacyPolicyUrl: '/resources/privacy-policy',
   };

   const classes = makeStyles(({ spacing }) => ({
      container: {
         width: 'fit-content',
         margin: 'auto',
         backgroundColor: 'rgba(255, 255, 255, .85)',
         '& > div': {
            paddingTop: spacing(2),
            paddingBottom: spacing(2),
         },
      },
   }))();

   useEffect(() => {
      if (user.info.uid !== '') router.push('/account');
   }, [user.info.uid]);

   return (
      <LayoutWrapper pageName="login" pageTitle="Login">
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Login</PageTitle>
            <Box className={classes.container}>
               <StyledFirebaseAuth
                  uiConfig={uiConfig}
                  firebaseAuth={authClient}
               />
            </Box>
         </PageContainer>
      </LayoutWrapper>
   );
}
