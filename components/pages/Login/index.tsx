import {
   WaveBackground,
   PageContainer,
   PageTitle,
} from 'components/layouts/Page/styled';
import { ContentContainer } from './styled';
import { Fragment, useEffect } from 'react';
import { firebaseClient } from 'firebase/client';
import { useRouter } from 'next/router';
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
   const auth = firebaseClient.auth();

   useEffect(() => {
      setTimeout(() => {
         if (auth.currentUser) router.push('/account');
      }, 1000);
   }, [auth]);

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
