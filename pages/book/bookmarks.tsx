import withLayout from "HOC/withLayout";
import Bookmarks from "components/pages/Bookmarks";
import { redirectIfNotSignedIn } from "utils";

export const getServerSideProps = redirectIfNotSignedIn;

export default withLayout(Bookmarks, {
  pageName: "bookmarks",
  pageTitle: "Bookmarks",
});
