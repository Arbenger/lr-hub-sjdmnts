import { Avatar, styled } from "@material-ui/core";
export {
  BiBookAlt as BookIcon,
  BiErrorCircle as ErrorIcon,
} from "react-icons/bi";
export { IoArrowUndoOutline as UndoIcon } from "react-icons/io5";

export const ListAvatar = styled(Avatar)(({ theme: { appPalette } }) => ({
  backgroundColor: appPalette[appPalette.current].main,
}));
