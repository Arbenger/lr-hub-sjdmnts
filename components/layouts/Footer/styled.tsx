import { styled } from "@material-ui/core";
import { flexCenter } from "../ThemeSetter/mixins";

export const RootContainer = styled("div")(({ theme: { appPalette } }) => ({
  color: appPalette[appPalette.current].contrastText,
}));

export const FeatureTwoContainer = styled("div")(
  ({ theme: { appPalette } }) => ({
    ...flexCenter,
    minHeight: 60,
    maxHeight: 60,
    textAlign: "center",
    backgroundColor: appPalette[appPalette.current].dark,
  })
);
