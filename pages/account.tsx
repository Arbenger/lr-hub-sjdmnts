import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/Account/FeatureOne";

const Account = () => {
  return (
    <div>
      <FeatureOne />
    </div>
  );
};

export default withLayout(Account, {
  pageName: "account",
  pageTitle: "Account",
});
