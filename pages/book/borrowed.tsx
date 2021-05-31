import withLayout from "HOC/withLayout";

const Borrowed = () => {
  return <div>Borrowed Books</div>;
};

export default withLayout(Borrowed, {
  pageName: "borrowed-books",
  pageTitle: "Borrowed Books",
});
