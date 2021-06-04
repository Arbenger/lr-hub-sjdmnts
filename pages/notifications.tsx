import withLayout from "HOC/withLayout";
import Notifications from "components/pages/Notifications";
import { redirectIfNotSignedIn } from "utils";

export const getServerSideProps = redirectIfNotSignedIn;

export default withLayout(Notifications, {
  pageName: "notifications",
  pageTitle: "Notifications",
});
