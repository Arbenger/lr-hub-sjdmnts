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

export default withLayout(Library, {
  pageName: "library",
  pageTitle: "Library",
});
