import { Box, Paper, styled } from "@material-ui/core";

export const BookBackgroundCover = styled(Box)({
  width: "100%",
  height: 350,
  backgroundPosition: "center",
  backgroundSize: "cover",
});

export const BookCover = styled(Paper)(({ theme: { spacing, palette } }) => ({
  width: "fit-content",
  margin: "auto",
  marginTop: -spacing(25),
  padding: spacing(1),
  paddingBottom: spacing(0.25),
  backgroundColor: palette.primary.main,
  "& img": {
    borderRadius: spacing(1),
  },
}));
