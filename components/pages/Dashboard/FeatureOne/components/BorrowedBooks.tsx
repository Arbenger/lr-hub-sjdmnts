import { Typography } from "@material-ui/core";
import { BiBookAlt as BookIcon } from "react-icons/bi";
import { Caption, RootContainer, Content, Display } from "./styled";

export default function BorrowedBooks() {
  return (
    <RootContainer>
      <Content>
        <Caption>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Borrowed Books</Typography>
        </Caption>
        <Display>
          <BookIcon />
        </Display>
      </Content>
    </RootContainer>
  );
}
