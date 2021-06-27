import { styled, Box, Typography } from '@material-ui/core';

import {
   flexCenter,
   flexStartCenter,
} from '../../../../wrappers/ThemeWrapper/mixins';

export const Container = styled(Box)(({ theme: { spacing, palette } }) => ({
   ...flexStartCenter,
   color: palette.common.white,
   backgroundColor: palette.grey[900],
   padding: spacing(2),
   overflow: 'hidden',
}));

export const Icon = styled(Box)(({ theme: { spacing } }) => ({
   ...flexCenter,
   fontSize: 32,
   marginRight: spacing(1.5),
}));

export const ImageContainer = styled(Box)(({ theme: { spacing } }) => ({
   ...flexCenter,
   minWidth: 35,
   maxWidth: 35,
   minHeight: 35,
   maxHeight: 35,
   marginRight: spacing(1.5),
}));

export const Title = styled(Typography)(({ theme: { breakpoints } }) => ({
   fontSize: 23,
   [breakpoints.only('xs')]: {
      fontSize: 18,
   },
}));
