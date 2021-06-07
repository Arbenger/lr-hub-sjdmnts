import { styled, Box, Typography, List as MuiList } from "@material-ui/core";

export const Header = styled(Box)(({ theme: { spacing } }) => ({
  padding: spacing(2),
  paddingBottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
}));

export const HeaderTitle = styled(Typography)({
  flexGrow: 1,
});

export const List = styled(MuiList)({
  paddingTop: 0,
});
