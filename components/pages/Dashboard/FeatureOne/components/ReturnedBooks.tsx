import { Typography } from "@material-ui/core";
import { IoArrowUndoOutline as UndoIcon } from "react-icons/io5";
import { Caption, RootContainer, Content, Display } from "./styled";

export default function ReturnedBooks() {
  return (
    <RootContainer>
      <Content>
        <Caption>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Returned Books</Typography>
        </Caption>
        <Display>
          <UndoIcon />
        </Display>
      </Content>
    </RootContainer>
  );
}
