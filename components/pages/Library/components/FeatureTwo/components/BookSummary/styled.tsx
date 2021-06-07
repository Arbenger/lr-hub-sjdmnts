import {
  Box,
  Paper,
  styled,
  Typography,
  Button as MuiButton,
} from "@material-ui/core";
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

export const Subtitle = styled(Typography)({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
});

export const Button = styled(MuiButton)(({ theme: { spacing } }) => ({
  marginTop: spacing(1),
}));

export const Description = styled(Typography)({
  display: "box",
  lineClamp: 3,
  boxOrient: "vertical",
  overflow: "hidden",
});
