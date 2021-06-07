import { Fragment, useEffect } from "react";
import { WaveBackground } from "components/designs/styled";
import { Container, Title, ContentContainer } from "./styled";
import { firebaseClient } from "firebase/client";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useRouter } from "next/router";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/account",
  signInOptions: [firebaseClient.auth.GoogleAuthProvider.PROVIDER_ID],
  credentialHelper: "none",
  tosUrl: "/resources/terms-of-service",
  privacyPolicyUrl: "/resources/privacy-policy",
};

export default function Login() {
  const router = useRouter();
  const auth = firebaseClient.auth();

  useEffect(() => {
    setTimeout(() => {
      if (auth.currentUser) router.push("/account");
    }, 1000);
  }, [auth]);

  return (
    <Fragment>
      <WaveBackground />
      <Container maxWidth="lg">
        <Title variant="h4">Login</Title>

        <ContentContainer>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </ContentContainer>
      </Container>
    </Fragment>
  );
}
