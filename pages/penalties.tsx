import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/Penalties/FeatureOne";
import { useAppDispatch } from "redux/hooks";
import { useEffect } from "react";
import { setPage } from "redux/pageSlice";

const Penalties = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const name = "penalties";
    const title = "Penalties";
    dispatch(setPage({ name, title }));
  }, []);

  return (
    <div>
      <FeatureOne />
    </div>
  );
};

export default withLayout(Penalties);
