import withLayout from "HOC/withLayout";
import Library from "components/pages/Library";
import nookies from "nookies";
import { firebaseAdmin } from "firebase/admin";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    const auth = firebaseAdmin.auth();
    await auth.verifyIdToken(cookies.token);

    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
};

export default withLayout(Library, {
  pageName: "library",
  pageTitle: "Library",
});
