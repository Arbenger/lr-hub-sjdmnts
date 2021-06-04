import withLayout from "HOC/withLayout";
import PendingRequests from "components/pages/PendingRequests";
import { redirectIfNotSignedIn } from "utils";

export const getServerSideProps = redirectIfNotSignedIn;

export default withLayout(PendingRequests, {
  pageName: "pending-requests",
  pageTitle: "Pending Requests",
});
