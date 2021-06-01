import withLayout from "HOC/withLayout";
import Dashboard from "components/pages/Dashboard";

export default withLayout(Dashboard, {
  pageName: "dashboard",
  pageTitle: "Dashboard",
});
