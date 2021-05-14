import { IconButton, Typography } from "@material-ui/core";
import { Icon } from "components/layouts/Navbar/Brand/styled";
import { ColumnOneContainer } from "./styled";
import {
  FiTwitter as TwitterIcon,
  FiFacebook as FacebookIcon,
  FiInstagram as InstagramIcon,
} from "react-icons/fi";

export default function ColumnOne() {
  return (
    <ColumnOneContainer>
      <div>
        <div className="flex-center">
          <Icon />
          <Typography variant="h6">LR Hub - SJDMNTS</Typography>
        </div>

        <div className="flex-center">
          <IconButton edge="start" color="inherit" aria-label="facebook">
            <FacebookIcon />
          </IconButton>

          <IconButton edge="start" color="inherit" aria-label="twitter">
            <TwitterIcon />
          </IconButton>

          <IconButton edge="start" color="inherit" aria-label="instagram">
            <InstagramIcon />
          </IconButton>
        </div>
      </div>
    </ColumnOneContainer>
  );
}
