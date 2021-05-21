import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/BookManager/FeatureOne";

const BookManager = () => {
  return (
    <div>
      <FeatureOne />
    </div>
  );
};

const config = {
  pageName: "book-manager",
  title: "Book Manager",
};

export default withLayout(BookManager, config);
