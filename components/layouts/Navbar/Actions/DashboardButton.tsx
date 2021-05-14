import { RiDashboardLine as DashboardIcon } from "react-icons/ri";
import { IconButton } from "@material-ui/core";

interface Props {
  pageName: string;
}

const DashboardButton = ({ pageName }: Props) => {
  return pageName !== "dashboard" ? (
    <IconButton edge="end" color="inherit" aria-label="dashboard">
      <DashboardIcon />
    </IconButton>
  ) : null;
};

export default DashboardButton;
