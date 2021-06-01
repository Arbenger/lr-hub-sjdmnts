import withLayout from "HOC/withLayout";
import PendingRequests from "components/pages/PendingRequests";

export default withLayout(PendingRequests, {
  pageName: "pending-requests",
  pageTitle: "Pending Requests",
});
