import withLayout from "HOC/withLayout";
import Library from "components/pages/Library";

export default withLayout(Library, {
  pageName: "library",
  pageTitle: "Library",
});
