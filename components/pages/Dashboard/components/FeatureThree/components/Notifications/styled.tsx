import {
  styled,
  Paper,
  Box,
  Typography,
  Button,
  List as MuiList,
} from "@material-ui/core";

export const RootContainer = styled(Paper)({});

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

export const HeaderButton = styled(Button)(({ theme: { appPalette } }) => ({
  color: appPalette[appPalette.current].main,
}));

export const List = styled(MuiList)({
  paddingTop: 0,
});
