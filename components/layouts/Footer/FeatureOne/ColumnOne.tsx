import { IconButton, Typography, Box } from "@material-ui/core";
import { ColumnOneContainer } from "./styled";
import {
  FiTwitter as TwitterIcon,
  FiFacebook as FacebookIcon,
  FiInstagram as InstagramIcon,
} from "react-icons/fi";
import { RiBookOpenLine as BookIcon } from "react-icons/ri";

export default function ColumnOne() {
  return (
    <ColumnOneContainer>
      <div>
        <div className="flex-center">
          <Box fontSize={25} marginRight={1} className="flex-center">
            <BookIcon />
          </Box>
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
