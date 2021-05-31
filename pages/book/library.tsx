import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/Library/FeatureOne";
import FeatureTwo from "components/pages/Library/FeatureTwo";
import { useEffect } from "react";
import { setPage } from "redux/pageSlice";
import { useAppDispatch } from "redux/hooks";

const Library = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const name = "library";
    const title = "Library";
    dispatch(setPage({ name, title }));
  }, []);

  return (
    <div>
      <FeatureOne />
      <FeatureTwo />
    </div>
  );
};

export default withLayout(Library);
