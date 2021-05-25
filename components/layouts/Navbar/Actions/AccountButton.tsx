import { RiUser4Line as UserIcon } from "react-icons/ri";
import { IconButton } from "@material-ui/core";

export default function AccountButton() {
  return (
    <IconButton edge="end" color="inherit" aria-label="account">
      <UserIcon />
    </IconButton>
  );
}
