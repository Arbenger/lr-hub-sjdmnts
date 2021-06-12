import { Box, Paper, styled } from '@material-ui/core';
import { flexCenter } from 'components/layouts/ThemeSetter/mixins';

export const Container = styled(Paper)(({ theme: { spacing } }) => ({
   ...flexCenter,
   minHeight: 240,
   maxHeight: 240,
   paddingTop: spacing(2.5),
   flexDirection: 'column',
}));

export const Caption = styled(Box)(({ theme: { spacing } }) => ({
   ...flexCenter,
   paddingTop: spacing(0.75),
   '& p': {
      fontSize: 12,
      fontWeight: 'bold',
      marginLeft: spacing(1),
      marginRight: spacing(1),
   },
}));
