import withLayout from "HOC/withLayout";
import BorrowedBooks from "components/pages/BorrowedBooks";
import { redirectIfNotSignedIn } from "utils";

export const getServerSideProps = redirectIfNotSignedIn;

export default withLayout(BorrowedBooks, {
  pageName: "borrowed-books",
  pageTitle: "Borrowed Books",
});
