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

const config = {
  pageName: "pending-requests",
  title: "Pending Requests",
};

export default withLayout(PendingRequests, config);
