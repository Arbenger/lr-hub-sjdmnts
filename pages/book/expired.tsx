import withLayout from "HOC/withLayout";
import ExpiredBooks from "components/pages/ExpiredBooks";

export default withLayout(ExpiredBooks, {
  pageName: "expired-books",
  pageTitle: "Expired Books",
});
