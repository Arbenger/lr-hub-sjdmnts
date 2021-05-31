import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/PendingRequests/FeatureOne";
import FeatureTwo from "components/pages/PendingRequests/FeatureTwo";

const PendingRequests = () => {
  return (
    <div>
      <FeatureOne />
      <FeatureTwo />
    </div>
  );
};

export default withLayout(PendingRequests, {
  pageName: "pending-requests",
  pageTitle: "Pending Requests",
});
