import withLayout from "HOC/withLayout";
import { useAppDispatch } from "redux/hooks";
import { useEffect } from "react";
import { setPage } from "redux/pageSlice";
import FeatureOne from "components/pages/BookManager/FeatureOne";
import FeatureTwo from "components/pages/BookManager/FeatureTwo";

const BookManager = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const name = "book-manager";
    const title = "Book Manager";
    dispatch(setPage({ name, title }));
  }, []);

  return (
    <div>
      <FeatureOne />
      <FeatureTwo />
    </div>
  );
};

export default withLayout(BookManager);
