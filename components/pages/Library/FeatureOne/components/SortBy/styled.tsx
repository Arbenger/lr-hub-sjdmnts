import {
  Paper,
  styled,
  IconButton as MuiIconButton,
  FormControl as MuiFormControl,
} from "@material-ui/core";
import { flexStartCenter } from "components/layouts/ThemeSetter/mixins";

export const Container = styled(Paper)(({ theme: { spacing } }) => ({
  ...flexStartCenter,
  width: "100%",
  padding: spacing(2),
}));

export const IconButton = styled(MuiIconButton)(({ theme: { spacing } }) => ({
  marginRight: spacing(1),
}));

export const FormControl = styled(MuiFormControl)({
  width: "100%",
});
