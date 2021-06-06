import { Avatar, styled } from "@material-ui/core";

export const ListAvatar = styled(Avatar)(({ theme: { appPalette } }) => ({
  backgroundColor: appPalette[appPalette.current].main,
}));
