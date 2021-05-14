import { Typography } from "@material-ui/core";
import { BiErrorCircle as ErrorIcon } from "react-icons/bi";
import { Caption, RootContainer, Content, Display } from "./styled";

export default function Penalties() {
  return (
    <RootContainer>
      <Content>
        <Caption>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Penalties</Typography>
        </Caption>
        <Display>
          <ErrorIcon />
        </Display>
      </Content>
    </RootContainer>
  );
}
