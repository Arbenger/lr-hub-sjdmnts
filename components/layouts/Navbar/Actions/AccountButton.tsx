import { RiUser4Line as UserIcon } from "react-icons/ri";
import { IconButton } from "@material-ui/core";

interface Props {
  pageName: string;
}

const AccountButton = ({ pageName }: Props) => {
  return pageName !== "account" ? (
    <IconButton edge="end" color="inherit" aria-label="account">
      <UserIcon />
    </IconButton>
  ) : null;
};

export default AccountButton;
