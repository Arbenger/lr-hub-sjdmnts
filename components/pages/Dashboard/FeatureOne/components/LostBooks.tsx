import { Typography } from "@material-ui/core";
import { HiOutlineQuestionMarkCircle as LostIcon } from "react-icons/hi";
import { Caption, RootContainer, Content, Display } from "./styled";

export default function LostBooks() {
  return (
    <RootContainer>
      <Content>
        <Caption>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Lost Books</Typography>
        </Caption>
        <Display>
          <LostIcon />
        </Display>
      </Content>
    </RootContainer>
  );
}
