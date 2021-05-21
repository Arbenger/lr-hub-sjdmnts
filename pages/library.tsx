import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/Library/FeatureOne";

const Library = () => {
  return (
    <div>
      <FeatureOne />
    </div>
  );
};

const config = {
  pageName: "library",
  title: "Library",
};

export default withLayout(Library, config);
