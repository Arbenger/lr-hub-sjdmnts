import { Paper, styled, IconButton as MuiIconButton } from '@material-ui/core';
import { flexStartCenter } from 'components/wrapper/ThemeWrapper/mixins';

export const Container = styled(Paper)(({ theme: { spacing } }) => ({
   ...flexStartCenter,
   width: '100%',
   padding: spacing(2),
}));

export const IconButton = styled(MuiIconButton)(({ theme: { spacing } }) => ({
   marginRight: spacing(1),
}));
