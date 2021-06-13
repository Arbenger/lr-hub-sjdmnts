import {
   WaveBackground,
   PageContainer,
   PageTitle,
} from 'components/layouts/Page/styled';
import { ContentContainer } from './styled';
import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import { firebaseClient } from 'firebase/client';
import useAuth from 'firebase/useAuth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
   signInFlow: 'popup',
   signInSuccessUrl: '/account',
   signInOptions: [firebaseClient.auth.GoogleAuthProvider.PROVIDER_ID],
   credentialHelper: 'none',
   tosUrl: '/resources/terms-of-service',
   privacyPolicyUrl: '/resources/privacy-policy',
};

export default function Login() {
   const router = useRouter();
   const auth = useAuth();

   useEffect(() => {
      if (auth.user !== null) router.push('/account');
   }, [auth.user]);

   return (
      <Fragment>
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Login</PageTitle>
            <ContentContainer>
               <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            </ContentContainer>
         </PageContainer>
      </Fragment>
   );
}
