import withLayout from "HOC/withLayout";
import Notifications from "components/pages/Notifications";

export default withLayout(Notifications, {
  pageName: "notifications",
  pageTitle: "Notifications",
});
