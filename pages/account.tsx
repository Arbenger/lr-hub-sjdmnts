import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/Account/FeatureOne";

const Account = () => {
  return (
    <div>
      <FeatureOne />
    </div>
  );
};

const config = {
  pageName: "account",
  title: "Account",
};

export default withLayout(Account, config);
