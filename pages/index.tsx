import Link from "next/link";
import { Fragment } from "react";
import { Box, Button } from "@material-ui/core";
import withLayout from "HOC/withLayout";

const Home = () => {
  return (
    <Fragment>
      <Box id="home" padding={2}>
        <Link href="/dashboard">
          <Button variant="contained" color="primary">
            Go to Dashboard
          </Button>
        </Link>
      </Box>
    </Fragment>
  );
};

const config = {
  pageName: "home",
  title: "Home",
  withNavbar: false,
  withFooter: false,
};

export default withLayout(Home, config);
