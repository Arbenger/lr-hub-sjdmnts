import withLayout from "HOC/withLayout";

const Bookmarks = () => {
  return <div>Bookmarks</div>;
};

export default withLayout(Bookmarks, {
  pageName: "bookmarks",
  pageTitle: "Bookmarks",
});
