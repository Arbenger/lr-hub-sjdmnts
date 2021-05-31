import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/Notifications/FeatureOne";
import FeatureTwo from "components/pages/Notifications/FeatureTwo";

const Notifications = () => {
  return (
    <div>
      <FeatureOne />
      <FeatureTwo />
    </div>
  );
};

export default withLayout(Notifications, {
  pageName: "notifications",
  pageTitle: "Notifications",
});
