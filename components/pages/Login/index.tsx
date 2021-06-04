import { Fragment } from "react";
import { WaveBackground } from "components/designs/styled";
import { Container, Title, ContentContainer } from "./styled";
import { firebaseClient } from "firebase/client";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/account",
  signInOptions: [
    firebaseClient.auth.GoogleAuthProvider.PROVIDER_ID,
    firebaseClient.auth.FacebookAuthProvider.PROVIDER_ID,
    firebaseClient.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
};

export default function Login() {
  return (
    <Fragment>
      <WaveBackground />
      <Container maxWidth="lg">
        <Title variant="h4">Login</Title>
        <ContentContainer>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebaseClient.auth()}
          />
        </ContentContainer>
      </Container>
    </Fragment>
  );
}
