import withLayout from "HOC/withLayout";

const PrivacyPolicy = () => {
  return <div>Privacy Policy</div>;
};

export default withLayout(PrivacyPolicy, {
  pageName: "privacy-policy",
  pageTitle: "Privacy Policy",
});
