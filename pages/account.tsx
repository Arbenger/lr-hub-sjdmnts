import {
  PageContainer,
  PageTitle,
  WaveBackground,
} from "components/layouts/Page/styled";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { Grid } from "@material-ui/core";
import { Fragment, useEffect } from "react";
import { firebaseAdmin } from "firebase/admin";
import { useAppDispatch } from "redux/hooks";
import { setData } from "redux/accountSlice";

import nookies from "nookies";
import FeatureOne from "components/pages/Account/components/FeatureOne";
import FeatureTwo from "components/pages/Account/components/FeatureTwo";
import withLayout from "HOC/withLayout";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    const auth = firebaseAdmin.auth();
    const token = await auth.verifyIdToken(cookies.token);
    const userRecord = await auth.getUser(token.uid);

    return {
      props: {
        displayName: userRecord.displayName || "not-applicable",
        email: userRecord.email || "not-applicable",
        occupation: "Student",
        registeredAt: userRecord.metadata.creationTime || "not-applicable",
        photoURL: userRecord.photoURL || "not-applicable",
        provider: userRecord.providerData[0].providerId,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
};

function Account({
  displayName,
  email,
  occupation,
  registeredAt,
  photoURL,
  provider,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setData({
        displayName,
        email,
        occupation,
        registeredAt,
        photoURL,
        provider,
      })
    );
  }, [displayName, email, occupation, registeredAt, photoURL, provider]);

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
  pageName: "account",
  pageTitle: "Account",
});
