import { styled, Avatar as MuiAvatar } from "@material-ui/core";

export const Avatar = styled(MuiAvatar)(({ theme: { spacing } }) => ({
  width: 75,
  height: 100,
  marginRight: spacing(2),
}));
