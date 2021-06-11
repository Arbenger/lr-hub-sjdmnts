import { Box, Paper, styled, Typography } from "@material-ui/core";
import { flexCenter } from "components/layouts/ThemeSetter/mixins";

export const Container = styled(Paper)(({ theme: { spacing } }) => ({
  padding: spacing(2),
  overflow: "hidden",
}));

export const Cover = styled(Box)({
  ...flexCenter,
  width: "100%",
  borderRadius: 5,
  overflow: "hidden",
});

export const Title = styled(Typography)({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
});

export const Subtitle = Title;

export const Description = styled(Typography)({
  display: "box",
  lineClamp: 3,
  boxOrient: "vertical",
  overflow: "hidden",
});

export const ActionsContainer = styled(Box)(({ theme: {} }) => ({
  width: "100%",
  height: "calc(100% - 48px)",
  display: "flex",
  alignItems: "flex-end",
}));

export const ActionsWrapper = styled(Box)(
  ({ theme: { palette, spacing } }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    borderRadius: spacing(1),
    color: palette.primary.contrastText,
    backgroundColor: palette.primary.light,
  })
);
