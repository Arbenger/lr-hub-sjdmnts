import { Typography } from "@material-ui/core";
import { BiHourglass as HourglassIcon } from "react-icons/bi";
import { Caption, RootContainer, Content, Display } from "./styled";

export default function PendingRequests() {
  return (
    <RootContainer>
      <Content>
        <Caption>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Pending Requests</Typography>
        </Caption>
        <Display>
          <HourglassIcon />
        </Display>
      </Content>
    </RootContainer>
  );
}
