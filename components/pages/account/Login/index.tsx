import {
   WaveBackground,
   PageContainer,
   PageTitle,
} from 'components/layouts/Page/styled';
import { ContentContainer } from './styled';
import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import { firebaseClient, authClient } from 'services/firebase/client';
import { useAppSelector } from 'services/redux/hooks';
import { selectUser } from 'services/redux/selectors';
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
   const user = useAppSelector(selectUser);

   useEffect(() => {
      if (user.info.uid !== '') router.push('/account');
   }, [user.info.uid]);

   return (
      <Fragment>
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Login</PageTitle>
            <ContentContainer>
               <StyledFirebaseAuth
                  uiConfig={uiConfig}
                  firebaseAuth={authClient}
               />
            </ContentContainer>
         </PageContainer>
      </Fragment>
   );
}
