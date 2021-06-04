import withLayout from "HOC/withLayout";
import Login from "components/pages/Login";
import nookies from "nookies";
import { firebaseAdmin } from "firebase/admin";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    const { uid } = token;

    if (uid) {
      return {
        redirect: {
          destination: "/account",
        },
      };
    }

    return {
      props: {},
    };
  } catch (error) {
    return { props: {} };
  }
};

export default withLayout(Login, {
  pageName: "login",
  pageTitle: "Login",
});
