import withLayout from "HOC/withLayout";

const Lost = () => {
  return <div>Lost Books</div>;
};

export default withLayout(Lost, {
  pageName: "lost-books",
  pageTitle: "Lost Books",
});
