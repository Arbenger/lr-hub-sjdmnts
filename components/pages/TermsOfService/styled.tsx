import { styled, Typography, Paper } from '@material-ui/core';

export const ContentContainer = styled(Paper)(
   ({ theme: { spacing, breakpoints } }) => ({
      padding: spacing(4),
      [breakpoints.only('xs')]: {
         padding: spacing(2),
      },
   })
);

export const ContentText = styled(Typography)(({ theme: { spacing } }) => ({
   textIndent: spacing(4),
}));
