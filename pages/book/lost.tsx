import withLayout from "HOC/withLayout";
import LostBooks from "components/pages/LostBooks";
import { redirectIfNotSignedIn } from "utils";

export const getServerSideProps = redirectIfNotSignedIn;

export default withLayout(LostBooks, {
  pageName: "lost-books",
  pageTitle: "Lost Books",
});
