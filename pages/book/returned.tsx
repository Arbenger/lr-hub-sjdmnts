import withLayout from "HOC/withLayout";
import ReturnedBooks from "components/pages/ReturnedBooks";
import { redirectIfNotSignedIn } from "utils";

export const getServerSideProps = redirectIfNotSignedIn;

export default withLayout(ReturnedBooks, {
  pageName: "return-books",
  pageTitle: "Return Books",
});
