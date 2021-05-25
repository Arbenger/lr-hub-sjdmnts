import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/Notifications/FeatureOne";
import FeatureTwo from "components/pages/Notifications/FeatureTwo";
import { useAppDispatch } from "redux/hooks";
import { setPage } from "redux/pageSlice";
import { useEffect } from "react";

const Notifications = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const name = "notifications";
    const title = "Notifications";
    dispatch(setPage({ name, title }));
  }, []);

  return (
    <div>
      <FeatureOne />
      <FeatureTwo />
    </div>
  );
};

export default withLayout(Notifications);
