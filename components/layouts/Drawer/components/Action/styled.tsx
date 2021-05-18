import { styled, Box } from "@material-ui/core";
import { flexEndCenter } from "components/layouts/ThemeSetter/mixins";

export const Container = styled(Box)(
  ({ theme: { palette, spacing, transitions } }) => ({
    ...flexEndCenter,
    minHeight: 60,
    maxHeight: 60,
    color: palette.common.white,
    paddingRight: spacing(1.5),
    "& svg": {
      transition: transitions.create("transform"),
    },
    "&[data-is-open='true']": {
      "& svg": {
        transform: "rotate(180deg)",
      },
    },
  })
);
