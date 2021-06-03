import withLayout from "HOC/withLayout";
import ReturnedBooks from "components/pages/ReturnedBooks";

export default withLayout(ReturnedBooks, {
  pageName: "return-books",
  pageTitle: "Return Books",
});
