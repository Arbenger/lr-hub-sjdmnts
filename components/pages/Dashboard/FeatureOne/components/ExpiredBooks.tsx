import { Typography } from "@material-ui/core";
import { FaRegTimesCircle as TimesIcon } from "react-icons/fa";
import { Caption, RootContainer, Content, Display } from "./styled";

export default function ExpiredBooks() {
  return (
    <RootContainer>
      <Content>
        <Caption>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Expired Books</Typography>
        </Caption>
        <Display>
          <TimesIcon />
        </Display>
      </Content>
    </RootContainer>
  );
}
