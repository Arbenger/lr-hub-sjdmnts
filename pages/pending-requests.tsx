import withLayout from "HOC/withLayout";
import FeatureOne from "components/pages/PendingRequests/FeatureOne";
import FeatureTwo from "components/pages/PendingRequests/FeatureTwo";
import { useAppDispatch } from "redux/hooks";
import { useEffect } from "react";
import { setPage } from "redux/pageSlice";

const PendingRequests = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const name = "pending-requests";
    const title = "Pending Requests";
    dispatch(setPage({ name, title }));
  }, []);

  return (
    <div>
      <FeatureOne />
      <FeatureTwo />
    </div>
  );
};

export default withLayout(PendingRequests);
