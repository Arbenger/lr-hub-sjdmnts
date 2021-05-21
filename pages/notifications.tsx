import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/Notifications/FeatureOne";

const Notifications = () => {
  return (
    <div>
      <FeatureOne />
    </div>
  );
};

const config = {
  pageName: "notifications",
  title: "Notifications",
};

export default withLayout(Notifications, config);
