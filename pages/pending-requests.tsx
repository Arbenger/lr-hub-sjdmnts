import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/PendingRequests/FeatureOne";

const PendingRequests = () => {
  return (
    <div>
      <FeatureOne />
    </div>
  );
};

const config = {
  pageName: "pending-requests",
  title: "Pending Requests",
};

export default withLayout(PendingRequests, config);
