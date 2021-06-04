import { GetServerSidePropsContext } from "next";
import { firebaseAdmin } from "firebase/admin";
import nookies from "nookies";

export const getMonthLabels = () => {
  const months = [
    "JAN",
    "FEB",
    "APR",
    "MAR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let current = new Date().getMonth();
  let labels: string[] = [];
  for (let i = 0; i < 12; i++) {
    labels = [...labels, months[current]];
    if (current === 11) current = 0;
    else current++;
  }
  return labels;
};

export const redirectIfNotSignedIn = async (ctx: GetServerSidePropsContext) => {
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
