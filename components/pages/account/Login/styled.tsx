import { styled, Paper } from '@material-ui/core';

export const ContentContainer = styled(Paper)(({ theme: { spacing } }) => ({
   width: 'fit-content',
   margin: 'auto',
   backgroundColor: 'rgba(255, 255, 255, .85)',
   '& > div': {
      paddingTop: spacing(2),
      paddingBottom: spacing(2),
   },
}));
