import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/BookManager/FeatureOne";
import { useAppDispatch } from "redux/hooks";
import { useEffect } from "react";
import { setPage } from "redux/pageSlice";

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
    </div>
  );
};

export default withLayout(BookManager);
