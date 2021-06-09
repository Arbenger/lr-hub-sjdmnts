import { Box, Fab, Paper, styled } from "@material-ui/core";
import { flexCenter } from "components/layouts/ThemeSetter/mixins";

export const Container = styled(Box)({});

export const ContentContainer = styled(Paper)(
  ({ theme: { spacing, palette } }) => ({
    minWidth: 816,
    maxWidth: 816,
    minHeight: 1056,
    maxHeight: 1056,
    margin: "auto",
    padding: spacing(2),
    backgroundColor: palette.grey[200],
  })
);

export const ItemContainer = styled(Paper)(({ theme: { spacing } }) => ({
  ...flexCenter,
  minHeight: 240,
  maxHeight: 240,
  paddingTop: spacing(2.5),
  flexDirection: "column",
}));

export const ItemCaption = styled(Box)(({ theme: { spacing } }) => ({
  ...flexCenter,
  paddingTop: spacing(0.75),
  "& p": {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: spacing(1),
    marginRight: spacing(1),
  },
}));

export const PrintButton = styled(Fab)(({ theme: { spacing } }) => ({
  fontSize: 25,
  position: "fixed",
  bottom: spacing(2),
  right: spacing(2),
  "@media print": {
    visibility: "hidden",
  },
}));
