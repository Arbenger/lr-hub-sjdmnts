import { Paper, styled, Avatar as MuiAvatar } from "@material-ui/core";
export { FiLogOut as LogoutIcon } from "react-icons/fi";
export {
  AiOutlineLock as LockIcon,
  AiOutlineEllipsis as EllipsisIcon,
} from "react-icons/ai";

export const Container = styled(Paper)({});

export const Avatar = styled(MuiAvatar)(({ theme: { palette } }) => ({
  backgroundColor: palette.primary.main,
}));
