import withLayout from "HOC/withLayout";
import Penalties from "components/pages/Penalties";
import { redirectIfNotSignedIn } from "utils";

export const getServerSideProps = redirectIfNotSignedIn;

export default withLayout(Penalties, {
  pageName: "penalties",
  pageTitle: "Penalties",
});
