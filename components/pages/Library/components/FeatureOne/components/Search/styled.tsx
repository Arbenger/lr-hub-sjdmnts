import {
  Paper,
  styled,
  IconButton as MuiIconButton,
  TextField as MuiTextField,
} from "@material-ui/core";
import { flexStartCenter } from "components/layouts/ThemeSetter/mixins";

export const Container = styled(Paper)(({ theme: { spacing } }) => ({
  padding: spacing(2),
}));

export const Form = styled("form")({
  ...flexStartCenter,
  width: "100%",
});

export const IconButton = styled(MuiIconButton)(({ theme: { spacing } }) => ({
  marginRight: spacing(1),
}));

export const TextField = styled(MuiTextField)(({ theme: { appPalette } }) => ({
  width: "100%",
  "& label.Mui-focused": {
    color: appPalette[appPalette.current].main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: appPalette[appPalette.current].main,
  },
}));
