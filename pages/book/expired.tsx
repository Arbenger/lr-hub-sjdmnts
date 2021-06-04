import withLayout from "HOC/withLayout";
import ExpiredBooks from "components/pages/ExpiredBooks";
import { redirectIfNotSignedIn } from "utils";

export const getServerSideProps = redirectIfNotSignedIn;

export default withLayout(ExpiredBooks, {
  pageName: "expired-books",
  pageTitle: "Expired Books",
});
