import { Avatar, styled } from "@material-ui/core";

export const ListAvatar = styled(Avatar)(({ theme: { palette } }) => ({
  backgroundColor: palette.primary.main,
}));
