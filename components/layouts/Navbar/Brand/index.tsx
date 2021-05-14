import { RootContainer, Content, Icon } from "./styled";
import { Typography } from "@material-ui/core";
import Link from "next/link";

export default function Brand() {
  return (
    <RootContainer>
      <Link href="/">
        <Content>
          <Icon />
          <Typography variant="h6">LR Hub</Typography>
        </Content>
      </Link>
    </RootContainer>
  );
}
