import { Paper, styled, Avatar as MuiAvatar } from "@material-ui/core";

export const Container = styled(Paper)({});

export const Avatar = styled(MuiAvatar)(({ theme: { palette } }) => ({
  backgroundColor: palette.primary.main,
}));
