import { styled } from "@material-ui/core";

export const RootContainer = styled("div")(({ theme: { appPalette } }) => ({
  color: appPalette[appPalette.current].contrastText,
}));

export const FeatureTwoContainer = styled("div")(
  ({ theme: { appPalette, spacing } }) => ({
    backgroundColor: appPalette[appPalette.current].dark,
    padding: spacing(2),
    textAlign: "center",
  })
);
