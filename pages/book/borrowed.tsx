import withLayout from "HOC/withLayout";
import BorrowedBooks from "components/pages/BorrowedBooks";

export default withLayout(BorrowedBooks, {
  pageName: "borrowed-books",
  pageTitle: "Borrowed Books",
});
