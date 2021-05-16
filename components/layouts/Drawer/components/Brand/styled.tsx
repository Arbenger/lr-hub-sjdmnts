import { styled, Box, Typography } from "@material-ui/core";
import { flexCenter, flexStartCenter } from "../../../ThemeSetter/mixins";

export const Container = styled(Box)(({ theme: { spacing, palette } }) => ({
  ...flexStartCenter,
  color: palette.common.white,
  backgroundColor: palette.grey[900],
  padding: spacing(2),
  overflow: 'hidden'
}));

export const Icon = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  ...flexCenter,
  fontSize: 32,
  marginRight: spacing(1.5),
}));

export const Title = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontSize: 23,
  [breakpoints.only("xs")]: {
    fontSize: 18,
  },
}));
