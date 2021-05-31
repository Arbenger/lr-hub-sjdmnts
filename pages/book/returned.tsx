import withLayout from "HOC/withLayout";

const Returned = () => {
  return <div>Returned Books</div>;
};

export default withLayout(Returned, {
  pageName: "return-books",
  pageTitle: "Return Books",
});
