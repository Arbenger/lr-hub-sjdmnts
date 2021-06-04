import withLayout from "HOC/withLayout";
import Library from "components/pages/Library";
import { redirectIfNotSignedIn } from "utils";

export const getServerSideProps = redirectIfNotSignedIn;

export default withLayout(Library, {
  pageName: "library",
  pageTitle: "Library",
});
