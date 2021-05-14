import { Typography } from "@material-ui/core";
import { BiBookBookmark as BookmarksIcon } from "react-icons/bi";
import { Caption, RootContainer, Content, Display } from "./styled";

export default function Bookmarks() {
  return (
    <RootContainer>
      <Content>
        <Caption>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Bookmarks</Typography>
        </Caption>
        <Display>
          <BookmarksIcon />
        </Display>
      </Content>
    </RootContainer>
  );
}
