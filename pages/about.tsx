import withLayout from "HOC/withLayout";

const About = () => {
  return <div>About</div>;
};

export default withLayout(About, {
  pageName: "about",
  pageTitle: "About",
});
