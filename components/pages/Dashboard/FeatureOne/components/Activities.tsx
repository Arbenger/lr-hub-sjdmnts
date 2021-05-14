import { Typography } from "@material-ui/core";
import { RiFlashlightLine as LightningIcon } from "react-icons/ri";
import { Caption, RootContainer, Content, Display } from "./styled";

export default function Activities() {
  return (
    <RootContainer>
      <Content>
        <Caption>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Activities</Typography>
        </Caption>
        <Display>
          <LightningIcon />
        </Display>
      </Content>
    </RootContainer>
  );
}
