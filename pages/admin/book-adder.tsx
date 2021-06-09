import withLayout from "HOC/withLayout";
import BookAdder from "components/pages/BookAdder";

export default withLayout(BookAdder, {
  pageName: "book-adder",
  pageTitle: "Book Adder",
});
