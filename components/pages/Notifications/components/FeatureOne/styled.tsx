import { styled, List, Paper, Box, Button } from "@material-ui/core";

export const Container = styled(Paper)({});

export const LoadMoreContainer = styled(Box)(({ theme: { spacing } }) => ({
  padding: spacing(2),
  paddingTop: 0,
}));

export const LoadMoreButton = styled(Button)(({ theme: { appPalette } }) => ({
  width: "100%",
  color: appPalette[appPalette.current].contrastText,
  backgroundColor: appPalette[appPalette.current].main,
  "&:hover": {
    backgroundColor: appPalette[appPalette.current].dark,
  },
}));
