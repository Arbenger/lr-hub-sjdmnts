import withLayout from "HOC/withLayout";

const TermsOfService = () => {
  return <div>Terms of Service</div>;
};

export default withLayout(TermsOfService, {
  pageName: "terms-of-service",
  pageTitle: "Terms of Service",
});
