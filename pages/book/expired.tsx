import withLayout from "HOC/withLayout";

const Expired = () => {
  return <div>Expired Books</div>;
};

export default withLayout(Expired, {
  pageName: "expired-books",
  pageTitle: "Expired Books",
});
