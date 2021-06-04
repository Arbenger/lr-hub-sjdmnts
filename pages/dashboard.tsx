import withLayout from "HOC/withLayout";
import Dashboard from "components/pages/Dashboard";
import { redirectIfNotSignedIn } from "utils";

export const getServerSideProps = redirectIfNotSignedIn;

export default withLayout(Dashboard, {
  pageName: "dashboard",
  pageTitle: "Dashboard",
});
