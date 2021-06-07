import { Box, styled, Avatar, Paper } from "@material-ui/core";

export const ItemContainer = styled(Paper)(
  ({ theme: { spacing, shadows } }) => ({
    padding: spacing(3.5),
    cursor: "pointer",
    userSelect: "none",
    display: "flex",
    alignItems: "strech",
    justifyContent: "center",
    "&:hover": {
      boxShadow: shadows[15],
    },
  })
);

export const ItemCaption = styled(Box)({
  flexGrow: 1,
  "& *": {
    whiteSpace: "nowrap",
  },
});

export const ItemDisplay = styled(Avatar)(
  ({ theme: { spacing, palette } }) => ({
    width: spacing(7),
    height: spacing(7),
    color: palette.background.paper,
    backgroundColor: palette.primary.main,
    fontSize: 35,
  })
);
