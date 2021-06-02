import withLayout from "HOC/withLayout";
import Bookmarks from "components/pages/Bookmarks";

export default withLayout(Bookmarks, {
  pageName: "bookmarks",
  pageTitle: "Bookmarks",
});
