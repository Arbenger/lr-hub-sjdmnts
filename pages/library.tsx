import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/Library/FeatureOne";
import FeatureTwo from "components/pages/Library/FeatureTwo";

const Library = () => {
  return (
    <div>
      <FeatureOne />
      <FeatureTwo />
    </div>
  );
};

const config = {
  pageName: "library",
  title: "Library",
};

export default withLayout(Library, config);
