import { BiBook as BookIcon } from "react-icons/bi";
import { IconButton } from "@material-ui/core";

interface Props {
  pageName: string;
}

const LibraryButton = ({ pageName }: Props) => {
  return pageName !== "library" ? (
    <IconButton edge="end" color="inherit" aria-label="library">
      <BookIcon />
    </IconButton>
  ) : null;
};

export default LibraryButton;
