import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/Penalties/FeatureOne";

const Penalties = () => {
  return (
    <div>
      <FeatureOne />
    </div>
  );
};

const config = {
  pageName: "penalties",
  title: "Penalties",
};

export default withLayout(Penalties, config);
