import withLayout from "HOC/withLayout";
import LostBooks from "components/pages/LostBooks";

export default withLayout(LostBooks, {
  pageName: "lost-books",
  pageTitle: "Lost Books",
});
