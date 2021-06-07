import { IconButton, Typography, Box } from "@material-ui/core";
import { ColumnOneContainer } from "../styled";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "components/Icons";
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
              alt="Learninig Resources Hub Logo"
              width="100%"
              height="100%"
            />
          </Box>
          <Typography variant="h6">LR Hub - SJDMNTS</Typography>
          <Box
            marginLeft={1.5}
            minWidth={35}
            maxWidth={35}
            minHeight={35}
            maxHeight={35}
          >
            <Image
              src="/images/sjdmnts-logo.png"
              alt="San Jose del MOnte National Trade School Logo"
              width="100%"
              height="100%"
            />
          </Box>
        </div>

        <div className="flex-center">
          <IconButton edge="start" color="inherit" aria-label="facebook">
            <FacebookIcon style={{ fontSize: 28 }} />
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
