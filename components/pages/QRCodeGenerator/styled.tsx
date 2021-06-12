import { Box, Fab, Paper, styled } from '@material-ui/core';

export const ContentContainer = styled(Paper)(
   ({ theme: { spacing, palette } }) => ({
      minWidth: 816,
      maxWidth: 816,
      minHeight: 1056,
      maxHeight: 1056,
      margin: 'auto',
      padding: spacing(2),
      paddingTop: spacing(1),
      backgroundColor: palette.grey[200],
   })
);

export const PrintButton = styled(Fab)(({ theme: { spacing } }) => ({
   fontSize: 25,
   position: 'fixed',
   bottom: spacing(2),
   right: spacing(2),
   '@media print': {
      visibility: 'hidden',
   },
}));
