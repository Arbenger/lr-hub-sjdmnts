import withLayout from "HOC/withLayout";
import Account from "components/pages/Account";

export default withLayout(Account, {
  pageName: "account",
  pageTitle: "Account",
});
