import withLayout from "HOC/withLayout";

const UsageGuide = () => {
  return <div>Usage Guide</div>;
};

export default withLayout(UsageGuide, {
  pageName: "usage-guide",
  pageTitle: "Usage Guide",
});
