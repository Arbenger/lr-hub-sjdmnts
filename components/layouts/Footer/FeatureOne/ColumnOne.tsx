import { IconButton, Typography, Box } from "@material-ui/core";
import { ColumnOneContainer } from "./styled";
import {
  FiTwitter as TwitterIcon,
  FiFacebook as FacebookIcon,
  FiInstagram as InstagramIcon,
} from "react-icons/fi";
import Image from "next/image";

export default function ColumnOne() {
  return (
    <ColumnOneContainer>
      <div>
        <div className="flex-center">
          <Box
            marginRight={1.5}
            minWidth={35}
            maxWidth={35}
            minHeight={35}
            maxHeight={35}
          >
            <Image
              src="/images/logo.png"
              alt="LR Hub Logo"
              width="100%"
              height="100%"
            />
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
